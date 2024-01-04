import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "@/components/Header";
import { getData, storeData } from "../../utils/data-storage";
import type { Product } from "@/types/types";

export default function Shop() {
  const [products, setProducts] = useState<[] | Product[]>([]);
  useEffect(() => {
    axios.get("https://mobil.alacakaya.com/get-all-products").then((res) => {
      setProducts(res.data);

      //kayıtlı veri ile gelen veri aynı değilse kaydet
      getData("products").then((stored) => {
        if (stored !== res.data) {
          storeData("products", res.data);
        }
      });
    });
  }, []);

  if (!products.length) {
    return null;
  }

  return (
    <>
      <Header title="SHOP" />
      <ScrollView style={styles.container}>
        {products.map((product) => (
          <TouchableOpacity
            onPress={() =>
              router.replace({
                pathname: "/shop/product/[name]" as `http${string}`,
                params: { id: product.id || "karaman-cream" },
              })
            }
            key={product.id}
            style={styles.item}
          >
            <ImageBackground
              source={{uri: `https://mobil.alacakaya.com/mobil/images/products/${product.id}/${product.image_paths[0]}`}}
              style={styles.item}
              resizeMode="cover"
            >
              <Text style={styles.title}>{product.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 150,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: 25,
    position: "absolute",
    bottom: 3,
    right: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
  },
});
