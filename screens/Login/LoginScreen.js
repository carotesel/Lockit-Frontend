import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {

  const navigation = useNavigation();
  
  const logIn = async () => {
    try {
      // await Login(); que esta en context lol
      
    } catch (error) {
      console.log(error);
    }
    navigation.reset({
        index: 0,
        routes: [{ name: "Nav" }],
      });
  };

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
        onPress={async () => {
          await logIn();
        }
        }
      >
        <View style={styles.centerText}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>

      <Text style={{color:"#ffff", marginTop: 40}}>O también podes usar:</Text>

      <View style={{flexDirection:"row", marginTop: 30, justifyContent:"space-around" }}>
        <Image source={require ('../../assets/images/media/google.png')}/>
        <Image source={require ('../../assets/images/media/facebook.png')} style={{marginLeft: 35}}/>
        <Image source={require ('../../assets/images/media/twitter.png')} style={{marginLeft: 35}}/>
      </View>

      <View style={{flexDirection:"row", marginTop: 30, justifyContent:"space-around" }}>
      <Text style={styles.text}>No te registraste aun? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Rscreen")}>
        <Text style={styles.orangeText}>Registrate</Text>
      </TouchableOpacity>
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
  orangeText: {
    color: "#DF4F1A",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },

});
