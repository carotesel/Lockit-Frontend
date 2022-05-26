import React from "react";
import { View, StyleSheet, TextInput, StatusBar, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Ingrese ubicación" />

      <Button title="Buscar" onPress={() => navigation.navigate("Busqueda")} />

      <StatusBar style="auto" />
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
});
