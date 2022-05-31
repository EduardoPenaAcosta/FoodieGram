import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotScreen from "./screens/ForgotScreen";
import UploadRecepie from "./screens/UploadRecepie";
import UserScreens from "./screens/UserScreens";
import OptionsScreen from "./screens/OptionsScreen";
import RegisterScreen from "./screens/RegisterScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPassword"
          component={ForgotScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UploadRecepie"
          component={UploadRecepie}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserProfiles"
          component={UserScreens}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Options"
          component={OptionsScreen}
        />
        <Stack.Screen 
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
