import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import PageHeader from "../components/PageHeader";
import ProgressIndicator from "../components/ProgressIndicator";
import ActionButton from "../components/ActionButton";
import CheckBox from "expo-checkbox";
import CategoryButton from "../components/CategoryButton";
import QuestionRenderer from "../components/QuestionRenderer";
import surveyQuestions from "../data/SurveyQuestions";
import styles from "../styles/SurveyScreenStyles";

const SurveyScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  // Animated value to control opacity for transitions
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const currentQuestion = surveyQuestions[currentIndex];
  const progress = Math.round((currentIndex / surveyQuestions.length) * 100);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleCheckboxAnswer = (questionId, option) => {
    const selectedOptions = answers[questionId] || [];
    if (selectedOptions.includes(option)) {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: selectedOptions.filter((o) => o !== option),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: [...selectedOptions, option],
      }));
    }
  };

  // Validate current answer(s)
  const validateAnswer = () => {
    if (currentIndex === 4) {
      if (!answers[5] || answers[5].length === 0 || answers[6] === undefined) {
        return "Please answer both questions before continuing.";
      }
    } else if (currentIndex !== 3) {
      if (
        answers[currentQuestion.id] === undefined ||
        (Array.isArray(answers[currentQuestion.id]) &&
          answers[currentQuestion.id].length === 0)
      ) {
        return "Please answer the question before continuing.";
      }
    }
    return null;
  };

  // Animate fade-out, update index, then fade-in
  const animateTransition = (newIndex) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(newIndex);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleNext = () => {
    if (currentIndex === surveyQuestions.length - 1) {
      navigation.navigate("HomePage");
      return;
    }

    const errorMessage = validateAnswer();
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
      return;
    }

    if (currentIndex === 4) {
      if (answers[6] === "Yes") {
        Alert.alert(
          '"Hobby Buddy" Would Like to Send You Notifications',
          "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.",
          [
            {
              text: "No",
              onPress: () => {
                animateTransition(currentIndex + 2);
              },
              style: "cancel",
            },
            {
              text: "Yes",
              onPress: () => {
                // Insert notification permission request logic here if needed.
                animateTransition(currentIndex + 2);
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        animateTransition(currentIndex + 2);
      }
    } else {
      animateTransition(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex === 5) {
      animateTransition(currentIndex - 2);
    } else if (currentIndex > 0) {
      animateTransition(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader
        useLogo={true}
        onBackPress={currentIndex > 0 ? handleBack : null}
      />
      <ProgressIndicator progress={progress} />

      {/* Wrap the question area in Animated.View to apply fade transition */}
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <QuestionRenderer
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          answers={answers}
          handleAnswer={handleAnswer}
          handleCheckboxAnswer={handleCheckboxAnswer}
        />
      </Animated.View>
      <View style={styles.buttonContainer}>
        <ActionButton label="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default SurveyScreen;
