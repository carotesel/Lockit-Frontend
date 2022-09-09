import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/Register/RegisterScreen";
import RegisterProviderScreen from "./screens/Register/RegisterProviderScreen";
import ProvNavigation from "./navigation/ProvNavigation";
import LoginScreen from "./screens/Login/LoginScreen";
import { AuthProvider } from "./context/AuthContext";
import CliNavigation from "./navigation/CliNavigation";

export default function App() {
  const Stack = createNativeStackNavigator();
  

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Rscreen"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rprovider"
            component={RegisterProviderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Nav"
            component={ProvNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CliNav"
            component={CliNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}