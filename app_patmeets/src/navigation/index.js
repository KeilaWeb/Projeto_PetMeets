import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from 'expo-app-loading';
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";  // Adicione esta importação

const Stack = createNativeStackNavigator();

const [fontsLoaded] = useFonts({
  'GentySans': require('./assets/fonts/GentySans-Regular.ttf'),
});
if (!fontsLoaded) {
  return <AppLoading />; 
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />  {/* Adicione esta linha */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
