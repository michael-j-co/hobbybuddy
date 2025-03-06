// components/questionTypes/SliderQuestion.js
import React from "react";
import { View, Text } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import styles from "../../styles/SurveyScreenStyles";

const SliderQuestion = ({ question, value, onValueChange }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.questionText}>{question.question}</Text>
      <View style={styles.ticksContainer}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.tick,
              index === 3 && styles.neutralTick,
              (index === 0 || index === 6) && styles.invisibleTick,
            ]}
          />
        ))}
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Slider
          style={{ width: 262 }}
          trackStyle={{ width: 262, height: 19, borderRadius: 19 }}
          thumbStyle={{
            width: 33,
            height: 33,
            borderRadius: 33,
            backgroundColor: "#FFC107",
          }}
          minimumValue={0}
          maximumValue={6}
          step={1}
          value={value}
          onValueChange={onValueChange}
          minimumTrackTintColor="#FFC107"
          maximumTrackTintColor="#EAEAEA"
        />
      </View>
      <View style={styles.sliderLabels}>
        <Text style={styles.sliderLabel}>Not Fulfilled</Text>
        <Text style={styles.sliderLabel}>Neutral</Text>
        <Text style={styles.sliderLabel}>Extremely Fulfilled</Text>
      </View>
    </View>
  );
};

export default SliderQuestion;
