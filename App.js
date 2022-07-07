import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/Register/RegisterScreen";
import RegisterProviderScreen from "./screens/Register/RegisterProviderScreen";
import Navigation from "./Navigation";
import LoginScreen from "./screens/Login/LoginScreen";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RegisterScreen">
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
            }}
          />
          <Stack.Screen
            name="Nav"
            component={Navigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
