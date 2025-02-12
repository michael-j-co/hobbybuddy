import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from './CustomText';
const PageHeader = ({ title, onBackPress = undefined, showProfileIcon = true, useLogo = false }) => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}> 
      <View style={styles.container}>
        
        {/* Back Button or Placeholder */}
        <View style={styles.sideContainer}>
          {onBackPress ? (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder}></View> // Ensuring no JSX parsing issues
          )}
        </View>

        {/* Centered Title or Logo */}
        <View style={styles.centerContainer}>
          {useLogo ? (
            <Image source={require('../../assets/HBLogo.png')} style={styles.logo} />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>

        {/* Profile Icon or Placeholder */}
        <View style={styles.sideContainer}>
          {showProfileIcon ? (
            <TouchableOpacity style={styles.profileIcon}>
              <Text style={styles.profileIconText}>👤</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder}></View>
          )}
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFF',
  },
  container: {
    height: 110, // Reduced from 60 to minimize space
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  sideContainer: {
    width: 50,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    fontSize: 20, // Adjust for visibility
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0, // Ensures no extra space
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  profileIcon: {
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 24,
    color: '#007BFF',
  },
  placeholder: {
    width: 40, // Keeps spacing even if back/profile is missing
  },
});

export default PageHeader;
