import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LogoHeader from '../components/LogoHeader';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Set a timer to navigate to IntroScreen after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('IntroScreen');
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LogoHeader />
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

export default WelcomeScreen;
