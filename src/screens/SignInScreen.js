import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import LogoHeader from "../components/LogoHeader";
import InputField from "../components/InputField";
import ActionButton from "../components/ActionButton";
import LinkText from "../components/LinkText";
import CustomText from "../components/CustomText";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
    } else {
      // Mock functionality for sign-in
      navigation.navigate("HomePage");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <LogoHeader />

      {/* Header Text */}
      <CustomText type="header" style={styles.headerText}>
        Sign in or create an account
      </CustomText>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <InputField
          label="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Sign In Button */}
      <ActionButton label="Sign In" onPress={handleSignIn} />

      {/* Link Text */}
      <LinkText
        text="No account? Create one now."
        onPress={() => navigation.navigate("CreateAccountScreen")}
        align="center"
        color="#007BFF" // Blue for link
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around", // Space out components evenly
    alignItems: "center",
    paddingTop: 80,
    padding: 30,
    backgroundColor: "#FFF", // White background
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600", // SemiBold for header
    color: "#2C3E50", // Charcoal color
    textAlign: "center",
    marginTop: 20, // Space between logo and header text
    marginBottom: 20, // Space between header text and input fields
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20, // Space between input fields and sign-in button
  },
});

export default SignInScreen;
