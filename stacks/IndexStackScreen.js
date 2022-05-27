import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import BusquedaScreen from '../screens/BusquedaScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';


const IndexStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator> 

            <HomeStack.Screen name='Register' component={RegisterScreen}/>
            <HomeStack.Screen name="Home" component={IndexScreen} 
            options={{
              headerShown: false,
            }}
            />
            <HomeStack.Screen name="Busqueda" component={BusquedaScreen} />  
        </HomeStack.Navigator> 

  );
   
        
}

export default IndexStackScreen; 