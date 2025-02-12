import React, { useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AvatarProvider } from './src/context/AvatarContext';
import WelcomeScreen from './src/screens/WelcomeScreen';
import IntroScreen from './src/screens/IntroScreen';
import SignInScreen from './src/screens/SignInScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import HomePage from './src/screens/HomePage';
import ResourcePage from './src/screens/ResourcePage';
import YourProgress from './src/screens/YourProgressScreen';
import ResourceListScreen from './src/screens/ResourceListScreen';
import PointsHistory from './src/screens/PointsHistoryScreen';
import CustomizeAvatar from './src/screens/CustomizeAvatarScreen';
import AccessoryCustomizationScreen from './src/screens/AccessoryScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import BadgesScreen from './src/screens/BadgeScreen';
const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync(); // Prevent the app from hiding the splash screen automatically

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      MontserratSemiBold: require('./assets/fonts/Montserrat.ttf'),
      LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
      NunitoBold: require('./assets/fonts/Nunito.ttf'),
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AvatarProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroScreen"
              component={IntroScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="SignInScreen" 
              component={SignInScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="CreateAccountScreen" 
              component={CreateAccountScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="SurveyScreen" 
              component={SurveyScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="LoadingScreen" 
              component={LoadingScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="HomePage" 
              component={HomePage} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="ResourcePage" 
              component={ResourcePage} 
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResourceListScreen"
              component={ResourceListScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourProgress"
              component={YourProgress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PointsHistory"
              component={PointsHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomizeAvatar"
              component={CustomizeAvatar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccessoryCustomizationScreen"
              component={AccessoryCustomizationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendsScreen"
              component={FriendsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadgeScreen"
              component={BadgesScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AvatarProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
