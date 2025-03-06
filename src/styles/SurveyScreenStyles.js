// SurveyScreenStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  hobbyBuddyContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  buddyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  buddyOption: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 10,
    padding: 10,
  },
  selectedBuddy: {
    borderColor: "#FFC107",
    borderWidth: 3,
  },
  buddyImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  buddyLabel: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "600",
    color: "#003F5C",
  },
  sliderContainer: {
    marginVertical: 20,
  },
  slider: {
    width: "100%",
  },
  ticksContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Reduces spacing between ticks
    width: "85%", // Reduce width to bring ticks closer together
    alignSelf: "center", // Ensure it stays centered
    marginBottom: -43, // Keep it close to the slider
  },
  tick: {
    width: 2,
    height: 46,
    backgroundColor: "#EAEAEA",
  },
  invisibleTick: {
    backgroundColor: "transparent",
  },
  neutralTick: {
    height: 46, // Make the middle tick slightly taller
    backgroundColor: "#EAEAEA",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  sliderLabel: {
    fontSize: 14,
    color: "#2C3E50",
  },
  contentContainer: {
    paddingBottom: 10,
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
  questionText: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "600",
    color: "#003F5C",
    marginBottom: 20,
    textAlign: "center",
  },
  checkboxContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 80,
    width: "100%", // Ensure the container spans full width
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center", // Ensures vertical alignment
    justifyContent: "flex-start", // Aligns checkboxes and text to the left
    width: "80%", // Keeps consistent width
    marginBottom: 10,
    paddingHorizontal: 0, // Adds padding for better spacing
  },
  checkboxLabel: {
    fontSize: 18,
    marginLeft: 60,
    color: "#003F5C",
    flex: 1, // Ensures text does not overflow inconsistently
  },
  yesNoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 80,
    marginTop: 10,
  },
});

export default styles;
