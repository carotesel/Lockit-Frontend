import react, { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const registerUser = async () => {
    const body = {
      nombre: data.nombre,
      apellido: data.apellido,
      mail: data.email,
      contrasenia: data.contra,
      telefono: phone,
      fechaNac: date,
      fkRol: data.user,
      username: data.userName,
    };

    const config = {
      method: "post",
      data: body,
      url: "https://lockit-backend-anto.herokuapp.com/api/users/createUser",
    };
    axios(config)
      .then(async (response) => {
        console.log("creando");
        console.log("response", response);

        let userInfo = response.data;
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

        if (response.status === 201) {
          console.log("Se registro correctamente");
          setIsLogged(true);
        }
        else {
          console.log("No se pudo registrar");
        }
      })
      .catch((error) => {
        console.log(`error`, error.response);
      });
  };

  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
