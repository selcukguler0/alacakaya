import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigation, useLocalSearchParams, router } from "expo-router";
import { Dimensions } from "react-native";
import GalleryContainer from "../../../components/Gallery";

const references = [
  {
    link: "atana-hotel",
    images: [
      require("../../../assets/images/references/abroad/atana-hotel/1.jpg"),
      require("../../../assets/images/references/abroad/atana-hotel/2.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "kabe-mekke",
    images: [
      require("../../../assets/images/references/abroad/kabe-mekke/1.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/2.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/3.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/4.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/5.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/6.jpg"),
      require("../../../assets/images/references/abroad/kabe-mekke/7.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "hotel-galleria",
    images: [
      require("../../../assets/images/references/abroad/hotel-galleria/1.jpg"),
      require("../../../assets/images/references/abroad/hotel-galleria/2.jpg"),
      require("../../../assets/images/references/abroad/hotel-galleria/3.jpg"),
      require("../../../assets/images/references/abroad/hotel-galleria/4.jpg"),
      require("../../../assets/images/references/abroad/hotel-galleria/5.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "intourist-palace-hotel",
    images: [
      require("../../../assets/images/references/abroad/intourist-palace-hotel/1.jpg"),
      require("../../../assets/images/references/abroad/intourist-palace-hotel/2.jpg"),
      require("../../../assets/images/references/abroad/intourist-palace-hotel/3.jpg"),
      require("../../../assets/images/references/abroad/intourist-palace-hotel/4.jpg"),
      require("../../../assets/images/references/abroad/intourist-palace-hotel/5.jpg"),
      require("../../../assets/images/references/abroad/intourist-palace-hotel/6.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "royal-mediterranean-hotel",
    images: [
      require("../../../assets/images/references/abroad/royal-mediterranean/1.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/2.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/3.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/4.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/5.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/6.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/7.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/8.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/9.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/10.jpg"),
      require("../../../assets/images/references/abroad/royal-mediterranean/11.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "atlantis-hotel-dubai",
    images: [
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/1.jpg"),
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/2.jpg"),
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/3.jpg"),
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/4.jpg"),
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/5.jpg"),
      require("../../../assets/images/references/abroad/atlantis-hotel-dubai/6.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "pera-palace",
    images: [
      require("../../../assets/images/references/abroad/pera-palace/1.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/2.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/3.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/4.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/5.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/6.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/7.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/8.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/9.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/10.jpg"),
      require("../../../assets/images/references/abroad/pera-palace/11.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "cratos-hotel",
    images: [
      require("../../../assets/images/references/abroad/cratos-hotel/1.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/2.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/3.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/4.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/5.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/6.jpg"),
      require("../../../assets/images/references/abroad/cratos-hotel/7.jpg"),
    ],
    location: "abroad",
  },
  {
    link: "savoy-residence",
    images: [
      require("../../../assets/images/references/domestic/savoy-residence/1.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/2.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/3.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/4.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/5.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/6.jpg"),
      require("../../../assets/images/references/domestic/savoy-residence/7.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "the-galata-hotel",
    images: [
      require("../../../assets/images/references/domestic/the-galata-hotel/1.jpg"),
      require("../../../assets/images/references/domestic/the-galata-hotel/2.jpg"),
      require("../../../assets/images/references/domestic/the-galata-hotel/3.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "titanic-business",
    images: [
      require("../../../assets/images/references/domestic/titanic-business/1.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/2.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/3.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/4.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/5.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/6.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/7.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/8.jpg"),
      require("../../../assets/images/references/domestic/titanic-business/9.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "acibadem-maslak",
    images: [
      require("../../../assets/images/references/domestic/acibadem-maslak/1.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/2.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/3.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/4.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/5.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/6.jpg"),
      require("../../../assets/images/references/domestic/acibadem-maslak/7.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "sapphire-residence",
    images: [
      require("../../../assets/images/references/domestic/sapphire-residence/1.jpg"),
      require("../../../assets/images/references/domestic/sapphire-residence/2.jpg"),
      require("../../../assets/images/references/domestic/sapphire-residence/3.jpg"),
      require("../../../assets/images/references/domestic/sapphire-residence/4.jpg"),
      require("../../../assets/images/references/domestic/sapphire-residence/5.jpg"),
      require("../../../assets/images/references/domestic/sapphire-residence/6.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "taksim-divan-otel",
    images: [
      require("../../../assets/images/references/domestic/taksim-divan-otel/1.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/2.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/3.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/4.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/5.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/6.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/7.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/8.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/9.jpg"),
      require("../../../assets/images/references/domestic/taksim-divan-otel/10.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "shangri-la-besiktas",
    images: [
      require("../../../assets/images/references/domestic/shangri-la-besiktas/1.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/2.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/3.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/4.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/5.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/6.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/7.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/8.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/9.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/10.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/11.jpg"),
      require("../../../assets/images/references/domestic/shangri-la-besiktas/12.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "onalti-dokuz",
    images: [
      require("../../../assets/images/references/domestic/onalti-dokuz/1.jpg"),
      require("../../../assets/images/references/domestic/onalti-dokuz/2.jpg"),
      require("../../../assets/images/references/domestic/onalti-dokuz/3.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "wyndham-grand",
    images: [
      require("../../../assets/images/references/domestic/wyndham-grand/1.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/2.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/3.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/4.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/5.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/6.jpg"),
      require("../../../assets/images/references/domestic/wyndham-grand/7.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "tekfen-residence",
    images: [
      require("../../../assets/images/references/domestic/tekfen-residence/1.jpg"),
      require("../../../assets/images/references/domestic/tekfen-residence/2.jpg"),
      require("../../../assets/images/references/domestic/tekfen-residence/3.jpg"),
      require("../../../assets/images/references/domestic/tekfen-residence/4.jpg"),
      require("../../../assets/images/references/domestic/tekfen-residence/5.jpg"),
      require("../../../assets/images/references/domestic/tekfen-residence/6.jpg"),
    ],
    location: "domestic",
  },
  {
    link: "the-grand-tarabya",
    images: [
      require("../../../assets/images/references/domestic/the-grand-tarabya/1.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/2.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/3.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/4.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/5.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/6.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/7.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/8.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/9.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/10.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/11.jpg"),
      require("../../../assets/images/references/domestic/the-grand-tarabya/12.jpg"),
    ],
    location: "domestic",
  },
];

export default function Reference() {
  const galleryRef = useRef(null);
  const local = useLocalSearchParams();
  const [reference, setReference] = useState<
    (typeof references)[0] | undefined
  >(undefined);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useEffect(() => {
    if (local.name) {
      const reference = references.find((quarry) => quarry.link === local.name);
      setReference(reference);
    }
    return () => {
      setReference(undefined);
    };
  }, [local.name]);

  if (!reference) {
    return <></>;
  }
  const images = reference.images;
  return (
    <>
      {galleryIndex !== null ? (
        <GalleryContainer
          {...{ images, galleryIndex, setGalleryIndex, galleryRef }}
        />
      ) : (
        <ScrollView style={styles.container}>
          <Link
            href={
              reference.location == "abroad"
                ? "/references/abroad"
                : "/references/domestic"
            }
            style={styles.backBtn}
          >
            Back to References
          </Link>
          <View style={styles.wrapper}>
            {reference.images.map((image, index) => (
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
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  galleryContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  galleryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  galleryFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  galleryFooterBtn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#0006",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
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
