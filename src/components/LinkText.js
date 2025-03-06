import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const LinkText = ({ text, onPress, color = "#2C3E50", align = "center" }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.linkText, { color, textAlign: align }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 14,
    textDecorationLine: "underline",
    marginVertical: 10,
  },
});

export default LinkText;
