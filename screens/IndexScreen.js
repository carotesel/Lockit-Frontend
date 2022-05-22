import React from 'react';
import { View, StyleSheet, TextInput, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
   
    const navigation = useNavigation();
   
   return (
        <View style={styles.container}>

            <TextInput
                placeholder="Ingrese ubicación"
            />

            <Button title="Buscar" onPress={()=> navigation.navigate("Busqueda")}/>
        </View>
    );
}

export default HomeScreen;

const styles=StyleSheet.create({ 
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });