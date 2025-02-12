import React, { useRef } from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PageHeader from '../components/PageHeader';
import PointBalance from '../components/PointBalance';
import CustomText from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';

const friendsData = [
  { id: '1', name: 'Alice', streak: 12, avatar: require('../../assets/dog.png') },
  { id: '2', name: 'Bob', streak: 8, avatar: require('../../assets/dog.png') },
  { id: '3', name: 'Charlie', streak: 15, avatar: require('../../assets/dog.png') },
];

const otherHobbyistsData = [
  { id: '4', name: 'David', streak: 5, avatar: require('../../assets/dog.png') },
  { id: '5', name: 'Ella', streak: 7, avatar: require('../../assets/dog.png') },
  { id: '6', name: 'Frank', streak: 9, avatar: require('../../assets/dog.png') },
];

const ProfileItem = ({ name, streak, avatar }) => (
  <View style={styles.profileItem}>
    <Image source={avatar} style={styles.avatar} />
    <CustomText type="body" style={styles.name}>{name}</CustomText>
    <CustomText type="body" style={styles.streak}>🔥 Streak: {streak} days</CustomText>
  </View>
);

const Carousel = ({ data }) => {
  const flatListRef = useRef(null);

  const scrollLeft = () => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const scrollRight = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.carouselContainer}>
      <TouchableOpacity onPress={scrollLeft} style={styles.arrowButton}>
        <CustomText style={styles.arrow}>⬅</CustomText>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfileItem {...item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      />
      <TouchableOpacity onPress={scrollRight} style={styles.arrowButton}>
        <CustomText style={styles.arrow}>➡</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const FriendsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Friends" onBackPress={() => navigation.goBack()} />
      
      {/* Wrapping content in a scrollable container */}
      <View style={styles.content}>
        <PointBalance points={1200} />

        <CustomText type="header" style={styles.sectionTitle}>Friends</CustomText>
        <Carousel data={friendsData} />

        <CustomText type="header" style={styles.sectionTitle}>Other Hobbyists</CustomText>
        <Carousel data={otherHobbyistsData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,  // Ensures the content uses all vertical space
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  carousel: {
    alignItems: 'center',
  },
  profileItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  streak: {
    fontSize: 12,
    color: '#FF5733',
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  arrow: {
    fontSize: 24,
  },
});

export default FriendsScreen;
