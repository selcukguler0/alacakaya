import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Colors from "@/constants/Colors";
import type { Product } from "@/types/types";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Category() {
  const [loading, setLoading] = useState(true);
  const [altProducts, setAltProducts] = useState<[] | Product[]>([]);
  const local = useLocalSearchParams();

  useEffect(() => {
    getAltProducts();
  }, []);

  const getAltProducts = async () => {
    const res = await axios.get(
      `https://mobil.alacakaya.com/get-alt-products-by-id/${local.id}`
    );
    setAltProducts(res.data);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header title="SHOP" />
      <View style={styles.container}>
        <BackButton url="/shop/" text="Back to shop" />

        {altProducts.length > 0 ? (
          <FlatList
            data={altProducts}
            numColumns={2}
            renderItem={({ item: product }) => (
              <TouchableOpacity
                onPress={() =>
                  router.replace({
                    pathname: "/shop/product/[name]" as `http${string}`,
                    params: {
                      id: product.id,
                      returnURL: `/shop/category/${local.id}`,
                    },
                  })
                }
                style={styles.item}
              >
                <Image
                  style={styles.itemImage}
                  source={{
                    uri: `https://mobil.alacakaya.com/mobil/images/cover_images/${product.cover_image}`,
                  }}
                />
                <Text style={styles.itemText}>{product.name}</Text>
              </TouchableOpacity>
            )}
            style={{ width: "100%", marginTop: 20 }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            No products found
          </Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: Colors.primaryColor,
    marginVertical: 10,
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  itemImage: {
    width: "100%",
    height: 160,
    objectFit: "contain",
  },
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
});
