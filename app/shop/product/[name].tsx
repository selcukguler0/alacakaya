import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Dimensions, TouchableOpacity } from "react-native";
import GalleryContainer from "../../../components/Gallery";
import { Toast, showToast } from "../../../utils/toast";

import Header from "../../../components/Header";
import axios from "axios";
import Colors from "../../../constants/Colors";
import { addItem } from "../../../utils/bucket-management";

interface Product {
  id: string;
  name: string;
  image_paths: string[];
}

export default function Product() {
  const galleryRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const local = useLocalSearchParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (local.id) {
      axios.get("http://mobil.alacakaya.com/get-product/" + local.id).then((res) => {
        setProduct(res.data);
      });
    }
    return () => {
      setProduct(undefined);
    };
  }, [local.id]);

  if (!product) {
    return null;
  }

  const addItemHandler = (id: string) => {
    addItem(id, 0);
    showToast("success", "Added to bucket");
  };

  const images = product.image_paths.map(
    (image) => `http://mobil.alacakaya.com/mobil/images/products/${product.id}/${image}`
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
        <ScrollView style={styles.container}>
          <Link href="/shop/" style={styles.backBtn}>
            Back to Shop
          </Link>
          <View style={styles.wrapper}>
            {/* photos */}
            <View style={styles.imagesContainer}>
              {product.image_paths.map((image, index) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setGalleryIndex(index);
                  }}
                  key={index}
                >
                  <Image
                    source={{
                      uri: `http://mobil.alacakaya.com/mobil/images/products/${product.id}/${image}`,
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
            <TouchableOpacity
              onPress={() => addItemHandler(product.id)}
              style={styles.bucketBtn}
            >
              <Text style={styles.bucketBtnText}>Add to bucket</Text>
            </TouchableOpacity>
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
