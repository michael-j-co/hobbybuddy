import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CustomText from "../components/CustomText";
import PageHeader from "../components/PageHeader";
import PointBalance from "../components/PointBalance";
import AvatarWithMessage from "../components/AvatarWithMessage";
import ActionButton from "../components/ActionButton";
import DailyCheckInStreak from "../components/DailyCheckInStreak";

const YourProgressScreen = ({ navigation }) => {
  const streakData = [
    "checked",
    "checked",
    "missed",
    "checked",
    "checked",
    "missed",
    "pending",
  ];

  return (
    <View style={styles.container}>
      <PageHeader
        title="Your Progress"
        onBackPress={() => navigation.goBack()}
      />
      <PointBalance points={1250} navigation={navigation} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AvatarWithMessage motivation="“Record your progress (will refresh once a day).”" />

        <View style={styles.buttonContainer}>
          <ActionButton
            label="Sample Action Plan"
            onPress={() => console.log("Sample Action Plan pressed")}
            fullWidth={true}
            style={{ backgroundColor: "#4CC4BB", height: 78 }}
          />
          <ActionButton
            label="Daily Check-In"
            onPress={() => console.log("Daily Check-In pressed")}
            fullWidth={true}
            style={{ height: 78 }}
          />
        </View>

        <DailyCheckInStreak streak={streakData} />

        {/* Weekly Progress Section */}
        <View style={styles.weeklyProgressContainer}>
          <View style={styles.weeklyProgressHeader}>
            <CustomText type="header">Weekly Progress</CustomText>
            <TouchableOpacity onPress={() => console.log("Share link pressed")}>
              <CustomText type="shareLink">Share</CustomText>
            </TouchableOpacity>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <CustomText type="statNumber" style={styles.statNumber}>
                5
              </CustomText>
              <CustomText type="statLabel">Week Streak</CustomText>
            </View>
            <View style={styles.statBox}>
              <CustomText type="statNumber" style={styles.statNumber}>
                12
              </CustomText>
              <CustomText type="statLabel">Total Weeks</CustomText>
            </View>
          </View>
        </View>

        {/* Badge Update Section */}
        <View style={styles.badgeUpdateContainer}>
          <CustomText type="body">
            Congratulations! You are 3 weeks from the “2 Month Rock Star” badge.
          </CustomText>
          <View style={styles.badgeContainer}>
            <View style={styles.badgeIcon}>
              <Image
                source={require("../../assets/badge3.png")}
                style={styles.badgePlaceholder}
              />
            </View>
            <CustomText type="badgeLabel">2 Month Rock Star</CustomText>
            <CustomText type="progressPercentage">75% Complete</CustomText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollContent: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 20,
    gap: 10,
  },
  weeklyProgressContainer: {
    marginVertical: 28,
  },
  weeklyProgressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsContainer: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 48, // Increased font size for numbers
    fontWeight: "bold",
    color: "#2C3E50",
  },
  badgeUpdateContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  badgeContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  badgeIcon: {
    marginBottom: 10,
  },
  badgePlaceholder: {
    width: 50,
    height: 50,
    opacity: 0.5,
  },
  progressPercentage: {
    fontSize: 14,
    color: "#555",
  },
  shareLink: {
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default YourProgressScreen;
