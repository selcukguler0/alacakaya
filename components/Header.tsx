import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useNavigation } from "expo-router/src/useNavigation";
import { useAuth } from "../context/AuthContext";

const logo = require("../assets/images/logo.png");

const Header = ({ title }: { title: string }) => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text
          style={{ fontSize: 20, marginRight: 10, color: Colors.primaryColor }}
        >
          ☰
        </Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.divider}>|</Text>
      <Text style={styles.title}>{title}</Text>
      {user && (
        <Pressable
          style={{ marginRight: 5 }}
          onPress={() => router.push("/shop/bucket")}
        >
          <FontAwesome
            name="shopping-cart"
            size={24}
            color={Colors.primaryColor}
          />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 3,
    backgroundColor: Colors.darkPrimaryColor,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.darkPrimaryColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primaryColor,
    maxWidth: 200,
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
    color: Colors.primaryColor,
  },
});
