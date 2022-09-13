import { react, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  // states y handlers de RegisterUser

  const [data, setData] = useState({
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    contra: undefined,
    userName: undefined,
    user: undefined,
  });

  const [phone, setPhone] = useState("");
  const [userChecked, setUserChecked] = useState("");
  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState("");
  const [infoUser, setInfoUser] = useState(null);


  // states y handlers de LoginScreen


  const handleInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const handleUser = (e) => {
    setUserChecked(e);
    if (e !== "Proveedor" && e !== "Cliente") {
      setData({
        ...data,
        user: undefined,
      });
    } else if (e === "Proveedor") {
      setData({
        ...data,
        user: 1,
      });
    } else if (e === "Cliente") {
      setData({
        ...data,
        user: 2,
      });
    }
    console.log(data.user);
  };

  const handleDate = (date) => {
    setDateVisible(false);
    setDate(date);
  };

  
  return (
    <AuthContext.Provider
      value={{ /*RegisterScreen */handleInput, setPhone, setDateVisible, handleDate, handleUser, data, date, dateVisible, 
      /*RegisterProviderScreen*/ 
      /*LoginScreen*/infoUser, setInfoUser
     }}
    >
      {children}
    </AuthContext.Provider>
  );
};
