import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CliLockersScreen from '../screens/Client/CliLockersScreen'; 
import CliLockersReservaScreen from '../screens/Client/CliLockersReservaScreen';


const LockersStackScreen = () => {
  const LockersStack = createNativeStackNavigator();
    
  return (
        
        <LockersStack.Navigator> 
            
            <LockersStack.Screen name="Lockers" component={CliLockersScreen} 
            options={{
              headerShown: false,
            }}
            />
            
            <LockersStack.Screen name="LReservas" component={CliLockersReservaScreen} />  
        
        </LockersStack.Navigator> 
  );
   
        
}

export default LockersStackScreen; 