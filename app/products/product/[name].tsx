import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Dimensions } from "react-native";
import GalleryContainer from "../../../components/Gallery";
import { useHeader } from "../../../context/HeaderContext";

const products = [
  {
    title: "KARAMAN CREAM",
    link: "karaman-cream",
    images: [
      require("../../../assets/images/products/karaman-cream/1.jpg"),
      require("../../../assets/images/products/karaman-cream/2.jpg"),
      require("../../../assets/images/products/karaman-cream/3.jpg"),
      require("../../../assets/images/products/karaman-cream/4.jpg"),
    ],
    technical_specs: [
      {
        title: "Mons Stiffness",
        value: "4 Mohs",
      },
      {
        title: "Intensity",
        value: "2.74 G/cm3",
      },
      {
        title: "Unit Volume Weight",
        value: "2.73 G/cm3",
      },
      {
        title: "Water Absorption in Boiling Water",
        value: "% 0.2",
      },
      {
        title: "Post-Frost Compressive Resistance",
        value: "132 Mpa",
      },
      {
        title: "Frost Loss",
        value: "% 0",
      },
      {
        title: "Impact Resistance",
        value: "24 Kgf.cm/cm3",
      },
      {
        title: "Bending Strength",
        value: "17 Mpa",
      },
      {
        title: "Apparent Porosity",
        value: "% 0.5",
      },
      {
        title: "Solidity ratio",
        value: "% 99.6",
      },
      {
        title: "Porosity Degree",
        value: "% 0.4",
      },
      {
        title: "Average Wear Resistance",
        value: "11 cm2/50 cm2",
      },
    ],
  },
  {
    title: "Elazig Cherry",
    link: "elazig-cherry",
    images: [
      require("../../../assets/images/products/elazig-cherry/1.jpg"),
      require("../../../assets/images/products/elazig-cherry/2.jpg"),
      require("../../../assets/images/products/elazig-cherry/3.jpg"),
      require("../../../assets/images/products/elazig-cherry/4.jpg"),
    ],
    technical_specs: [
      {
        title: "Mons Stiffness",
        value: "4 Mohs",
      },
      {
        title: "Intensity",
        value: "2.71 G/cm3",
      },
      {
        title: "Unit Volume Weight",
        value: "2.69 G/cm3",
      },
      {
        title: "Water Absorption in Boiling Water",
        value: "% 0.5",
      },
      {
        title: "Post-Frost Compressive Resistance",
        value: "77.52 Mpa",
      },
      {
        title: "Frost Loss",
        value: "% 0",
      },
      {
        title: "Impact Resistance",
        value: "12 Kgf.cm/cm3",
      },
      {
        title: "Bending Strength",
        value: "13.5 Mpa",
      },
      {
        title: "Apparent Porosity",
        value: "% 1.86",
      },
      {
        title: "Solidity ratio",
        value: "% 98.14",
      },
      {
        title: "Porosity Degree",
        value: "% 1.86",
      },
      {
        title: "Average Wear Resistance",
        value: "23.2 cm2/50 cm2",
      },
      {
        title: "Pressure Resistance",
        value: "94.5 MPa",
      },
      {
        title: "Capillary Water Absorption Coefficient",
        value: "0.425 G/m2.s 0.5",
      },
      {
        title: "Water Absorption at Atmospheric Pressure",
        value: "0.7%",
      },
    ],
  },
  {
    title: "BLACK PEARL",
    link: "black-pearl",
    images: [
      require("../../../assets/images/products/black-pearl/1.jpg"),
      require("../../../assets/images/products/black-pearl/2.jpg"),
      require("../../../assets/images/products/black-pearl/3.jpg"),
      require("../../../assets/images/products/black-pearl/4.jpg"),
    ],
    technical_specs: [
      {
        title: "Mons Stiffness",
        value: "4 Mohs",
      },
      {
        title: "Intensity",
        value: "2.71 G/cm3",
      },
      {
        title: "Unit Volume Weight",
        value: "2.69 G/cm3",
      },
      {
        title: "Water Absorption in Boiling Water",
        value: "% 0.3",
      },
      {
        title: "Post-Frost Compressive Resistance",
        value: "103.98 MPa",
      },
      {
        title: "Frost Loss",
        value: "% 0",
      },
      {
        title: "Impact Resistance",
        value: "20 Kgf.cm/cm3",
      },
      {
        title: "Bending Strength",
        value: "34.15 MPa",
      },
      {
        title: "Apparent Porosity",
        value: "0.2 %",
      },
      {
        title: "Solidity ratio",
        value: "99.8 %",
      },
      {
        title: "Porosity Degree",
        value: "0.2 %",
      },
      {
        title: "Average Wear Resistance",
        value: "17cm2/50cm2",
      },
      {
        title: "Pressure Resistance",
        value: "138.4 MPa",
      },
      {
        title: "Capillary Water Absorption Coefficient",
        value: "0.35 G/m2.s0.5",
      },
      {
        title: "Water Absorption at Atmospheric Pressure",
        value: "0.08%",
      },
    ],
  },
  {
    title: "PETROL GREEN",
    link: "petrol-green",
    images: [
      require("../../../assets/images/products/patrol-green/1.jpg"),
      require("../../../assets/images/products/patrol-green/2.jpg"),
      require("../../../assets/images/products/patrol-green/3.jpg"),
      require("../../../assets/images/products/patrol-green/4.jpg"),
    ],
    technical_specs: [
      {
        title: "Mons Stiffness",
        value: "4 Mohs",
      },
      {
        title: "Intensity",
        value: "2.7G/cm3",
      },
      {
        title: "Unit Volume Weight",
        value: "2.69 G/cm3",
      },
      {
        title: "Water Absorption in Boiling Water",
        value: "0.45%",
      },
      {
        title: "Post-Frost Compressive Resistance",
        value: "63.81 MPa",
      },
      {
        title: "Frost Loss",
        value: "% 0",
      },
      {
        title: "Impact Resistance",
        value: "12 Kgf.cm/cm3",
      },
      {
        title: "Bending Strength",
        value: "26.6 MPa",
      },
      {
        title: "Apparent Porosity",
        value: "1.2 %",
      },
      {
        title: "Solidity ratio",
        value: "98.8 %",
      },
      {
        title: "Porosity Degree",
        value: "1.2 %",
      },
      {
        title: "Average Wear Resistance",
        value: "27.7cm2/50cm2",
      },
      {
        title: "Pressure Resistance",
        value: "82.2 MPa",
      },
      {
        title: "Capillary Water Absorption Coefficient",
        value: "0.365 G/m2.s0.5",
      },
      {
        title: "Water Absorption at Atmospheric Pressure",
        value: "0.45%",
      },
    ],
  },
  {
    title: "PREMIUM GRAY",
    link: "premium-gray",
    images: [
      require("../../../assets/images/products/premium-gray/1.jpg"),
      require("../../../assets/images/products/premium-gray/2.jpg"),
      require("../../../assets/images/products/premium-gray/3.jpg"),
      require("../../../assets/images/products/premium-gray/4.jpg"),
    ],
    technical_specs: [
      {
        title: "Mons Stiffness",
        value: "4 Mohs",
      },
      {
        title: "Intensity",
        value: "2.74G/cm3",
      },
      {
        title: "Unit Volume Weight",
        value: "2.73 G/cm3",
      },
      {
        title: "Water Absorption in Boiling Water",
        value: "0.2%",
      },
      {
        title: "Post-Frost Compressive Resistance",
        value: "132 MPa",
      },
      {
        title: "Frost Loss",
        value: "% 0",
      },
      {
        title: "Impact Resistance",
        value: "24 Kgf.cm/cm3",
      },
      {
        title: "Bending Strength",
        value: "17 MPa",
      },
      {
        title: "Apparent Porosity",
        value: "0.5%",
      },
      {
        title: "Solidity ratio",
        value: "99.6%",
      },
      {
        title: "Porosity Degree",
        value: "0.4%",
      },
      {
        title: "Average Wear Resistance",
        value: "11cm2/50cm2",
      },
      {
        title: "Pressure Resistance",
        value: "125 MPa",
      },
      {
        title: "Capillary Water Absorption Coefficient",
        value: "0.303 G/m2.s0.5",
      },
      {
        title: "Water Absorption at Atmospheric Pressure",
        value: "0.2%",
      },
    ],
  },
  {
    title: "PEARL GREY",
    link: "pearl-grey",
    images: [
      require("../../../assets/images/products/pearl-grey/1.jpg"),
      require("../../../assets/images/products/pearl-grey/2.jpg"),
      require("../../../assets/images/products/pearl-grey/3.jpg"),
      require("../../../assets/images/products/pearl-grey/4.jpg"),
    ],
  },
  {
    title: "MILAN GRAY CROSS",
    link: "milan-gray-cross",
    images: [
      require("../../../assets/images/products/milan-gray-cross/1.jpg"),
      require("../../../assets/images/products/milan-gray-cross/2.jpg"),
      require("../../../assets/images/products/milan-gray-cross/3.jpg"),
      require("../../../assets/images/products/milan-gray-cross/4.jpg"),
    ],
  },
  {
    title: "MILAN GRAY VEIN",
    link: "milan-gray-vein",
    images: [
      require("../../../assets/images/products/milan-gray-vein/1.jpg"),
      require("../../../assets/images/products/milan-gray-vein/2.jpg"),
      require("../../../assets/images/products/milan-gray-vein/3.jpg"),
      require("../../../assets/images/products/milan-gray-vein/4.jpg"),
    ],
  },
  {
    title: "CİELO",
    link: "cielo",
    images: [
      require("../../../assets/images/products/cielo/1.jpg"),
      require("../../../assets/images/products/cielo/2.jpg"),
      require("../../../assets/images/products/cielo/3.jpg"),
      require("../../../assets/images/products/cielo/4.jpg"),
    ],
  },
  {
    title: "MİDNİGHT",
    link: "midnight",
    images: [
      require("../../../assets/images/products/midnight/1.jpg"),
      require("../../../assets/images/products/midnight/2.jpg"),
      require("../../../assets/images/products/midnight/3.jpg"),
      require("../../../assets/images/products/midnight/4.jpg"),
    ],
  },
  {
    title: "BLACK JACK",
    link: "black-jack",
    images: [
      require("../../../assets/images/products/blackjack/1.jpg"),
      require("../../../assets/images/products/blackjack/2.jpg"),
      require("../../../assets/images/products/blackjack/3.jpg"),
      require("../../../assets/images/products/blackjack/4.jpg"),
    ],
  },
  {
    title: "ALIENTO",
    link: "aliento",
    images: [
      require("../../../assets/images/products/aliento/1.jpg"),
      require("../../../assets/images/products/aliento/2.jpg"),
      require("../../../assets/images/products/aliento/3.jpg"),
      require("../../../assets/images/products/aliento/4.jpg"),
    ],
  },
  {
    title: "BELLA",
    link: "bella",
    images: [
      require("../../../assets/images/products/bella/1.jpg"),
      require("../../../assets/images/products/bella/2.jpg"),
      require("../../../assets/images/products/bella/3.jpg"),
      require("../../../assets/images/products/bella/4.jpg"),
    ],
  },
];

export default function Product() {
  const galleryRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const local = useLocalSearchParams();
  const [product, setProduct] = useState<(typeof products)[0] | undefined>(
    undefined
  );

  const { setTitle } = useHeader();
  useEffect(() => {
    if (local.name) {
      const product = products.find((product) => product.link === local.name);
      setProduct(product);
      setTitle(product?.title || "PRODUCT");
    }
    return () => {
      setProduct(undefined);
    };
  }, [local.name]);

  if (!product) {
    return null;
  }

  const images = product.images;
  return (
    <>
      {galleryIndex !== null ? (
        <GalleryContainer
          {...{ images, galleryIndex, setGalleryIndex, galleryRef }}
        />
      ) : (
        <ScrollView style={styles.container}>
          <Link href="/products/" style={styles.backBtn}>
            Back to Products
          </Link>
          <View style={styles.wrapper}>
            {/* photos */}
            <View style={styles.imagesContainer}>
              {product.images.map((image, index) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setGalleryIndex(index);
                  }}
                  key={index}
                >
                  <Image
                    source={image}
                    style={{
                      width: Dimensions.get("window").width / 2 - 15,
                      height: 200,
                      resizeMode: "cover",
                      marginBottom: 10,
                    }}
                  />
                </TouchableWithoutFeedback>
              ))}
            </View>
            {product.technical_specs && (
              <>
                <Text style={styles.subtitle}>TECHNICAL SPECIFICATIONS</Text>
                {product.technical_specs.map((spec) => (
                  <View
                    key={spec.title}
                    style={{
                      width: "100%",
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 10,
                      backgroundColor: "#fff2",
                      borderColor: "#000",
                      borderWidth: 1,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={styles.bold}>{spec.title}</Text>
                    <Text style={styles.paragraph}>{spec.value}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
  },
  backBtn: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0006",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
