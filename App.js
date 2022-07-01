import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./screens/Register/RegisterScreen";
import RegisterProviderScreen from "./screens/Register/RegisterProviderScreen";
import Navigation from './Navigation';
import { RegisterProvider } from './context/registerContext';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <RegisterProvider>
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="RegisterScreen"
  >
          <Stack.Screen name="Rscreen" component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Rprovider" component={RegisterProviderScreen} 
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="Nav" component={Navigation} 
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
      </RegisterProvider>
  );
}

