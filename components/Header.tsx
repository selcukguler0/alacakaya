import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";
import Screens from "../constants/Screens";

const logo = require("../assets/images/logoWhite.png");

type Props = {
  headerTitleProp?: string;
} & DrawerHeaderProps;

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
    } else if (route.name.includes("product") && route.params) {
      switch ((route.params as any).name) {
        case "elazig-cherry":
          setHeaderTitle("Elazıg Cherry");
          break;
        case "karaman-cream":
          setHeaderTitle("Karaman Cream");
          break;
        case "black-pearl":
          setHeaderTitle("Black Pearl");
          break;
        case "petrol-green":
          setHeaderTitle("Petrol Green");
          break;
        case "premium-gray":
          setHeaderTitle("Premium Gray");
          break;
        default:
          setHeaderTitle("Product");
          break;
      }
    } else if (route.name.includes("reference") && route.params) {
      switch ((route.params as any).name) {
        //abroad references
        case "atana-hotel":
          setHeaderTitle("Atana Hotel");
          break;
        case "kabe-mekke":
          setHeaderTitle("Kâbe - Mekke");
          break;
        case "hotel-galleria":
          setHeaderTitle("Hotel Galleria");
          break;
        case "intourist-palace-hotel":
          setHeaderTitle("Intourist Palace Hotel");
          break;
        case "royal-mediterranean-hotel":
          setHeaderTitle("Royal Mediterranean Hotel");
          break;
        case "atlantis-hotel-dubai":
          setHeaderTitle("Atlantis Hotel Dubai");
          break;
        case "pera-palace":
          setHeaderTitle("Pera Palace");
          break;
        case "cratos-hotel":
          setHeaderTitle("Cratos Hotel");
          break;
        //domestic references
        case "savoy-residence":
          setHeaderTitle("Savoy Residence - İstanbul");
          break;
        case "the-galata-hotel":
          setHeaderTitle("The Galata Hotel - İstanbul");
          break;
        case "titanic-business":
          setHeaderTitle("Titanic Business - İstanbul");
          break;
        case "acibadem-maslak":
          setHeaderTitle("Acıbadem Maslak - İstanbul");
          break;
        case "sapphire-residence":
          setHeaderTitle("Sapphire Residence - İstanbul");
          break;
        case "taksim-divan-otel":
          setHeaderTitle("Taksim Divan Otel - İstanbul");
          break;
        case "shangri-la-besiktas":
          setHeaderTitle("Shangri-La Beşiktaş");
          break;
        case "onalti-dokuz":
          setHeaderTitle("Onaltı Dokuz - İstanbul");
          break;
        case "wyndham-grand":
          setHeaderTitle("Wyndham Grand - İstanbul");
          break;
        case "tekfen-residence":
          setHeaderTitle("Tekfen Residence - İstanbul");
          break;
        case "the-grand-tarabya":
          setHeaderTitle("The Grand Tarabya - İstanbul");
          break;

        default:
          setHeaderTitle("Product");
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
    <View style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>☰</Text>
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
