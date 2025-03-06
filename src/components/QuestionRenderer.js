// QuestionRenderer.js
import React from "react";
import { View, Text } from "react-native";
import ImageChoiceQuestion from "./questionTypes/ImageChoiceQuestion";
import MultipleChoiceQuestion from "./questionTypes/MultipleChoiceQuestion";
import SliderQuestion from "./questionTypes/SliderQuestion";
import CheckboxQuestion from "./questionTypes/CheckboxQuestion";
import surveyQuestions from "../data/SurveyQuestions";
import styles from "../styles/SurveyScreenStyles";

const QuestionRenderer = ({
  currentQuestion,
  currentIndex,
  answers,
  handleAnswer,
  handleCheckboxAnswer,
}) => {
  if (!currentQuestion) return null;

  // Special case for grouped questions (checkbox and yes/no)
  if (currentIndex === 4) {
    return (
      <View>
        <Text style={styles.questionText}>{surveyQuestions[4].question}</Text>
        <CheckboxQuestion
          options={surveyQuestions[4].options}
          answer={answers[5] || []}
          onSelect={(option) => handleCheckboxAnswer(5, option)}
        />

        <MultipleChoiceQuestion
          question={surveyQuestions[5]}
          answer={answers[6]}
          onSelect={(answer) => handleAnswer(6, answer)}
        />
      </View>
    );
  }

  // Render based on individual question type
  switch (currentQuestion.type) {
    case "image-choice":
      return (
        <ImageChoiceQuestion
          question={currentQuestion}
          answer={answers[currentQuestion.id]}
          onSelect={(answer) => handleAnswer(currentQuestion.id, answer)}
        />
      );
    case "multiple-choice":
      return (
        <MultipleChoiceQuestion
          question={currentQuestion}
          answer={answers[currentQuestion.id]}
          onSelect={(answer) => handleAnswer(currentQuestion.id, answer)}
        />
      );
    case "slider":
      return (
        <SliderQuestion
          question={currentQuestion}
          // Pass additional props as needed (e.g., current slider value, change handler)
        />
      );
    default:
      return null;
  }
};

export default QuestionRenderer;
