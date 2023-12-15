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
import { Link, useNavigation, useLocalSearchParams } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import Gallery from "react-native-awesome-gallery";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

type GalleryContainerProps = {
  images: any[];
  galleryIndex: number;
  setGalleryIndex: React.Dispatch<React.SetStateAction<number | null>>;
  galleryRef: React.MutableRefObject<null>;
};

export default function GalleryContainer({
  images,
  galleryIndex,
  setGalleryIndex,
  galleryRef,
}: GalleryContainerProps) {
  return (
    <View style={styles.galleryContainer}>
      <Animated.View
        entering={FadeInUp.duration(250)}
        exiting={FadeOutUp.duration(250)}
        style={styles.galleryHeader}
      >
        <View>
          <Text style={{ color: "#fff" }}>
            {galleryIndex + 1} of {images.length}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setGalleryIndex(null)}>
          <Text style={{ color: "#fff" }}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
      <Gallery
        doubleTapEnabled={false}
        data={images}
        initialIndex={galleryIndex || 0}
        onSwipeToClose={() => {
          setGalleryIndex(null);
        }}
        onIndexChange={(index) => {
          setGalleryIndex(index);
        }}
        ref={galleryRef}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                height: Dimensions.get("window").height - 300,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images[index]}
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: "cover",
                }}
              />
            </View>
          );
        }}
        loop={true}
      />
      <Animated.View
        entering={FadeInUp.duration(250)}
        exiting={FadeOutUp.duration(250)}
        style={styles.galleryFooter}
      >
        <TouchableOpacity
          style={styles.galleryFooterBtn}
          onPress={() => {
            if (galleryIndex === 0) {
              (galleryRef.current as any).setIndex(images.length - 1);
              setGalleryIndex(images.length - 1);
            } else {
              (galleryRef.current as any).setIndex(galleryIndex - 1);
              setGalleryIndex(galleryIndex - 1);
            }
          }}
        >
          <Text style={{ color: "#fff" }}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.galleryFooterBtn}
          onPress={() => {
            if (galleryIndex === images.length - 1) {
              (galleryRef.current as any).setIndex(0);
              setGalleryIndex(0);
            } else {
              (galleryRef.current as any).setIndex(galleryIndex + 1);
              setGalleryIndex(galleryIndex + 1);
            }
          }}
        >
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
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
});
