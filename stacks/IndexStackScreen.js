import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import BusquedaScreen from '../screens/BusquedaScreen';


const IndexStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator> 
            <HomeStack.Screen name="Index" component={IndexScreen} />
            <HomeStack.Screen name="Busqueda" component={BusquedaScreen} />  
        </HomeStack.Navigator> 

  );
   
        
}

export default IndexStackScreen; 