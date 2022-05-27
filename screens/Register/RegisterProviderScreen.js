import { View, Text, TextInput, StatusBar, StyleSheet } from "react-native";
import React from "react";

const RegisterProviderScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Datos del titular</Text>
      <TextInput style={styles.textInput} placeholder="Nombre completo" />
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput} placeholder="DNI" />

      <Text>Datos del negocio</Text>
      <TextInput style={styles.textInput} placeholder="Nombre" />
      <TextInput style={styles.textInput} placeholder="Dirección" />
      <TextInput style={styles.textInput} placeholder="Altura" />
      <TextInput style={styles.textInput} placeholder="Ciudad" />
      <TextInput style={styles.textInput} placeholder="Código Postal" />
      <TextInput style={styles.textInput} placeholder="Email" />

      <Button>Registrarme</Button>

      <Text>Ya tenés una cuenta? Iniciar Sesión</Text>



      <StatusBar style="auto" />
    </View>
  );
};

export default RegisterProviderScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#051E44",
      alignItems: "center",
      justifyContent: "center",
    },
    textInput: {
      borderWidth: 1,
      padding: 15,
      width: "85%",
      borderRadius: 8,
      backgroundColor: "#fff",
    },
  });
  
