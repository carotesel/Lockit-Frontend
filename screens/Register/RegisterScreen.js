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
import PhoneInput from "react-native-phone-input";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SelectDropdown from "react-native-select-dropdown";

const RegisterScreen = () => {
  const users = ["Proveedor", "Cliente"];
  const navigation = useNavigation();

  console.log(data);
  console.log(date);

  const register = () => {
    navigation.navigate("Rprovider");
  };

  const {handleInput, setPhone, setDateVisible, handleDate, handleUser, data, date, dateVisible} = useContext(AuthContext);

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
        onPress={() => setDateVisible(true)}
      >
        <Text style={styles.grayText}>Fecha de Nacimiento</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={dateVisible}
        mode="date"
        onConfirm={(date) => handleDate(date)}
        onCancel={() => setDateVisible(false)}
      />

      <SelectDropdown
        style={styles.selector}
        data={users}
        onSelect={(e) => handleUser(e)}
        defaultButtonText="Seleccione una opción"
        buttonStyle={styles.selector}
        buttonTextStyle={{ fontSize: 16 }}
        dropdownStyle={{ borderRadius: 10 }}
      />

      <TouchableOpacity
        style={styles.orangebutton}
        onPress={ () => register()}
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
  selector: {
    borderWidth: 2,
    padding: 5,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
    marginBottom: 8,
    width: "85%",
  },
});
