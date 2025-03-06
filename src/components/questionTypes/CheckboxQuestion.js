// components/questionTypes/CheckboxQuestion.js
import React from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import styles from "../../styles/SurveyScreenStyles";

const CheckboxQuestion = ({ options, answer, onSelect }) => {
  return (
    <View style={styles.checkboxContainer}>
      {options.map((option) => (
        <View key={option} style={styles.checkboxRow}>
          <CheckBox
            value={answer.includes(option)}
            onValueChange={() => onSelect(option)}
            color={answer.includes(option) ? "#2C3E50" : undefined}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.checkboxLabel}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default CheckboxQuestion;
