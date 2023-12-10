import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { router } from "expo-router";
import Colors from "../constants/Colors";

const productsIcon = require("../assets/icons/products.png");
const shopIcon = require("../assets/icons/shop.png");
const corporateIcon = require("../assets/icons/corporate.png");
const referancesIcon = require("../assets/icons/referances.png");
const factoryIcon = require("../assets/icons/factory.png");
const quarriesIcon = require("../assets/icons/quarries.png");

const menu: MenuItems[] = [
  {
    title: "PRODUCTS",
    icon: productsIcon,
    href: "/products",
  },
  {
    title: "SHOP",
    icon: shopIcon,
    href: "/products",
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
    href: "/products",
  },
  {
    title: "QUARRIES",
    icon: quarriesIcon,
    href: "/quarries",
  },
];

export default function Home() {
  const navigationHandler = (href: string) => {
    router.push(href as `http${string}`);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.line}></View>
          <Image
            style={styles.logo}
            source={require("../assets/images/logoWhite.png")}
          />
          <View style={styles.line}></View>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginHorizontal: 20,
          }}
        >
          <FlatList
            data={menu}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigationHandler(item.href as string)}
              >
                <Image style={styles.itemIcon} source={item.icon} />
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            style={{ width: "100%", marginHorizontal: 20 }}
            keyExtractor={(item) => item.title}
          />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 60,
  },
  logo: {
    width: 200,
    height: 100,
    objectFit: "contain",
    marginHorizontal: 10,
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "#fff",
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
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#fff7",
    marginHorizontal: 20,
    marginBottom: 20, // Add margin between items vertically
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primaryColor,
  },
  itemIcon: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
});

//get antdesign icons type and create a type for menu items

type MenuItems = {
  title: string;
  icon: ImageSourcePropType;
  href?: string;
};
