import react, { useState } from 'react';
import { createContext } from 'react';
import axios from "axios";

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
        try {
          console.log("creando");
          const response = await axios.post(
            "https://lockit-backend-anto.herokuapp.com/api/users/createUser",
            body
          );
          console.log(response);
          let userInfo = response.data;
          
          if (response.status === 201) {
            console.log("Se registro correctamente");
          }
        } catch (error) {
          console.log(error);
        }
      };
    

    return (
        <AuthContext.Provider value={{registerUser}}>
            {children}
        </AuthContext.Provider>
    )
}


