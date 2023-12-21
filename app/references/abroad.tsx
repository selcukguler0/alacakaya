import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
import { useHeader } from "../../context/HeaderContext";

const references = [
  {
    title: "Atana Hotel - BAE",
    image: require("../../assets/images/references/abroad/1.jpg"),
    link: "atana-hotel",
  },
  {
    title: "Kâbe - Mekke, Suudi Arabistan",
    image: require("../../assets/images/references/abroad/2.jpg"),
    link: "kabe-mekke",
  },
  {
    title: "Hotel Galleria - Jeddah",
    image: require("../../assets/images/references/abroad/3.jpg"),
    link: "hotel-galleria",
  },
  {
    title: "Intourist Palace Hotel - Gürcistan",
    image: require("../../assets/images/references/abroad/4.jpg"),
    link: "intourist-palace-hotel",
  },
  {
    title: "Royal Mediterranean Hotel - China",
    image: require("../../assets/images/references/abroad/5.jpg"),
    link: "royal-mediterranean-hotel",
  },
  {
    title: "Atlantis Hotel Dubai - BAE",
    image: require("../../assets/images/references/abroad/6.jpg"),
    link: "atlantis-hotel-dubai",
  },
  {
    title: "Pera Palace - İstanbul",
    image: require("../../assets/images/references/abroad/7.jpg"),
    link: "pera-palace",
  },
  {
    title: "Cratos Hotel - Cyprus",
    image: require("../../assets/images/references/abroad/8.jpg"),
    link: "cratos-hotel",
  },
];

export default function Abroad() {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("ABROAD");
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/references/")}
        style={styles.backBtn}
      >
        <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>
          {"<- References"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={references}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>router.replace({
            pathname: "/references/reference/[name]" as `http${string}`,
            params: {
              name: item.link,
             }})} style={styles.item}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={{ width: "100%", marginTop: 20 }}
        keyExtractor={(item) => item.title}
      />
    </View>
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
    alignItems: "center",
    marginBottom: 20, // Add margin between items vertically
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  itemImage: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
});
