import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import PageHeader from "../components/PageHeader";
import ActionButton from "../components/ActionButton";

const DailyCheckIn = ({ navigation }) => {
  const [hiked, setHiked] = useState(null);
  const [image, setImage] = useState(null);
  const suggestedTask =
    "1.5-2 mile nature walk; test hiking shoes (Amazon - Sponsored)";

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Daily Check In"
        onBackPress={() => navigation.goBack()}
      />

      {/* Main content */}
      <View style={styles.mainContent}>
        {/* Question + Checkboxes in a single row */}
        <View style={styles.checkboxRow}>
          <Text style={styles.question}>Did you hike today?</Text>
          <View style={styles.checkboxOptions}>
            <TouchableOpacity
              style={styles.checkboxOption}
              onPress={() => setHiked(true)}
            >
              <Text style={styles.checkboxLabel}>Yes!</Text>
              <View
                style={[
                  styles.checkboxSquare,
                  hiked === true && styles.checkboxSelected,
                ]}
              >
                {hiked === true && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkboxOption}
              onPress={() => setHiked(false)}
            >
              <Text style={styles.checkboxLabel}>No</Text>
              <View
                style={[
                  styles.checkboxSquare,
                  hiked === false && styles.checkboxSelected,
                ]}
              >
                {hiked === false && <Text style={styles.checkmark}>✓</Text>}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Extra content if hiked === true */}
        {hiked && (
          <View style={styles.extraContent}>
            <View style={styles.photoUploadContainer}>
              <Text style={styles.photoPromptText}>
                Upload photo/video proof related to the Suggested Daily Task for
                250 more points!
              </Text>
              <TouchableOpacity
                style={styles.photoUploadBox}
                onPress={handleImagePick}
              >
                <MaterialIcons name="photo-camera" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            {image && <Image source={{ uri: image }} style={styles.image} />}

            {/* Suggested Daily Task section */}
            <View style={styles.suggestedTaskContainer}>
              <Text style={styles.suggestedTaskTitle}>
                Suggested Daily Task
              </Text>
              <Text style={styles.suggestedTaskSubtitle}>
                Daily tasks are pulled from{" "}
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("SampleActionPlan")}
                >
                  sample action plan
                </Text>
              </Text>
              <View style={styles.suggestedTaskBox}>
                <Text style={styles.suggestedTask}>{suggestedTask}</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* Submit button pinned to the bottom */}
      <View style={styles.buttonContainer}>
        <ActionButton
          label="Submit"
          onPress={() => {
            // handle checkin action
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  mainContent: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  question: {
    fontSize: 18,
    textAlign: "left",
  },
  checkboxOptions: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  checkboxLabel: {
    fontSize: 16,
    marginRight: 5,
  },
  checkboxSquare: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  checkboxSelected: {
    backgroundColor: "#2C3E50",
    borderColor: "#2C3E50",
  },
  checkmark: {
    color: "#fff",
    fontWeight: "bold",
  },
  extraContent: {
    width: "100%",
  },
  photoUploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  photoPromptText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    marginRight: 10,
  },
  photoUploadBox: {
    width: "50%",
    height: 53,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  suggestedTaskContainer: {
    marginTop: 20,
    width: "100%",
  },
  suggestedTaskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  suggestedTaskSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  linkText: {
    textDecorationLine: "underline",
  },
  suggestedTaskBox: {
    padding: 15,
    backgroundColor: "#FFF",
    height: 80,
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#2C3E50",
    borderRadius: 8,
  },
  suggestedTask: {
    fontSize: 12,
    color: "#333",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});

export default DailyCheckIn;
