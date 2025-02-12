import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import PageHeader from '../components/PageHeader';
import ProgressIndicator from '../components/ProgressIndicator';
import ActionButton from '../components/ActionButton';
import CategoryButton from '../components/CategoryButton';

const surveyQuestions = [
  {
    id: 1,
    question: "Which kind of hobby are you thinking of pursuing?",
    type: "multiple-choice",
    options: [
      "Cooking & Baking",
      "Reading",
      "Gaming",
      "Outdoor Activities",
      "Traveling",
      "Arts & Crafts",
    ],
  },
  {
    id: 2,
    question: "Within Outdoor Activities, what are you interested in?",
    type: "multiple-choice",
    options: [
      "Hiking",
      "Scuba Diving",
      "Bird Watching",
      "Camping",
      "Backpacking",
    ],
  },
  {
    id: 3,
    question: "How much time do you want to commit to Hiking?",
    type: "multiple-choice",
    options: ["Minimal", "Moderate", "Significant", "Fully Committed"],
  },
  {
    id: 4,
    question: "In the past, how was your experience with starting and maintaining a hobby?",
    type: "multiple-choice",
    options: ["Easy", "Neutral", "Hard"],
  },
  {
    id: 5,
    question: "What are your typical free hours in a day or week?",
    type: "checkbox",
    options: ["Morning", "Afternoon", "Evening"],
  },
  {
    id: 6,
    question: "Can we send you reminders to help motivate you?",
    type: "yes-no",
  },
];

const SurveyScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = surveyQuestions[currentIndex];
  const progress = Math.round(((currentIndex )/ surveyQuestions.length) * 100);

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleCheckboxAnswer = (option) => {
    const selectedOptions = answers[currentQuestion.id] || [];
    if (selectedOptions.includes(option)) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedOptions.filter((o) => o !== option),
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: [...selectedOptions, option],
      }));
    }
  };

  const handleNext = () => {
    if (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0) {
      Alert.alert("Error", "Please answer the question before continuing.");
      return;
    }

    if (currentIndex < surveyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("LoadingScreen");
    }
  };
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "multiple-choice":
        return (
          <ScrollView contentContainerStyle={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <CategoryButton
                key={option}
                label={option}
                selected={answers[currentQuestion.id] === option}
                onPress={() => handleAnswer(option)}
              />
            ))}
          </ScrollView>
        );
      case "checkbox":
        return (
          <ScrollView contentContainerStyle={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
              <CategoryButton
                key={option}
                label={option}
                selected={(answers[currentQuestion.id] || []).includes(option)}
                onPress={() => handleCheckboxAnswer(option)}
              />
            ))}
          </ScrollView>
        );
      case "yes-no":
        return (
          <View style={styles.optionsContainer}>
            <CategoryButton
              label="Yes"
              selected={answers[currentQuestion.id] === "Yes"}
              onPress={() => handleAnswer("Yes")}
            />
            <CategoryButton
              label="No"
              selected={answers[currentQuestion.id] === "No"}
              onPress={() => handleAnswer("No")}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader 
        useLogo={true} 
        onBackPress={currentIndex > 0 ? handleBack : null} 
      />
      <ProgressIndicator progress={progress} />

      <Text style={styles.progressText}>
        Question {currentIndex + 1} of {surveyQuestions.length}
      </Text>

      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      {renderQuestion()}

      <ActionButton label="Next" onPress={handleNext}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  progressText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  optionsContainer: {
    flex: 1,  // Makes options expand to fill the screen
    justifyContent: 'flex-start', // Aligns responses from the top
  },
});

export default SurveyScreen;