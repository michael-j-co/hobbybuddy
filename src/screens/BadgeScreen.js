import React, { useRef } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import PageHeader from "../components/PageHeader";
import PointBalance from "../components/PointBalance";
import CustomText from "../components/CustomText";
import AvatarWithMessage from "../components/AvatarWithMessage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Using FontAwesome icons

// Updated data with 'description' for each badge
const completedBadges = [
  {
    id: "1",
    title: "1 Month Rockstar",
    icon: require("../../assets/badge5.png"),
    description: "Committed to hobby for 4 weeks",
  },
  {
    id: "2",
    title: "Hobby Advocate",
    icon: require("../../assets/badge4.png"),
    description: "Referred 5 friends",
  },
  {
    id: "3",
    title: "Points Collector",
    icon: require("../../assets/badge6.png"),
    description: "Earned at least 10000 points",
  },
];

const inProgressBadges = [
  {
    id: "4",
    title: "2 Month Rockstar",
    icon: require("../../assets/badge1.png"),
    description: "Commit to hobby for 8 weeks",
  },
  {
    id: "5",
    title: "Hobby Promoter",
    icon: require("../../assets/badge2.png"),
    description: "Refer 20 friends",
  },
  {
    id: "6",
    title: "Points Master",
    icon: require("../../assets/badge3.png"),
    description: "Earn at least 70000 points",
  },
];

// Modified BadgeItem to show the new 'description'
const BadgeItem = ({ title, icon, description, faded }) => (
  <View style={[styles.badgeItem, faded && styles.fadedBadge]}>
    <Image source={icon} style={styles.badgeIcon} />
    <CustomText type="body" style={styles.badgeTitle}>
      {title}
    </CustomText>
    {/* Description shown under the title */}
    <CustomText type="body" style={styles.badgeDescription}>
      {description}
    </CustomText>
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
        <Icon name="angle-left" size={24} color="#000" />
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
        <Icon name="angle-right" size={24} color="#000" />
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
          <AvatarWithMessage motivation="Let’s try for a hike today!" />
        </View>

        <CustomText type="header" style={styles.sectionTitle}>
          Completed Badges
        </CustomText>
        <Carousel data={completedBadges} />

        <CustomText type="header" style={styles.sectionTitle}>
          In Progress Badges
        </CustomText>
        <Carousel data={inProgressBadges} faded={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "left",
  },
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  carousel: {
    alignItems: "center",
  },
  badgeItem: {
    marginHorizontal: 10,
    alignItems: "center",
    width: 120,
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  badgeDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 3,
    textAlign: "center",
  },
  fadedBadge: {
    opacity: 0.5,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default BadgesScreen;
