import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Logo3.png")}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Usuario"
        name="contra"
        placeholderTextColor="#adaaaa"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Contraseña"
        name="contra"
        placeholderTextColor="#adaaaa"
      />

      <TouchableOpacity
        style={styles.orangebutton}
      >
        <View style={styles.centerText}>
          <Text style={styles.text}>Registrarme</Text>
        </View>
      </TouchableOpacity>

      <Text style={{color:"#ffff", marginTop: 40}}>O también podes usar:</Text>

      <View style={{flexDirection:"row", marginTop: 30, justifyContent:"space-around" }}>
        <Image source={require ('../../assets/images/media/google.png')}/>
        <Image source={require ('../../assets/images/media/facebook.png')} style={{marginLeft: 35}}/>
        <Image source={require ('../../assets/images/media/twitter.png')} style={{marginLeft: 35}}/>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051E44",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "85%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
    marginBottom: 14,
  },
  image: {
    marginBottom: 25,
    marginTop: 145,
  },
  text: {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  centerText: {
    alignItems: "center",
  },
  orangebutton: {
    backgroundColor: "#DF4F1A",
    borderWidth: 1,
    padding: 15,
    width: "65%",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 8,
  },
});
