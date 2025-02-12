import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PageHeader from '../components/PageHeader';
import AvatarWithMessage from '../components/AvatarWithMessage';
import CheckInButton from '../components/CheckInButton';
import FeatureButton from '../components/FeatureButton'; // New component for 2x2 buttons
import PointBalance from '../components/PointBalance';
const HomePage = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <PageHeader title="Hobby Hub" />

        <PointBalance points={1250} navigation={navigation} />


        {/* Profile Section */}
        <View style={styles.profileSection}>
          <AvatarWithMessage
            motivation="Let’s try for a hike today!"
          />
        </View>

        {/* Daily Check-in Button */}
        <View style={styles.dailyCheckInContainer}>
          <CheckInButton label="Daily Check-in" onPress={() => console.log('Daily Check-in pressed')} />
        </View>

        {/* 2x2 Feature Buttons */}
        <View style={styles.featureButtonContainer}>
          <FeatureButton
            title="Your Progress"
            icon={require('../../assets/bluecheck.png')}
            onPress={() => navigation.navigate('YourProgress')}
          />
          <FeatureButton
            title="Resources"
            icon={require('../../assets/book.png')}
            onPress={() => navigation.navigate('ResourcePage')}
          />
          <FeatureButton
            title="Fellow Hobby Buddies"
            icon={require('../../assets/fistbump.png')}
            onPress={() => navigation.navigate('FriendsScreen')}
          />
          <FeatureButton
            title="Your Badges"
            icon={require('../../assets/badge.png')}
            onPress={() => navigation.navigate('BadgeScreen')}
          />
        </View>
      </View>
    );
};

// New FeatureButton Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  pointBalanceContainer: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pointBalanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003F5C',
  },
  pointLinks: {
    flexDirection: 'row',
    gap: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  dailyCheckInContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  featureButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to prevent overflow
    justifyContent: 'center',
    gap: 30, // Adjusts spacing between buttons
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default HomePage;
