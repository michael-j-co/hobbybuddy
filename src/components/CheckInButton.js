import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckInButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Daily Check-in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '370',  // Larger than normal buttons
    height: '100',
    borderRadius: 10,  // More rounded shape
    backgroundColor: '#4CC4BB',  // Unique color (e.g., orange)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CheckInButton;
