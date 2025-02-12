import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoHeader from '../components/LogoHeader';
import CustomText from '../components/CustomText';
const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomePage');
    }, 2000); // Transition after 2 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LogoHeader />
      <CustomText  type = "body" style={styles.text}>Taking you to your Hobby Hub...</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  text: {
    fontSize: 16,
    color: '#2C3E50',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoadingScreen;
