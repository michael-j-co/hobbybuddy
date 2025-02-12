import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
const FeatureButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
     
      <CustomText type="button" style={styles.buttonText}>{title}</CustomText>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '45%', // Makes sure two buttons fit per row
    height: '160',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003F5C',
    textAlign: 'center',
  },
});

export default FeatureButton;
