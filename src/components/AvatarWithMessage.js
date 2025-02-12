import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomText from './CustomText';
import { useNavigation } from '@react-navigation/native';
import { useAvatar } from '../context/AvatarContext';
const AvatarWithMessage = ({ motivation }) => {
  const navigation = useNavigation();
  const {selectedAvatar} = useAvatar();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {selectedAvatar?.source && <Image source={selectedAvatar.source} style={styles.profileImage} />}

        <View style={styles.avatarLabel}>
          <CustomText type="body" style={styles.profileName}>{selectedAvatar.name}</CustomText>
          <CustomText type="body" style={styles.changeAvatar} onPress={() => navigation.navigate('CustomizeAvatar')}>
            Customize
          </CustomText>
        </View>
      </View>
      {motivation && (
        <View style={styles.motivationContainer}>
          <CustomText type="header" style={styles.motivationText}>{motivation}</CustomText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    width: 120,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  avatarLabel: {
    alignItems: 'center',
    marginTop: 8,
  },
  profileName: {
    fontSize: 16,
    fontFamily: 'LatoRegular',
    color: '#333',
  },
  changeAvatar: {
    fontSize: 14,
    fontFamily: 'LatoRegular',
    color: '#007BFF',
  },
  motivationContainer: {
    flex: 1,
    alignItems: 'center', 
  },
  motivationText: {
    textAlign: 'center',
    fontWeight: '600',
  },
});


export default AvatarWithMessage;
