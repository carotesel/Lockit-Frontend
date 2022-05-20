import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';

export default function HomeScreen () {
    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Ingrese ubicación"
            />
            <StatusBar style="auto" 
            />
        </View>
    );
}

const styles=StyleSheet.create({ 
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });