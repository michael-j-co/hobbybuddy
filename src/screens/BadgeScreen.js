import React, { useRef } from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PageHeader from '../components/PageHeader';
import PointBalance from '../components/PointBalance';
import CustomText from '../components/CustomText';
import AvatarWithMessage from '../components/AvatarWithMessage';
import { useNavigation } from '@react-navigation/native';

const completedBadges = [
  { id: '1', title: '10 Workouts', icon: require('../../assets/badge.png') },
  { id: '2', title: 'First Streak', icon: require('../../assets/badge.png') },
  { id: '3', title: 'Consistency King', icon: require('../../assets/badge.png') },
];

const inProgressBadges = [
  { id: '4', title: '50 Workouts', icon: require('../../assets/badge.png') },
  { id: '5', title: '100 Days Streak', icon: require('../../assets/badge.png') },
  { id: '6', title: 'Yearly Mastery', icon: require('../../assets/badge.png') },
];

const BadgeItem = ({ title, icon, faded }) => (
  <View style={[styles.badgeItem, faded && styles.fadedBadge]}>
    <Image source={icon} style={styles.badgeIcon} />
    <CustomText type="body" style={styles.badgeTitle}>{title}</CustomText>
  </View>
);

const Carousel = ({ data, faded = false }) => {
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
        renderItem={({ item }) => <BadgeItem {...item} faded={faded} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      />
      <TouchableOpacity onPress={scrollRight} style={styles.arrowButton}>
        <CustomText style={styles.arrow}>➡</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const BadgesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PageHeader title="Badges" onBackPress={() => navigation.goBack()} />
      
      <View style={styles.content}>
        <PointBalance points={1200} />

        <View style={styles.profileSection}>
          <AvatarWithMessage
            motivation="Let’s try for a hike today!"
          />
        </View>

        <CustomText type="header" style={styles.sectionTitle}>Completed Badges</CustomText>
        <Carousel data={completedBadges} />

        <CustomText type="header" style={styles.sectionTitle}>In Progress Badges</CustomText>
        <Carousel data={inProgressBadges} faded={true} />
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
    flex: 1,
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
  badgeItem: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  fadedBadge: {
    opacity: 0.5,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  arrow: {
    fontSize: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default BadgesScreen;
