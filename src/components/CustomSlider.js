import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const CustomSlider = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      {/* Tick Marks */}
      <View style={styles.ticksContainer}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View key={index} style={styles.tick} />
        ))}
      </View>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={6}
        step={1}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#FFC107" // Yellow fill
        maximumTrackTintColor="#E0E0E0" // Grey unfilled track
        thumbTintColor="#FFC107" // Yellow circular thumb
      />

      {/* Labels */}
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>Not{"\n"}Fulfilled</Text>
        <Text style={styles.label}>Neutral</Text>
        <Text style={styles.label}>Extremely{"\n"}Fulfilled</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  ticksContainer: {
    position: "absolute",
    top: 12, // Moves tick marks inside the slider track
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  tick: {
    width: 2,
    height: 14, // Short tick marks
    backgroundColor: "#888",
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomSlider;
