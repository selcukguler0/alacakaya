import {
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const products = [
  {
    title: "Cream Karaman",
    image: require("../assets/images/products/29732_karaman-bej.jpg"),
  },
  {
    title: "Rosso Levanto",
    image: require("../assets/images/products/26673_elazig-visne.jpg"),
  },
  {
    title: "Hazar Beige",
    image: require("../assets/images/products/38944_hazar-bej.jpg"),
  },
  {
    title: "Black Pearl",
    image: require("../assets/images/products/72674_siyah-inci.jpg"),
  },
  {
    title: "Milan Gray",
    image: require("../assets/images/products/58595_milan-grey.jpg"),
  },
  {
    title: "Dark Crystal Emperador",
    image: require("../assets/images/products/27151_koyu-kristal.jpg"),
  },
  {
    title: "Premium Gray",
    image: require("../assets/images/products/79764_preminium-gri-mermer.jpg"),
  },
  {
    title: "Breccia Adonis",
    image: require("../assets/images/products/39115_konglomera.jpg"),
  },
  {
    title: "Blue River Onyx",
    image: require("../assets/images/products/23224_mavi-onyx.jpg"),
  },
  {
    title: "Verde Antico",
    image: require("../assets/images/products/17442_petrol-yesili.jpg"),
  },
  {
    title: "White Onyx",
    image: require("../assets/images/products/66874_beyaz-oniks-mermer.jpg"),
  },
  {
    title: "Martini Siyah",
    image: require("../assets/images/products/48764_martini-siyah.jpg"),
  },
];

export default function Products() {
  return (
    <>
      <ScrollView style={styles.container}>
        {products.map((product) => (
          <TouchableOpacity key={product.title} style={styles.item}>
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
