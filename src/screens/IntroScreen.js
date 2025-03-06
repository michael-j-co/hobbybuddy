import React from "react";
import { View, StyleSheet } from "react-native";
import LogoHeader from "../components/LogoHeader";
import ActionButton from "../components/ActionButton";
import CustomText from "../components/CustomText";
import LinkText from "../components/LinkText";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <LogoHeader />
        <CustomText type="header" style={styles.appHeader}>
          Hobby Buddy
        </CustomText>
      </View>

      {/* Introductory Text */}
      <View style={styles.textContainer}>
        <CustomText type="header" style={styles.introLine}>
          Hi there!
        </CustomText>
        <CustomText type="header" style={styles.introLine}>
          We know starting and committing to a hobby can be tough.
        </CustomText>
        <CustomText type="header" style={styles.introLine}>
          We’re here to help.
        </CustomText>
      </View>

      {/* Buttons at the Bottom */}
      <View style={styles.actionContainer}>
        <ActionButton
          label="Sign In"
          style={{ width: 345 }} // Width of the button
          onPress={() => navigation.navigate("SignInScreen")}
        />
        <LinkText
          text="No account? Create one now"
          onPress={() => navigation.navigate("CreateAccountScreen")}
          align="center"
          color="#003F5C" // Blue for link
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80, // Space from the top
    justifyContent: "space-around", // Ensures proper spacing between top, middle, and bottom
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF", // White background
    paddingBottom: 40, // Space from the bottom
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20, // Space between logo and title
  },
  appHeader: {
    fontSize: 24,
    fontWeight: "600", // SemiBold for header
    color: "#2C3E50", // Charcoal color
    textAlign: "center",
    marginTop: 10, // Slight space below the logo
  },
  textContainer: {
    alignItems: "center",
    width: 267, // Width of the text container
    marginBottom: 20, // Space between intro text and buttons
  },
  introLine: {
    fontSize: 20,

    color: "#003f5c",
    fontWeight: "600", // SemiBold for header
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20, // Slight spacing between lines
  },
  actionContainer: {
    width: "100%", // Take up full width for centering
    alignItems: "center",
    color: "#2ECC71",
    gap: 10, // Space between button and link
  },
});

export default IntroScreen;
