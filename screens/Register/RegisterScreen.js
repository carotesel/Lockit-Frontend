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
import PhoneInput from "react-native-phone-input";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const users = ["proveedor", "cliente"];
  const {registerUser} = useContext(AuthContext);

  const [data, setData] = useState({
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    user: undefined,
    contra: undefined,
    userName: undefined,
  });

  const [phone, setPhone] = useState("");
  const [userChecked, setUserChecked] = useState("");
  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState("");

  console.log(date);

  const handleInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = async () => {
    try {
      // await RegisterUser(); que esta en context lol
      navigation.reset({
        index: 0,
        routes: [{ name: "Rprovider" }],
      });
    } catch (error) {
      console.log(error);
    }
  };


  const handleUser = (e) => {
    setUserChecked(e);
    if (e !== "proveedor" && e !== "cliente") {
      setData({
        ...data,
        user: undefined,
      });
    } else if (e === "proveedor") {
      setData({
        ...data,
        user: 1,
      });
    } else if (e === "cliente") {
      setData({
        ...data,
        user: 2,
      });
    }
  };

  const handleDate = (date) => {
    setDateVisible(false);
    setDate(date);
  }
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/LOGO.png")}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        name="nombre"
        onChange={(e) => handleInput(e, "nombre")}
        placeholderTextColor="#adaaaa"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Apellido"
        name="apellido"
        onChange={(e) => handleInput(e, "apellido")}
        placeholderTextColor="#adaaaa"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        name="email"
        onChange={(e) => handleInput(e, "email")}
        placeholderTextColor="#adaaaa"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Nombre de Usuario"
        name="userName"
        onChange={(e) => handleInput(e, "userName")}
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
          placeholder: "Teléfono",
          placeholderTextColor: "#adaaaa",
        }}
        flagStyle={{
          width: 35,
          height: 20,
        }}
      />

      <TouchableOpacity
        style={styles.textInput}
       onPress={() => setDateVisible(true)} >
      <Text style={styles.grayText}>Fecha de Nacimiento</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={dateVisible}
        mode="date"
        onConfirm={(date) => handleDate(date)}
        onCancel={() => setDateVisible(false)}
      />

      {users.map((user) => (
        <BouncyCheckbox
          key={user}
          text={user}
          textStyle={{
            fontSize: 15,
            color: "#FFFFFF",
            textDecorationLine: "none",
          }}
          onPress={() => handleUser(user)}
        />
      ))}

      <TouchableOpacity
        style={styles.orangebutton}
        onPress={async () => await registrar()}
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
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 15,
    width: "65%",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 8,
  },
  grayText: {
    color: "#adaaaa",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
  },
});
