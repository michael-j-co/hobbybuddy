import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressIndicator = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.text}>{progress}% complete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#EEE',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FFD700', // Yellow
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default ProgressIndicator;
