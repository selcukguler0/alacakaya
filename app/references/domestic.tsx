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
import { router } from "expo-router";

const references = [
  {
    title: "Savoy Residence - İstanbul",
    image: require("../../assets/images/references/domestic/1.jpg"),
  },
  {
    title: "The Galata Hotel - İstanbul",
    image: require("../../assets/images/references/domestic/2.jpg"),
  },
  {
    title: "Titanic Business - İstanbul",
    image: require("../../assets/images/references/domestic/3.jpg"),
  },
  {
    title: "Acıbadem Maslak - İstanbul",
    image: require("../../assets/images/references/domestic/4.jpg"),
  },
  {
    title: "Sapphire Residence - İstanbul",
    image: require("../../assets/images/references/domestic/5.jpg"),
  },
  {
    title: "Taksim Divan Otel - İstanbul",
    image: require("../../assets/images/references/domestic/6.jpg"),
  },
  {
    title: "Shangri-La Beşiktaş",
    image: require("../../assets/images/references/domestic/7.jpg"),
  },
  {
    title: "Onaltı Dokuz - İstanbul",
    image: require("../../assets/images/references/domestic/8.jpg"),
  },
  {
    title: "Wyndham Grand - İstanbul",
    image: require("../../assets/images/references/domestic/9.jpg"),
  },
  {
    title: "Tekfen Residence - İstanbul",
    image: require("../../assets/images/references/domestic/10.jpg"),
  },
  {
    title: "The Grand Tarabya - İstanbul",
    image: require("../../assets/images/references/domestic/11.jpg"),
  },
];

export default function Domestic() {
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
  },
  item: {
    flex: 1,
    alignItems: "center",
    padding: 10,
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
