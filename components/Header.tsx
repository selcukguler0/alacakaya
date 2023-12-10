import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { SafeAreaView, useSafeAreaInsets  } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";
import Screens from "../constants/Screens";

const logo = require("../assets/images/logoWhite.png");

const Header = ({ navigation }: DrawerHeaderProps) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const insets = useSafeAreaInsets();

  const routes = useRoute();
  const route = routes;
  useEffect(() => {
    if (route.name.includes("quarry") && route.params) {
      switch ((route.params as any).name) {
        case "karaman-beige-quarry":
          setHeaderTitle("Karaman Beige Quarry");
          break;
        case "elazig-cherry-quarry":
          setHeaderTitle("Elazığ Cherry Quarry");
          break;
        case "black-pearl-quarry":
          setHeaderTitle("Black Pearl Quarry");
          break;
        case "petrol-green-quarry":
          setHeaderTitle("Petrol Green Quarry");
          break;
        case "kutahya-quarry":
          setHeaderTitle("Kütahya Quarry");
          break;
        default:
          setHeaderTitle("Quarries");
          break;
      }
    } else {
      Screens.forEach((screen) => {
        if (route.name.includes(screen.path)) {
          setHeaderTitle(screen.title);
        }
      });
    }
  }, []);

  return (
    <View style={[styles.container, {paddingTop: insets.top + 5}]}>
      <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>
            ☰
          </Text>
        </TouchableOpacity>
        {headerTitle != "HOME" && (
          <>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.divider}>|</Text>
          </>
        )}
        <Text style={styles.title}>{headerTitle}</Text>
    </View>
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
