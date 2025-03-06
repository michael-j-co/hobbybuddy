import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Animated,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome icon
import PageHeader from "../components/PageHeader";
import AvatarWithMessage from "../components/AvatarWithMessage";
import PointBalance from "../components/PointBalance";
import CustomText from "../components/CustomText";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ResourceListScreen = ({ route, navigation }) => {
  const { category } = route.params;

  // Initial resource data per category
  const resourcesData = {
    buy: [
      {
        id: 1,
        title: "Hiking Clothing",
        description:
          "They are designed to provide you comfort, warmth, and airflow.",
        links: ["Amazon (Sponsored)", "Patagonia"],
      },
      {
        id: 2,
        title: "Hiking backpacks",
        description: "They are designed to store your belongings.",
        links: ["REI", "Patagonia"],
      },
    ],
    learn: [
      {
        id: 1,
        title: "What is hiking?",
        description: "Hiking is a leisurely walk usually done in the outdoors.",
        links: ["Wikipedia", "Reddit"],
      },
      {
        id: 2,
        title: "Who are prominent hikers?",
        description: "Famous hikers include John Muir and Isabella Bird.",
        links: ["GreenBelly (Sponsored)", "ExtremeMST"],
      },
    ],
    practice: [
      {
        id: 1,
        title: "Where to hike?",
        description: "Check your local mountains for hiking trails.",
        links: ["AllTrails (Sponsored)", "National Park Service"],
      },
      {
        id: 2,
        title: "What should I look out for when hiking?",
        description: "Check the weather, study the route, etc.",
        links: ["The Weather Channel", "Reddit"],
      },
    ],
  };

  // Use state to store the currently displayed resources for the category.
  const [displayedResources, setDisplayedResources] = useState(
    resourcesData[category] || []
  );

  // Store last deleted resource for possible undo (with its index)
  const [lastDeleted, setLastDeleted] = useState(null);

  // Animated value for the undo container opacity.
  const [undoOpacity] = useState(new Animated.Value(0));

  // Animate the Undo bar in
  const animateUndoIn = () => {
    Animated.timing(undoOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Animate the Undo bar out
  const animateUndoOut = (callback) => {
    Animated.timing(undoOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => callback && callback());
  };

  // Delete a card
  const handleDelete = (resource, index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setLastDeleted({ resource, index }); // store for undo
    const updatedResources = displayedResources.filter((_, i) => i !== index);
    setDisplayedResources(updatedResources);
    animateUndoIn();
  };

  // Undo deletion
  const handleUndo = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (lastDeleted) {
      const newResources = [...displayedResources];
      // Reinsert at original index
      newResources.splice(lastDeleted.index, 0, lastDeleted.resource);
      setDisplayedResources(newResources);
      animateUndoOut(() => setLastDeleted(null));
    }
  };

  // Decide which header text to show above the links
  const getLinksHeaderText = () => {
    if (category === "buy") return "You can buy them from:";
    return "For more information:"; // for 'learn' and 'practice'
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title={
          category === "buy"
            ? "What To Buy"
            : category === "learn"
            ? "Learn More"
            : category === "practice"
            ? "How To Practice"
            : "Saved Resources"
        }
        onBackPress={() => navigation.goBack()}
      />
      <PointBalance points={1250} navigation={navigation} />
      <View style={styles.profileSection}>
        <AvatarWithMessage
          motivation={
            category === "buy"
              ? "Here are some things you can buy!"
              : category === "learn"
              ? "Here is how you can learn more!"
              : category === "practice"
              ? "Here is how you can practice!"
              : "Here are your saved resources!"
          }
        />
      </View>

      {/* Undo message bar appears above the cards */}
      {lastDeleted && (
        <Animated.View style={[styles.undoContainer, { opacity: undoOpacity }]}>
          <Text style={styles.deletedMessage}>
            Deleted {lastDeleted.resource.title}
          </Text>
          <TouchableOpacity onPress={handleUndo}>
            <Text style={styles.undoText}>Undo</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      <ScrollView contentContainerStyle={styles.listContainer}>
        {displayedResources.map((resource, index) => (
          <View key={resource.id} style={styles.card}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(resource, index)}
            >
              <Icon name="times" size={20} color="#2C3E50" />
            </TouchableOpacity>
            <CustomText type="header" style={styles.title}>
              {resource.title}
            </CustomText>
            <CustomText type="body" style={styles.description}>
              {resource.description}
            </CustomText>

            {/* Conditionally display "You can buy them from:" or "For more information:" */}
            <CustomText type="body" style={styles.linksHeader}>
              {getLinksHeaderText()}
            </CustomText>

            {resource.links.map((link, idx) => (
              <CustomText key={idx} type="body" style={styles.link}>
                -- {link}
              </CustomText>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    borderWidth: 1.5,
    borderColor: "#2C3E50",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    position: "relative",
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 10,
    fontSize: 14,
    color: "#555",
  },
  linksHeader: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    fontSize: 14,
    color: "#007BFF",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 5,
  },
  undoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEE",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#CCC",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  deletedMessage: {
    fontSize: 14,
    color: "#333",
  },
  undoText: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#2C3E50",
  },
});

export default ResourceListScreen;
