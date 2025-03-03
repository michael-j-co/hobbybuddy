import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ActionButton = ({
  label,
  onPress,
  color = "#2ECC71",
  textColor = "#FFF",
  fullWidth = true,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, width: fullWidth ? "100%" : "auto" },
        style,
      ]} // Merge button styles
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
        {label}
      </Text>{" "}
      {/* Merge text styles */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Nunito", // Updated to use NunitoBold font
    fontWeight: "700",
    fontSize: 16,
    color: "#FFF", // Text color can still be overridden via props
  },
});

export default ActionButton;
