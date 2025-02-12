import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryButton = ({ label, onPress, selected }) => {
  return (
    <TouchableOpacity
      style={[styles.button, selected ? styles.selected : null]}
      onPress={onPress}
    >
      <Text style={[styles.text, selected ? styles.selectedText : null]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    
    backgroundColor: '#EAEAEA',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 2,
  },
  selected: {
    backgroundColor: '#FFD700', // Yellow for selected state
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#333', // White text for selected state
  },
});

export default CategoryButton;
