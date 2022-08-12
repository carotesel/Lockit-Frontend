import react, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const registerUser = async (data, phone) => {
    const body = {
      nombre: data.nombre,
      apellido: data.apellido,
      mail: data.email,
      contrasenia: data.contra,
      telefono: phone,
      fechaNac: null,
      fkRol: data.user,
      username: data.userName,
    };

    console.log(body);

    const res = await axios.post("https://lockit-backend.herokuapp.com/api/users/createuser", body)
    .then(response => {
      console.log('carlos',response);
  })
    .catch(error => console.log('pep',error.response.data));
  }


  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
