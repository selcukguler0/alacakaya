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
import { Dimensions } from "react-native";
import GalleryContainer from "../../../components/Gallery";

import Header from "../../../components/Header";
import axios from "axios";
import type { Product } from "../../../types/types";
import Markdown from "react-native-markdown-display";

export default function Product() {
  const galleryRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const local = useLocalSearchParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (local.id) {
      axios
        .get("https://mobil.alacakaya.com/get-product/" + local.id)
        .then((res) => {
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

  const images = product.image_paths.map(
    (image) =>
      `https://mobil.alacakaya.com/mobil/images/products/${product.id}/${image}`
  );
  return (
    <>
      <Header title={product.name} />
      {galleryIndex !== null ? (
        <GalleryContainer
          {...{ images, galleryIndex, setGalleryIndex, galleryRef }}
        />
      ) : (
        <ScrollView style={styles.container}>
          <Link href="/products/" style={styles.backBtn}>
            Back to Products
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

              {product.content && (
                <View style={{ marginVertical: 30 }}>
                  <Markdown>{product.content}</Markdown>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
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
