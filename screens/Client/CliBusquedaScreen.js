import { View, Text, StyleSheet, TextInput, ScrollView, StatusBar } from "react-native";
import React from "react";
import SearchCard from "../../components/SearchCard";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CliBusquedaScreen = () => {
  const tiendas = [
    {
      id: 1,
      local: "Las pepas",
      barrio: "Almagro",
      lockersDisponibles: 10,
      is24: true,
    },
    {
      id: 2,
      local: "Las caros",
      barrio: "Caballito",
      lockersDisponibles: 10,
      is24: false,
    },
    {
      id: 3,
      local: "Las renus",
      barrio: "Villa Crespo",
      lockersDisponibles: 10,
      is24: true,
    },
    {
      id: 4,
      local: "Las antos",
      barrio: "Belgrano",
      lockersDisponibles: 10,
      is24: false,
    },
    {
      id: 5,
      local: "Las juan",
      barrio: "Villa maria",
      lockersDisponibles: 10,
      is24: true,
    },
    {
      id: 6,
      local: "Las jaco",
      barrio: "Paternal",
      lockersDisponibles: 10,
      is24: false,
    },
    {
      id: 7,
      local: "Las albert",
      barrio: "Villa Urquiza",
      lockersDisponibles: 10,
      is24: true,
    },
    {
      id: 8,
      local: "Las pepe",
      barrio: "Chacarita",
      lockersDisponibles: 10,
      is24: false,
    },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
      <Icon name="search" style={styles.searchIcon}/>
      <TextInput
        style={styles.textInput}
        name="search"
        placeholder="Ingrese el barrio en el que desea su locker"
        placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
      />
      </View>
      <ScrollView>
      {tiendas.map((tienda) => (
        tienda.lockersDisponibles > 0 ?
          <View style={styles.card} key={tienda.id}
          >
            <SearchCard
              tienda={tienda}
              navigation={navigation}
            />
          </View>
          : undefined
      ))}
      </ScrollView>
    </View>
  );
};

export default CliBusquedaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  textInput: {
    width: 370,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginTop: "5%",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    paddingLeft: "2%",
    letterSpacing: 0.3,
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 16,
  },
  card: {
    flex: 1,
    marginTop: 10,
    marginBottom: 15,
    // backgroundColor: "#ff0f",
  },
  searchIcon: {
    fontSize: 25,
    color: "#000",
    left: 18,
    top: 5,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    height: 42,
    marginTop: 52,
    paddingBottom: 8,
    width: 390,
    borderRadius: 10,
    marginBottom: 10,
  },
});
