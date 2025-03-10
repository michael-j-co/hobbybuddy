import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import PageHeader from "../components/PageHeader";
import PointBalance from "../components/PointBalance";
import AvatarWithMessage from "../components/AvatarWithMessage";
const ResourcePage = ({ navigation }) => {
  const handleNavigation = (category) => {
    navigation.navigate("ResourceListScreen", { category });
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Resources" onBackPress={() => navigation.goBack()} />
      <PointBalance points={1250} navigation={navigation} />
      <View style={styles.profileSection}>
        <AvatarWithMessage motivation="Let’s try for a hike today!" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.customButton,
            {
              backgroundColor: "#4CC4BB",
              borderColor: "transparent",
              borderWidth: 0,
            },
          ]}
          onPress={() => handleNavigation("buy")}
        >
          <Text style={[styles.buttonText, { color: "#fff" }]}>
            Sample Action Plan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => handleNavigation("buy")}
        >
          <Text style={styles.buttonText}>What should I buy?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => handleNavigation("learn")}
        >
          <Text style={styles.buttonText}>Learn more about your hobby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => handleNavigation("practice")}
        >
          <Text style={styles.buttonText}>How can I practice?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  customButton: {
    height: 100,
    borderWidth: 2,
    borderColor: "#003F5C", // Dark blue outline
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003F5C", // Dark blue text
  },
});

export default ResourcePage;
