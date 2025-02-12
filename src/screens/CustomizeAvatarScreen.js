import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAvatar } from '../context/AvatarContext';
import PageHeader from '../components/PageHeader';
import CustomText from '../components/CustomText';
import LinkText from '../components/LinkText';
import ActionButton from '../components/ActionButton';

// Sample avatar data
const avatars = [
  { id: '1', name: 'Playful Penelope', source: require('../../assets/dog.png') },
  { id: '2', name: 'Friendly Frank', source: require('../../assets/cat.png') },
  { id: '3', name: 'Motivational Mary', source: require('../../assets/turtle.png') },
  { id: '4', name: 'Bubbly Bobby', source: require('../../assets/rabbit.png') },
];

const CustomizeAvatarScreen = ({ navigation }) => {
    const { selectedAvatar, setSelectedAvatar } = useAvatar();
  
    return (
     
      <View style={styles.container}>
        <PageHeader title="Customize Avatar" onBackPress={() => navigation.goBack()} useLogo={false} />
  
        <CustomText type="header" style={styles.headerText}>Select your avatar</CustomText>
  
        {/* Ensure the avatar grid takes up available space */}
        <View style={styles.avatarGrid}>
          {avatars.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.avatarContainer,
                selectedAvatar.name === item.name && styles.selectedAvatar
              ]}
              onPress={() => setSelectedAvatar(
                { id: item.id, name: item.name, source: item.source }
              )}
            >
              <Image source={item.source} style={styles.avatarImage} />
              <CustomText type="body" style={styles.avatarName}>{item.name}</CustomText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Message about avatar interaction */}
        <CustomText type="body" style={styles.infoText}>
          They will interact with you as you use the app and take on the personalities within their names.
        </CustomText>

        <LinkText text="Customize avatar accessories and backgrounds" onPress={() => navigation.navigate('AccessoryCustomizationScreen')} align="center" />

        <ActionButton label="Submit Changes" onPress={() => navigation.navigate('HomePage')} />
      </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1, // Ensures full screen usage
      backgroundColor: '#FFF',
    },
    container: {
      flex: 1, // Ensures the screen takes up full space
      paddingHorizontal: 20,
      paddingBottom:25,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'space-between', // Spreads elements properly
    },
    headerText: {
      alignSelf: 'flex-start',
      marginTop: 20,
      fontSize: 18,
    },
    avatarGrid: {
      
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center', // Centers items vertically
      marginTop: 20,
      gap: 15,
    },
    avatarContainer: {
      width: 120,
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    selectedAvatar: {
      borderColor: '#007BFF',
    },
    avatarImage: {
      width: 100,  
      height: 100,
      resizeMode: 'contain',
    },
    avatarName: {
      marginTop: 8,
      fontSize: 16,
    },
    infoText: {
      fontSize: 14,
      textAlign: 'center',
      color: '#555',
      paddingHorizontal: 20,
      marginBottom: 10,
    },
});

export default CustomizeAvatarScreen;
