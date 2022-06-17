import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Register/RegisterScreen';
import RegisterProviderScreen from '../screens/Register/RegisterProviderScreen';


const RegisterStackScreen = () => {
  const RegisterStack = createNativeStackNavigator();
    return (
        <RegisterStack.Navigator> 

            <RegisterStack.Screen name='signUp' component={RegisterScreen}
            options={{
                headerShown: false,
            }}

            />
            <RegisterStack.Screen name='RegisterProvider' component={RegisterProviderScreen}/>
            
        </RegisterStack.Navigator> 

  );
   
        
}

export default RegisterStackScreen; 