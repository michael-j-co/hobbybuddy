import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressIndicator = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.text}>{progress}% complete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  progressBarBackground: {
    width: 200,
    height: 12,
    backgroundColor: "#EEE",
    borderRadius: 12,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FFC107", // Yellow
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});

export default ProgressIndicator;
