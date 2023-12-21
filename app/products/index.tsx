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
import axios from "axios";
import { API_URL } from "../../constants/Enpoints";

// const products = [
//   {
//     title: "Elazig Cherry",
//     image: require("../../assets/images/products/Elazig-Visne.jpg"),
//     link: "elazig-cherry",
//   },
//   {
//     title: "Karaman Cream",
//     image: require("../../assets/images/products/Krem-Karaman.jpg"),
//     link: "karaman-cream",
//   },
//   {
//     title: "Black Pearl",
//     image: require("../../assets/images/products/Siyah-İnci.jpg"),
//     link: "black-pearl",
//   },
//   {
//     title: "Petrol Green",
//     image: require("../../assets/images/products/Petrol-Yesili.jpg"),
//     link: "petrol-green",
//   },
//   {
//     title: "Premium Gray",
//     image: require("../../assets/images/products/Premium-Gri-Mermer.jpg"),
//     link: "premium-gray",
//   },
//   {
//     title: "Pearl Grey",
//     image: require("../../assets/images/products/inci-Gri-Mermer.jpg"),
//     link: "pearl-grey",
//   },
//   {
//     title: "Milan Gray Cross",
//     image: require("../../assets/images/products/Milan-Grey-Marble-Cross.jpg"),
//     link: "milan-gray-cross",
//   },
//   {
//     title: "Milan Gray Vein",
//     image: require("../../assets/images/products/Milan-Grey-wein-Cut.jpg"),
//     link: "milan-gray-vein",
//   },
//   {
//     title: "Cielo",
//     image: require("../../assets/images/products/Cielo-Marble-New.jpg"),
//     link: "cielo",
//   },
//   {
//     title: "Midnight",
//     image: require("../../assets/images/products/Midnight.jpg"),
//     link: "midnight",
//   },
//   {
//     title: "Black Jack",
//     image: require("../../assets/images/products/Black-Jack-Mermer.jpg"),
//     link: "black-jack",
//   },
//   {
//     title: "Aliento",
//     image: require("../../assets/images/products/Aliento.jpg"),
//     link: "aliento",
//   },
//   {
//     title: "Bella",
//     image: require("../../assets/images/products/Bella-Mermer.jpg"),
//     link: "bella",
//   },
// ];

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(API_URL + "/get-all-products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <Header  title="PRODUCTS" />
      <ScrollView style={styles.container}>
        {products.map((product) => (
          <TouchableOpacity
            onPress={() =>
              router.replace({
                pathname: "/products/product/[name]" as `http${string}`,
                params: { name: product.link || "karaman-cream" },
              })
            }
            key={product.title}
            style={styles.item}
          >
            <ImageBackground
              source={product.image}
              style={styles.item}
              resizeMode="cover"
            >
              <Text style={styles.title}>{product.title}</Text>
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
