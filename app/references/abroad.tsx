import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import BackgroundImage from "../../components/BackgroundImage";
import { router } from "expo-router";

const references = [
  {
    title: "Atana Hotel - BAE",
    image: require("../../assets/images/references/abroad/1.jpg"),
  },
  {
    title: "Kâbe - Mekke, Suudi Arabistan",
    image: require("../../assets/images/references/abroad/2.jpg"),
  },
  {
    title: "Hotel Galleria - Jeddah",
    image: require("../../assets/images/references/abroad/3.jpg"),
  },
  {
    title: "Intourist Palace Hotel - Gürcistan",
    image: require("../../assets/images/references/abroad/4.jpg"),
  },
  {
    title: "Royal Mediterranean Hotel - China",
    image: require("../../assets/images/references/abroad/5.jpg"),
  },
  {
    title: "Atlantis Hotel Dubai - BAE",
    image: require("../../assets/images/references/abroad/6.jpg"),
  },
  {
    title: "Pera Palace - İstanbul",
    image: require("../../assets/images/references/abroad/7.jpg"),
  },
  {
    title: "Cratos Hotel - Cyprus",
    image: require("../../assets/images/references/abroad/8.jpg"),
  },
];

export default function References() {
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
          <TouchableOpacity style={styles.item}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={{ width: "100%", marginTop: 20 }}
        keyExtractor={(item) => item.title}
      />
      <BackgroundImage />
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
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: -1,
  },
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
});
