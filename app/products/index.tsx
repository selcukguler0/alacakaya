import { router } from "expo-router";
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getData, storeData } from "../../utils/data-storage";
interface Product {
  id: string;
  name: string;
  image_paths: string[];
}

export default function Products() {
  const [products, setProducts] = useState<[] | Product[]>([]);
  useEffect(() => {
    req();
  }, []);
  const req = async () => {
    const res = await fetch("http://mobil.alacakaya.com/get-all-products");
    const data = await res.json();
    setProducts(data);
    getData("products").then((stored) => {
      if (stored !== data) {
        storeData("products", data);
      }
    });
  };

  return (
    <>
      <Header title="PRODUCTS" />
      <ScrollView style={styles.container}>
        {products &&
          products.map((product) => (
            <TouchableOpacity
              onPress={() =>
                router.replace({
                  pathname: "/products/product/[name]" as `http${string}`,
                  params: { id: product.id || "karaman-cream" },
                })
              }
              key={product.id}
              style={styles.item}
            >
              <ImageBackground
                source={{
                  uri: `http://mobil.alacakaya.com/mobil/images/products/${product.id}/${product.image_paths[0]}`,
                }}
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
