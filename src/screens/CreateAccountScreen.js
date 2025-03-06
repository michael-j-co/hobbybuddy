import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import CheckBox from "expo-checkbox";
import Icon from "react-native-vector-icons/MaterialIcons";
import LogoHeader from "../components/LogoHeader";

const CreateAccountScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCreateAccount = () => {
    if (!termsAccepted) {
      Alert.alert("Please accept the Terms and Conditions.");
      return;
    }
    navigation.navigate("SurveyScreen");
  };

  const handleUploadPhoto = () => {
    Alert.alert("Upload photo pressed");
  };

  return (
    <View style={styles.container}>
      <LogoHeader />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Enter Contact Info</Text>

        {/* Row with First/Last name */}
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.textInput}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.textInput}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <View style={[styles.inputContainer, styles.fullWidth]}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={[styles.inputContainer, styles.fullWidth]}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.sectionTitle}>Date of Birth</Text>
        <View style={[styles.inputContainer, styles.fullWidth]}>
          <TextInput
            style={styles.textInput}
            placeholder="mm/dd/yyyy"
            value={dob}
            onChangeText={setDob}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.sectionTitle}>Profile Picture</Text>
        <Text style={styles.smallText}>Upload below. Max file size 5MB</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadPhoto}
        >
          <Icon name="photo" size={30} color="#000" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Create Password</Text>
        <View style={[styles.inputContainer, styles.fullWidth]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Text style={styles.smallText}>
          Must contain at least one number. Minimum 8 characters
        </Text>
        <View style={[styles.inputContainer, styles.fullWidth]}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.textInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={termsAccepted}
            onValueChange={setTermsAccepted}
            color="#000" // sets the check mark color when checked
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#000",
            }}
          />
          <Text style={styles.checkboxLabel}>
            By checking this box, I state that I have read and understood the
            terms and conditions.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003F5C",
    marginTop: 20,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "48%",
    marginBottom: 15,
  },
  fullWidth: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  smallText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  uploadButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  linkText: {
    color: "#007bff",
    textAlign: "center",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
});
