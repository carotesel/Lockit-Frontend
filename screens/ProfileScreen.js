import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const { infoUser, setInfoUser } = useContext(AuthContext);
  const { loginData, setLoginData } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    setLoginData({
      username: undefined,
      contrasenia: undefined,
    });
    await AsyncStorage.removeItem("token");
    setInfoUser("");

    navigation.navigate("Login");
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Mi perfil
      </Text>

      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: "8%",
          marginBottom: "8%",
        }}
      >
        {infoUser.nombre} {infoUser.apellido}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#DF4F1A",
          padding: 15,
          width: "65%",
          borderRadius: 8,
          marginBottom: 8,
          alignSelf: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 18 }}>Editar perfil</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#DF4F1A",
          padding: 15,
          width: "65%",
          borderRadius: 8,
          marginBottom: 8,
          alignSelf: "center",
        }}
        onPress={() => handleLogout()}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 18 }}>Cerrar sesión</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
