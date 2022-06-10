import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source={require("../Register/images/LOGO.png")} />

      <TextInput style={styles.textInput} placeholder="Nombre" name="CUIT" />

      <TextInput style={styles.textInput} placeholder="Apellido" name="CUIT" />

      <TextInput style={styles.textInput} placeholder="Email" name="CUIT" />

      <TextInput style={styles.textInput} placeholder="Nombre de Usuario" name="CUIT" />

      <TextInput style={styles.textInput} placeholder="Contraseña" name="CUIT" />

      <TextInput style={styles.textInput} placeholder="Confirmar contraseña" name="CUIT" />



      <TouchableOpacity
        style={styles.orangebutton}
        onPress={() => navigation.navigate("RegisterProvider")}
      >
        <View style={styles.centerText}>
          <Text style={styles.text}>Registrarme</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051E44",
    alignItems: "center",
    justifyContent: "center",},
 
    title: {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    marginBottom: 20,
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
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "85%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
    marginBottom: 8,
  },
  image: {
    marginBottom: 25,
  }
});
