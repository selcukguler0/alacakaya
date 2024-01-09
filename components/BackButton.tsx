import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router, Href } from "expo-router";

type Props = {
  url: Href<string>;
  text: string;
};

const BackButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(props.url)}
      style={styles.backBtn}
    >
      <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    gap: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default BackButton;
