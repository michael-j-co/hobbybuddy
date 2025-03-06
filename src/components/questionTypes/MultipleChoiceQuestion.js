// components/questionTypes/MultipleChoiceQuestion.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryButton from "../CategoryButton";
import styles from "../../styles/SurveyScreenStyles";

const MultipleChoiceQuestion = ({ question, answer, onSelect }) => {
  console.log("MultipleChoiceQuestion - question:", question);

  // Check if there are exactly two options (yes/no scenario)
  const isYesNo =
    Array.isArray(question.options) && question.options.length === 2;

  // If yes/no, modify container style to render options in a row
  const containerStyle = isYesNo
    ? {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }
    : {};

  return (
    <View style={styles.questionRendererContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>
      <View style={styles.responseContainer}>
        <ScrollView
          contentContainerStyle={[styles.optionsContainer, containerStyle]}
        >
          {Array.isArray(question.options) ? (
            question.options.map((option) => (
              <CategoryButton
                key={option}
                label={option}
                selected={answer === option}
                onPress={() => onSelect(option)}
              />
            ))
          ) : (
            <Text style={styles.errorText}>No options available.</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MultipleChoiceQuestion;
