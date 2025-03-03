import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PageHeader from "../components/PageHeader";
import AvatarWithMessage from "../components/AvatarWithMessage";
import FeatureButton from "../components/FeatureButton"; // New component for 2x2 buttons
import PointBalance from "../components/PointBalance";
import ActionButton from "../components/ActionButton";
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PageHeader title="Hobby Hub" />

      <PointBalance points={1250} navigation={navigation} />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <AvatarWithMessage motivation="Let’s try for a hike today!" />
      </View>

      {/* Sample Action Plan Button */}
      <View style={styles.sampleActionPlanContainer}>
        <ActionButton
          label="Sample Action Plan"
          onPress={() => navigation.navigate("SampleActionPlan")}
          color="#4CC4BB" // Light blue color
          style={{ height: 85 }} // Increase height
          textStyle={{ fontSize: 20 }} // Increase font size
        />
      </View>

      {/* Daily Check-in Button */}
      <View style={styles.dailyCheckInContainer}>
        <ActionButton
          label="Daily Check-in"
          onPress={() => console.log("Daily Check-in pressed")}
          style={{ height: 85 }} // Increase height
          textStyle={{ fontSize: 20 }} // Increase font size
        />
      </View>

      {/* 2x2 Feature Buttons */}
      <View style={styles.featureButtonContainer}>
        <FeatureButton
          title="Your Progress"
          icon={require("../../assets/bluecheck.png")}
          onPress={() => navigation.navigate("YourProgress")}
        />
        <FeatureButton
          title="Resources"
          icon={require("../../assets/book.png")}
          onPress={() => navigation.navigate("ResourcePage")}
        />
        <FeatureButton
          title="Fellow Hobby Buddies"
          icon={require("../../assets/fistbump.png")}
          onPress={() => navigation.navigate("FriendsScreen")}
        />
        <FeatureButton
          title="Your Badges"
          icon={require("../../assets/badge.png")}
          onPress={() => navigation.navigate("BadgeScreen")}
        />
      </View>
    </View>
  );
};

// New FeatureButton Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  pointBalanceContainer: {
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pointBalanceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003F5C",
  },
  pointLinks: {
    flexDirection: "row",
    gap: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  dailyCheckInContainer: {
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  sampleActionPlanContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  featureButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly", // More compact distribution
    paddingHorizontal: 10, // Reduce side padding
    gap: 15, // Reduce spacing between buttons
  },
});

export default HomePage;
