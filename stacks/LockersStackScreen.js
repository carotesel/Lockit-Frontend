import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LockersScreen from '../screens/LockersScreen';
import ActivosLockersScreen from '../screens/ActivosLockersScreen';



const LockersStackScreen = () => {
  const LockersStack = createNativeStackNavigator();
    
  return (
        
        <LockersStack.Navigator> 
            
            <LockersStack.Screen name="Lockers" component={LockersScreen} 
            options={{
              headerShown: false,
            }}
            />
            
            <LockersStack.Screen name="Activos" component={ActivosLockersScreen} />  
        
        </LockersStack.Navigator> 
  );
   
        
}

export default LockersStackScreen; 