import React from "react";
import { View, StyleSheet, TextInput, StatusBar, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Ingrese ubicación" />

      <Button title="Buscar" onPress={() => navigation.navigate("Busqueda")} />

      <StatusBar style="auto" />

      {/*https://medium.com/@jocheattahdavid/linear-gradients-in-react-native-a0b7f7befd2a */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#051E44",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "85%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 9,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
