import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Dimensions, TouchableOpacity } from "react-native";
import axios from "axios";
import Markdown, {
  MarkdownIt,
} from "react-native-markdown-display";
import GalleryContainer from "../../../components/Gallery";
import { Toast, showToast } from "../../../utils/toast";
import Header from "../../../components/Header";
import Colors from "../../../constants/Colors";
import { addItem } from "../../../utils/bucket-management";
import Countdown from "../../../components/Countdown";
import type { Product } from "../../../types/types";

const markdownItInstance = MarkdownIt({ typographer: true });

export default function Product() {
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
        "https://mobil.alacakaya.com/get-product/" + id
      );
      const getProduct = productRes.data;

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
      `https://mobil.alacakaya.com/mobil/images/products/${product.id}/${image}`
  );
  return (
    <>
      <Header title={product.name} />
      <Toast />
      {galleryIndex !== null ? (
        <GalleryContainer
          {...{ images, galleryIndex, setGalleryIndex, galleryRef }}
        />
      ) : (
        <>
          <Link href="/shop/" style={styles.backBtn}>
            Back to Shop
          </Link>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={styles.container}
          >
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
                        }}
                      />
                    </TouchableWithoutFeedback>
                  ))}
              </View>
              {product.content && <View style={{marginVertical: 30}}><Markdown>{product.content}</Markdown></View>}
              <TouchableOpacity
                onPress={() => addItemHandler(product.id)}
                style={styles.bucketBtn}
              >
                <Text style={styles.bucketBtnText}>Add to bucket</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
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
  bucketBtn: {
    width: "100%",
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
    fontSize: 20,
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
