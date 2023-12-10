import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { A } from "@expo/html-elements";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/corporate/")}
        style={styles.backBtn}
      >
        <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>
          {"<- Corporate"}
        </Text>
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.paragraph}>
          Suudi Arabistan ortak girişim şirketimiz Elegant Homely{" - "}
          <A style={styles.link} href="http://www.eleganthomely.com/">
            www.eleganthomely.com
          </A>
        </Text>
        <Text style={styles.paragraph}>
          Emmar For Marble Iraq -Al Najaf city Green Road Al Forat area
        </Text>
        <Text style={styles.paragraph}>
          Harput Kft, 1075 Budapest Hollo Utca 12-14 , 2.Emelet 201. Hungary
          {" - "}
          <A style={styles.link} href="https://www.triholding.com/en/home/">
            www.triholding.com
          </A>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
  },
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
  link: {
    color: "blue",
  },
});
