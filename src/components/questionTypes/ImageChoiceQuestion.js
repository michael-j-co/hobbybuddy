// components/questionTypes/ImageChoiceQuestion.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/SurveyScreenStyles";
import { useAvatar } from "../../context/AvatarContext"; // Adjust path as necessary

const ImageChoiceQuestion = ({ question, answer, onSelect }) => {
  const { setSelectedAvatar } = useAvatar();

  return (
    <View style={styles.hobbyBuddyContainer}>
      <Text style={styles.questionText}>{question.question}</Text>
      <View style={styles.buddyGrid}>
        {question.options.map((option) => (
          <TouchableOpacity
            key={option.label}
            style={[
              styles.buddyOption,
              answer === option.label && styles.selectedBuddy,
            ]}
            onPress={() => {
              onSelect(option.label);
              // Update the avatar context with the selected option details
              setSelectedAvatar({
                source: option.image,
                name: option.label,
                accessory: null,
                background: null,
              });
            }}
          >
            <Image source={option.image} style={styles.buddyImage} />
            <Text style={styles.buddyLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ImageChoiceQuestion;
