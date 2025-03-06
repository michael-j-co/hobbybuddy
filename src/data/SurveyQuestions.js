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
    options: [
      "Minimal: 1-2 hours per month",
      "Moderate: 3-4 hours per month",
      "Significant: 5-6 hours per month",
      "Fully Committed: > 7 hours per month",
    ],
  },
  {
    id: 4,
    question: "Outside of work, how fulfilled do you feel with your life?",
    type: "slider",
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
    type: "multiple-choice",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question:
      "One more thing - choose your Hobby Buddy! They will interact with you on your hobby journey:",
    type: "image-choice",
    options: [
      {
        label: "Friendly Frank",
        image: require("../../assets/dog.png"),
      },
      { label: "Playful Patty", image: require("../../assets/cat.png") },
      {
        label: "Motivational Mary",
        image: require("../../assets/turtle.png"),
      },
      { label: "Bubbly Bobby", image: require("../../assets/rabbit.png") },
    ],
  },
];

export default surveyQuestions;
