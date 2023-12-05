import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const backgroundImage = require("../assets/images/background.jpg");

const BackgroundImage = () => {
  return (
    <Image source={backgroundImage} style={styles.backgroundImage} />
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: -1,
  },
});
