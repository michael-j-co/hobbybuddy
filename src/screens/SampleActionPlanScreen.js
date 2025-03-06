import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import PageHeader from "../components/PageHeader";
import PointBalance from "../components/PointBalance";
import AvatarWithMessage from "../components/AvatarWithMessage";

const screenWidth = Dimensions.get("window").width;
// Example data for each week
const WEEKS_DATA = [
  {
    title: "Week 1",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 1-2: Foundation & Routine Building
        </Text>
        {"\n"}Focus: Building consistency, basic endurance, and familiarity with
        gear.{"\n\n"}• <Text style={{ fontWeight: "bold" }}>Day 1:</Text> 1-2
        mile walk on a flat trail or around the neighborhood.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> 1.5-2 mile nature
        walk; test hiking shoes (Amazon - Sponsored).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> Strength training
        (squats, lunges, core work).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 2-3 mile hike with a
        small elevation gain (~200 ft).{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Track hikes with
        an app (AllTrails, Strava) and note how you feel.
      </>
    ),
  },
  {
    title: "Week 2",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 1-2: Foundation & Routine Building
        </Text>
        {"\n"}Focus: Continue refining endurance and consistency.{"\n\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 1:</Text> 2-mile brisk walk,
        incorporate light hills.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> 3-mile nature walk,
        adjust footwear as needed.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> Strength training +
        flexibility exercises.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 3-4 mile hike,
        gradual elevation (~300 ft).{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Experiment with
        different hydration amounts to find your balance.
      </>
    ),
  },
  {
    title: "Week 3",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 3-4: Increasing Challenge
        </Text>
        {"\n"}Focus: Improving endurance, incorporating elevation, and refining
        technique.{"\n\n"}• <Text style={{ fontWeight: "bold" }}>Day 1:</Text>{" "}
        2-3 mile hike with moderate elevation gain (~400 ft).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> Strength training
        (squats, lunges, core work, step-ups).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> 3-4 mile nature walk
        with light backpack weight.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 4-5 mile hike,
        introduce trekking poles.{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Test different
        socks to prevent blisters!
      </>
    ),
  },
  {
    title: "Week 4",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 3-4: Increasing Challenge
        </Text>
        {"\n"}Focus: Improving endurance and handling more complex trails.
        {"\n\n"}• <Text style={{ fontWeight: "bold" }}>Day 1:</Text> 3-mile
        fast-paced hike, increase elevation (~500 ft).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> Strength +
        flexibility (yoga, step-ups, lunges).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> 4-mile nature walk
        with a weighted backpack.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 5+ mile hike on a
        moderate trail.{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Start practicing
        mindfulness or breathing techniques while hiking.
      </>
    ),
  },
  {
    title: "Week 5",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 5-6: Endurance & Exploration
        </Text>
        {"\n"}Focus: Longer distances, more elevation, and refining pacing.
        {"\n\n"}• <Text style={{ fontWeight: "bold" }}>Day 1:</Text> 3-4 mile
        hike, moderate elevation (~500 ft).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> Strength training +
        flexibility (yoga, dynamic stretching).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> 5-mile nature walk,
        test hydration strategies.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 6+ mile hike with
        significant elevation (~800 ft).{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Experiment with
        snacks and hydration strategies before long hikes.
      </>
    ),
  },
  {
    title: "Week 6",
    details: (
      <>
        <Text style={{ fontWeight: "bold" }}>
          Weeks 5-6: Endurance & Exploration
        </Text>
        {"\n"}Focus: Longer distances, more elevation, and refining pacing.
        {"\n\n"}• <Text style={{ fontWeight: "bold" }}>Day 1:</Text> 3-4 mile
        hike, moderate elevation (~500 ft).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 3:</Text> Strength training +
        flexibility (yoga, dynamic stretching).{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 5:</Text> 5-mile nature walk,
        test hydration strategies.{"\n"}•{" "}
        <Text style={{ fontWeight: "bold" }}>Day 7:</Text> 6+ mile hike with
        significant elevation (~800 ft).{"\n\n"}
        📌 <Text style={{ fontWeight: "bold" }}>Pro tip:</Text> Experiment with
        snacks and hydration strategies before long hikes.
      </>
    ),
  },
];

const SampleActionPlanScreen = ({ navigation }) => {
  // If you only want one week expanded at a time, store a single index or null:
  const [expandedWeekIndex, setExpandedWeekIndex] = useState(null);

  const toggleWeek = (index) => {
    // If the same item is tapped, collapse it; otherwise expand the new one.
    setExpandedWeekIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <PageHeader
        title="Sample Action Plan"
        onBackPress={() => navigation.goBack()}
      />

      {/* Points Section */}
      <PointBalance points={10000} navigation={navigation} />

      {/* Avatar + Message */}
      <View style={styles.avatarSection}>
        <AvatarWithMessage motivation="For your 1st week, start with a 1-2 mile walk around the neighborhood." />
      </View>

      {/* Weeks List */}
      <ScrollView contentContainerStyle={styles.weeksContainer}>
        {/* Top Full-Width Separator */}
        <View style={styles.fullWidthSeparator} />

        {WEEKS_DATA.map((week, index) => {
          const isExpanded = expandedWeekIndex === index;

          return (
            <View key={index} style={styles.weekWrapper}>
              {/* Week Title */}
              <TouchableOpacity
                style={[
                  styles.weekHeader,
                  isExpanded ? null : styles.expandedWeek,
                ]}
                onPress={() => toggleWeek(index)}
              >
                <Text style={styles.weekTitle}>{week.title}</Text>
                <Text style={styles.arrow}>{isExpanded ? "▲" : "▼"}</Text>
              </TouchableOpacity>

              {/* Expanded Details */}
              {isExpanded && (
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsText}>{week.details}</Text>
                </View>
              )}

              {/* Bottom separator (only if it's NOT the last week) */}
              {index !== WEEKS_DATA.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          );
        })}

        {/* Bottom Full-Width Separator */}
        <View style={styles.fullWidthSeparator} />
      </ScrollView>
    </View>
  );
};

export default SampleActionPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  avatarSection: {
    padding: 20,
  },
  weeksContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  expandedWeek: {
    flex: 1, // Allows unexpanded items to take up available space
  },
  weekTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 16,
    color: "#555",
  },
  detailsContainer: {
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  separator: {
    height: 1,
    width: screenWidth,
    backgroundColor: "#2C3E50",
  },
});
