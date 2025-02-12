import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const PasswordGuidelines = () => {
  return (
    <View style={styles.container}>
      <Text type style={styles.text}>• Must contain at least one number.</Text>
      <Text style={styles.text}>• Minimum 8 characters.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default PasswordGuidelines;
