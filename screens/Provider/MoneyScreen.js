import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const MoneyScreen = () => {
  const navigation = useNavigation();

  const {infoUser} = useContext(AuthContext);
  console.log(infoUser);

  return (
    <View style={styles.container}>
      <Text style={{
                      fontSize: 30,
                      textAlign: "center",
                     marginTop: "20%"
                 }}>
    Welcome {infoUser.nombre}!</Text>
      </View>
  );
};

export default MoneyScreen;

const styles = StyleSheet.create({

});
