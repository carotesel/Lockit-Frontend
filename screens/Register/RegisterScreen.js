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
import { useState } from "react";
import PhoneInput from 'react-native-phone-input'




const RegisterScreen = () => {
  
  const navigation = useNavigation();

  const [data, setData] = useState({
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    user: undefined, 
    contra: undefined, 
  
  });

  const [phone, setPhone] = useState('');

  console.log(phone);

  const handleInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Rprovider" }],
      });
    console.log(data);
    
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../Register/images/LOGO.png")}
      />

      <TextInput style={styles.textInput} placeholder="Nombre" name="nombre" onChange={(e) => handleInput(e,"nombre")}  placeholderTextColor="#adaaaa" 
/>

      <TextInput style={styles.textInput} placeholder="Apellido" name="apellido" onChange={(e) => handleInput(e,"apellido" )}  placeholderTextColor="#adaaaa" 
/>

      <TextInput style={styles.textInput} placeholder="Email" name="email" onChange={(e) => handleInput(e, "email")} placeholderTextColor="#adaaaa" />

      <TextInput
        style={styles.textInput}
        placeholder="Nombre de Usuario"
        name="user"
        onChange={(e) => handleInput(e,"user")}
        placeholderTextColor="#adaaaa" 
      />

      <TextInput
        style={styles.textInput}
        placeholder="Contraseña"
        name="contra"
        onChange={(e) => handleInput(e, "contra")}
        placeholderTextColor="#adaaaa" 
      />

      <PhoneInput
        name="telefono"
        style={styles.textInput}
        onChangePhoneNumber={(phone) => setPhone(phone)}
        textProps={{
          placeholder: 'Teléfono',
          placeholderTextColor: '#adaaaa',
      }}
        flagStyle={{
          width: 35,
          height: 20,
        }}
      />
      

      <TouchableOpacity
        style={styles.orangebutton}
        onPress={registrar}
      >
        <View style={styles.centerText}>
          <Text style={styles.text} >Registrarme</Text>
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
    justifyContent: "center",
  },

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
  },
});
