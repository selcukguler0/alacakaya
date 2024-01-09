import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";
import Markdown from "react-native-markdown-display";
import Countdown from "../../../components/Countdown";
import GalleryContainer from "../../../components/Gallery";
import Colors from "../../../constants/Colors";
import type { Product } from "../../../types/types";
import { addItem } from "../../../utils/bucket-management";
import { Toast, showToast } from "../../../utils/toast";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Product() {
  const insets = useSafeAreaInsets();

  const galleryRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const local = useLocalSearchParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (local.id) {
      getProduct(local.id as string);
    }

    return () => {
      setProduct(undefined);
    };
  }, [local.id]);

  const onRefresh = async () => {
    setRefreshing(true);
    await getProduct(local.id as string);
    setRefreshing(false);
  };

  const getProduct = async (id: string) => {
    try {
      const productRes = await axios.get(
        "https://mobil.alacakaya.com/get-alt-product/" + id
      );
      const getProduct = productRes.data;
      console.log("getProduct", getProduct);
      console.log("id :>> ", id);

      let data = new FormData();
      data.append("productId", getProduct.id);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://mobil.alacakaya.com/is-product-reserved",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: data,
      };

      const reservedRes = await axios.request(config);
      const { reserved, remainingTime } = reservedRes.data;

      getProduct.is_reserved = reserved;
      getProduct.remainingTime = remainingTime;
      setProduct(getProduct);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  console.log("local", local);
  console.log("product :>> ", product);

  if (!product) {
    return null;
  }
  console.log("product", product);

  const addItemHandler = (id: string) => {
    addItem(id, 0);
    showToast("success", "Added to bucket");
  };

  const images = product.image_paths.map(
    (image) =>
      `https://mobil.alacakaya.com/mobil/images/alt_products/${product.id}/${image}`
  );
  return (
    <>
      <Toast />
      {/* <Header title={product.name} /> */}
      {galleryIndex !== null ? (
        <GalleryContainer
          {...{ images, galleryIndex, setGalleryIndex, galleryRef }}
        />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={[styles.container, { paddingTop: insets.top + 5 }]}
        >
          <View style={styles.topBar}>
            <Pressable onPress={() => router.push(local.returnURL as "http")}>
              <FontAwesome name="arrow-left" size={24} color="white" />
            </Pressable>
            <View style={styles.topBar.wrapper as StyleProp<ViewStyle>}>
              <TouchableOpacity
                onPress={() => addItemHandler(product.id)}
                style={styles.bucketBtn}
              >
                <Text style={styles.bucketBtnText}>Add to bucket</Text>
              </TouchableOpacity>
              <Pressable
                style={{ marginRight: 5 }}
                onPress={() => router.push("/shop/bucket")}
              >
                <FontAwesome
                  name="shopping-cart"
                  size={24}
                  color={Colors.primaryColor}
                />
              </Pressable>
            </View>
          </View>
          <Text style={styles.title}>{product.name}</Text>

          {product.is_reserved ? (
            <Countdown timeInMilliseconds={product.remainingTime} />
          ) : null}
          <View style={styles.wrapper}>
            {/* photos */}
            <View style={styles.imagesContainer}>
              {product.image_paths &&
                product.image_paths.map((image, index) => (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setGalleryIndex(index);
                    }}
                    key={index}
                  >
                    <Image
                      source={{
                        uri: `https://mobil.alacakaya.com/mobil/images/products/${product.id}/${image}`,
                      }}
                      style={{
                        width: Dimensions.get("window").width / 2 - 15,
                        height: 200,
                        resizeMode: "cover",
                        marginBottom: 10,
                        borderColor: Colors.primaryColor,
                        borderWidth: 3,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableWithoutFeedback>
                ))}
            </View>
            {product.content && (
              <View style={{ marginVertical: 30 }}>
                <Markdown>{product.content}</Markdown>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
    alignItems: "center",
  },
  topBar: {
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  },
  bucketBtn: {
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: Colors.primaryColor,
    color: "#fff",
    fontWeight: "bold",
  },
  bucketBtnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 23,
    color: Colors.primaryColor,
    marginLeft: 10,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
  },
  backBtn: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0006",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
