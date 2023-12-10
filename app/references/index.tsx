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
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
const references = {
  abroad: [
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
  ],
  domestic: [
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
  ],
};
export default function References() {
 
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => router.push("/references/abroad")}
        >
          <ImageBackground
            source={references.abroad[0].image}
            style={styles.filterImg}
            resizeMode="cover"
          >
            <Text style={styles.filterText}>Abroad</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => router.push("/references/domestic")}
        >
          <ImageBackground
            source={references.domestic[1].image}
            style={styles.filterImg}
            resizeMode="cover"
          >
            <Text style={styles.filterText}>Domestic</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
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
