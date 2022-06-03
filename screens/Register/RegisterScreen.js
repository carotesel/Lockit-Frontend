import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      
      <Image source={require('../Register/images/Logo2.png')}/>
      
      <Text>Registrate!</Text>

      <Button title='Soy Cliente'/>

      <Button title='Soy Proveedor!' onPress={() => navigation.navigate("RegisterProvider")}/>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051E44",
    alignItems: "center",
    justifyContent: "center",
  },
});