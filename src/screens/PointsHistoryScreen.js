import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import PageHeader from '../components/PageHeader';
import AvatarWithMessage from '../components/AvatarWithMessage';
import CustomText from '../components/CustomText';

const PointsHistory = ({ navigation }) => {
  const data = {
    currentPoints: 120,
    totalPoints: 500,
    history: [
      { id: 1, activity: 'Completed a hike', points: 20, date: '2025-01-28' },
      { id: 2, activity: 'Checked in for 5 days', points: 10, date: '2025-01-25' },
      { id: 3, activity: 'Joined a challenge', points: 15, date: '2025-01-20' },
    ],
  };

  return (
    <View style={styles.container}>
      <PageHeader title="Points History" onBackPress={() => navigation.goBack()} />
      
      {/* Avatar and Motivation */}
      <AvatarWithMessage 
        source={require('../../assets/cat.png')} 
        name="Your Avatar" 
        motivation="Keep earning points by staying active!" 
        navigation = {navigation}
      />
      
      {/* Points Summary */}
      <View style={styles.pointsContainer}>
        <CustomText type="header" style={styles.pointsText}>Current Points: {data.currentPoints}</CustomText>
        <CustomText type="body" style={styles.totalPointsText}>Total Earned: {data.totalPoints}</CustomText>
      </View>
      
      {/* Points History List */}
      <FlatList
        data={data.history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <CustomText type="body" style={styles.activity}>{item.activity}</CustomText>
            <CustomText type="body" style={styles.points}>+{item.points} pts</CustomText>
            <CustomText type="body" style={styles.date}>{item.date}</CustomText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  pointsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPointsText: {
    fontSize: 16,
    color: '#666',
  },
  historyItem: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  activity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  points: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2EEEC1',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});

export default PointsHistory;