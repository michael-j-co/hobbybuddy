import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import LogoHeader from '../components/LogoHeader';
import InputField from '../components/InputField';
import PasswordGuidelines from '../components/PasswordGuidelines';
import ActionButton from '../components/ActionButton';
import LinkText from '../components/LinkText';

const CreateAccountScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    navigation.navigate('SurveyScreen');
  };

  return (
    <View style={styles.container}>
      <LogoHeader />
      <InputField
        label="First Name"
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <InputField
        label="Last Name"
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <InputField
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputField
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <PasswordGuidelines />
      <ActionButton
        label="Create Account"
        onPress={handleCreateAccount}
      />
      <LinkText
        text="Already have an account? Sign in."
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF', // White background
  },
});

export default CreateAccountScreen;
