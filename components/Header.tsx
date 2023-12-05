import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { DrawerHeaderProps } from "@react-navigation/drawer";

type HeaderProps = DrawerHeaderProps & {
  title: string;
};

const logo = require("../assets/images/logoWhite.png");

const Header = ({ navigation, title }: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>☰</Text>
      </TouchableOpacity>
      {title != "HOME" && (
        <>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.divider}>|</Text>
        </>
      )}
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.primaryColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 100,
    height: 50,
    objectFit: "contain",
  },
  divider: {
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    color: "white",
  },
});
