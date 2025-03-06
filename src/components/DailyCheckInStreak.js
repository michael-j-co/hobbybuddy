import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "./CustomText";
const DailyCheckInStreak = ({ streak }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <View style={styles.container}>
      <CustomText type="header" style={styles.title}>
        Daily Check-In Streak
      </CustomText>
      <View style={styles.streakContainer}>
        {streak.map((status, index) => (
          <View key={index} style={styles.dayContainer}>
            {status === "checked" && (
              <FontAwesome name="check-circle" size={24} color="#FFC107" />
            )}
            {status === "missed" && (
              <FontAwesome name="times-circle" size={24} color="#FFC107" />
            )}
            {status === "pending" && <Text style={styles.pending}>-</Text>}
            <Text style={styles.day}>{days[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "flex-start", // Changed to left-align content
  },
  title: {
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "left", // Ensures text alignment to the left
  },
  streakContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  dayContainer: {
    alignItems: "center",
  },
  day: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  pending: {
    fontSize: 24,
    color: "#FFD700",
  },
});

export default DailyCheckInStreak;
