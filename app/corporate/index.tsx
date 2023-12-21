import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
import { useHeader } from "../../context/HeaderContext";

const links = [
  {
    title: "About Us",
    link: "/corporate/about-us",
    image: require("../../assets/images/corporate/1.jpg"),
  },
  {
    title: "History",
    link: "/corporate/history",
    image: require("../../assets/images/corporate/3.jpg"),
  },
  {
    title: "Quality Policy",
    link: "/corporate/quality-policy",
    image: require("../../assets/images/corporate/4.jpg"),
  },
  {
    title: "Environmental Policy",
    link: "/corporate/environmental-policy",
    image: require("../../assets/images/corporate/6.jpg"),
  },
  {
    title: "Dealers",
    link: "/corporate/dealers",
    image: require("../../assets/images/corporate/8.jpg"),
  },
];

export default function Corporate() {
  const { setTitle } = useHeader();
  useEffect(() => {
    setTitle("CORPORATE");
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        {links.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.filterBtn}
            onPress={() => router.push(item.link as `http${string}`)}
          >
            <ImageBackground
              source={item.image}
              style={styles.filterImg}
              resizeMode="cover"
            >
              <Text style={styles.filterText}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    marginBottom: 20, // Add margin between items vertically
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  itemIcon: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  filterBtn: {
    width: "100%",
  },
  filterImg: {
    width: "100%",
    height: 150,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
