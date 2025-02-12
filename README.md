# Hobby App

## Overview

The **Hobby App** is designed to help individuals aged 25-35 who work full-time jobs start and stick to a new hobby for 60 days. By providing structured guidance, tracking progress, and rewarding consistency, the app aims to improve users' self-reported life satisfaction by 10%.

## Features

### **User Onboarding**
- Collects user details such as name, gender, and birthday.
- Allows users to select a hobby category and subcategory.
- Users specify their level of commitment and availability.
- Personalized suggestions for learning resources, purchasing supplies, and scheduling activities.

### **Progress Tracking**
- Users check in daily to log their hobby time.
- Progress is tracked with a **ProgressIndicator** component that visually represents completion percentages.
- **PointBalance** tracks and displays user-earned points for engaging with their hobby.

### **Gamification & Motivation**
- Users earn badges for consistency.
- Avatar customization unlocks new backgrounds and accessories as users make progress.
- **ActionButton** and **FeatureButton** components allow users to interact with various gamified elements.
- **AvatarWithMessage** provides motivational feedback.

### **Reminders & Notifications**
- Push notifications remind users of their commitment.
- Users can schedule reminders for hobby sessions.
- The **CheckInButton** allows users to confirm their daily hobby participation.

### **User Interface Components**
- **PageHeader** displays the app's title/logo and allows navigation.
- **LogoHeader** presents the app's branding.
- **CustomText** ensures consistency in typography.
- **InputField** supports user input in forms.
- **CategoryButton** lets users select hobby categories.
- **LinkText** allows users to navigate to external resources.
- **PasswordGuidelines** provides instructions for secure account creation.

## Installation & Setup

### **Prerequisites**
- Node.js & npm installed
- Expo CLI installed (`npm install -g expo-cli`)
- Clone this repository:

  ```sh
  git clone https://github.com/your-repo/hobby-app.git
  cd hobby-app
  ```
### Running the App
Install dependencies:
```sh
npm install
```
Start the Expo development server:
```sh
npx expo start
```
Scan the QR code with your mobile device using the Expo Go app.
File Structure
```mathematica
/src
│── components
│   ├── AvatarWithMessage.js
│   ├── CategoryButton.js
│   ├── CheckInButton.js
│   ├── CustomText.js
│   ├── FeatureButton.js
│   ├── InputField.js
│   ├── LinkText.js
│   ├── LogoHeader.js
│   ├── PageHeader.js
│   ├── PasswordGuidelines.js
│   ├── PointBalance.js
│   ├── ProgressIndicator.js
│── assets
│   ├── HBLogo.png
│── App.js
│── package.json
│── README.md
```
Contribution
Fork the repository.
Create a feature branch:
```sh
git checkout -b feature-name
Commit changes:
```
```sh
git commit -m "Add new feature"
Push to the branch:
```
```sh
git push origin feature-name
Open a Pull Request.
```
