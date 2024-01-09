import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from "react-native";

import { router } from "expo-router";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import Colors from "@/constants/Colors";

const productsIcon = require("../assets/icons/product.png");
const shopIcon = require("../assets/icons/shop.png");
const corporateIcon = require("../assets/icons/corporate.png");
const referancesIcon = require("../assets/icons/references.png");
const factoryIcon = require("../assets/icons/factory.png");
const quarriesIcon = require("../assets/icons/quarries.png");
const accountIcon = require("../assets/icons/account.png");
const mapsIcon = require("../assets/icons/maps.png");
const contactIcon = require("../assets/icons/contact.png");

// const factoryIcon = require("../assets/icons/factory.png");

const menu: MenuItems[] = [
  {
    title: "PRODUCTS",
    icon: productsIcon,
    href: "/products",
  },
  {
    title: "SHOP",
    icon: shopIcon,
    href: "/shop",
  },
  {
    title: "CORPORATE",
    icon: corporateIcon,
    href: "/corporate",
  },
  {
    title: "REFERENCES",
    icon: referancesIcon,
    href: "/references",
  },
  {
    title: "FACTORY",
    icon: factoryIcon,
    href: "/",
  },
  {
    title: "QUARRIES",
    icon: quarriesIcon,
    href: "/quarries",
  },
  {
    title: "PERSONAL",
    icon: accountIcon,
    href: "/personal",
  },
  {
    title: "MAPS",
    icon: mapsIcon,
    href: "/maps",
  },
  {
    title: "CONTACT",
    icon: contactIcon,
    href: "/contact",
  },
];

export default function Home() {
  const { user } = useAuth();
  const navigationHandler = (href: string) => {
    router.push(href as `http${string}`);
  };

  return (
    <>
      <Header title="HOME" />
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={{ color: Colors.primaryColor }}>
            Hi, {user ? user.name_surname : "Guest"}
          </Text>
          <Text
            style={{
              color: Colors.primaryColor,
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            WELCOME
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginHorizontal: 20,
          }}
        >
          <FlatList
            data={menu}
            numColumns={3}
            renderItem={({ item }) =>
              !user && (item.title == "SHOP" ||
              item.title == "PERSONAL") ? null : (
                <Pressable
                  style={styles.item}
                  onPress={() => navigationHandler(item.href as string)}
                >
                  <>
                    <Image style={styles.itemIcon} source={item.icon} />
                    <Text style={styles.itemText}>{item.title}</Text>
                  </>
                </Pressable>
              )
            }
            style={{ width: "100%", marginHorizontal: 30 }}
            keyExtractor={(item) => item.title}
          />
          <View style={styles.footer}>
            <Text
              style={{ fontWeight: "bold", fontSize: 26, color: "#292a2e" }}
            >
              ALACAKAYA
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#292a2e" }}
            >
              © {new Date().getFullYear()}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcomeContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  itemContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkPrimaryColor,
    padding: 10,
    paddingVertical: 20,
    margin: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  itemIcon: {
    width: 65,
    height: 65,
    objectFit: "contain",
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
});

type MenuItems = {
  title: string;
  icon: ImageSourcePropType;
  href?: string;
};
