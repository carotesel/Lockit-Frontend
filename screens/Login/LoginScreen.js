import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Login } from "../../services/LoginService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const LoginScreen = () => {

  useEffect(() => {
    setLoginData({
      username: undefined,
      contrasenia: undefined,
    })
  },[])

  const navigation = useNavigation();

  const {infoUser, setInfoUser} = useContext(AuthContext);
  const {loginData, setLoginData} = useContext(AuthContext);


  const handleInput = (e, name) => {
    setLoginData({
      ...loginData,
      [name]: e.nativeEvent.text,
    });
    console.log(loginData);
  };

  const handleLogin = async () => {
    await Login(loginData, navigation);

    const token = await AsyncStorage.getItem("token");

    console.log(token);

    const user = await axios({
      method: "POST",
      url: "https://lockit-backend.herokuapp.com/api/users/me",
      data: {token: token},
      })
      .then((res) => {
        let user = res.data;
        console.log(user);
        setInfoUser(user);

        if (res.data.fkrol === 2) {
          navigation.navigate("CliNav");
        }
        else if (res.data.fkrol === 1) {
          navigation.navigate("Nav");
        }

      })

      .catch((err) => {
        console.log(err);
      });
  };

  // hacer un get a /api/users/me con el token y guardar   usuario en el context

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Logo3.png")}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Usuario"
        value={loginData.username}
        name="username"
        placeholderTextColor="#adaaaa"
        onChange={(e) => handleInput(e, "username")}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Contraseña"
        value={loginData.contrasenia}
        secureTextEntry={true}
        name="contrasenia"
        placeholderTextColor="#adaaaa"
        onChange={(e) => handleInput(e, "contrasenia")}
      />

      <TouchableOpacity
        style={styles.orangebutton}
        onPress={() => handleLogin()}
      >
        <View style={styles.centerText}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>

      <Text style={{ color: "#ffff", marginTop: 40 }}>
        O también podes usar:
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
        }}
      >
        <Image source={require("../../assets/images/media/google.png")} />
        <Image
          source={require("../../assets/images/media/facebook.png")}
          style={{ marginLeft: 35 }}
        />
        <Image
          source={require("../../assets/images/media/twitter.png")}
          style={{ marginLeft: 35 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          justifyContent: "space-around",
        }}
      >
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
