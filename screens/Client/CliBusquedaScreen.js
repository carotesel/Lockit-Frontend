import { View, Text, StyleSheet, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import {React, useState} from "react";
import SearchCard from "../../components/SearchCard";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { getTiendas } from "../../services/ClientService";


const CliBusquedaScreen = () => {

  const [barrio, setBarrio] = useState("");
  const [tiendas, setTiendas] = useState([]);
  console.log(barrio);

  
  const handleSearch = async (barrio) => {
    const stores = await getTiendas(barrio);
    setTiendas(stores);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.searchContainer}>
      <TouchableOpacity onPress={()=> handleSearch(barrio)}>
      <Icon name="search" style={styles.searchIcon}/>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        name="search"
        placeholder="Ingrese el barrio en el que desea su locker"
        placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
        onChangeText={(text) => setBarrio(text)}
      />
      </View>
      <ScrollView>
    {tiendas.map((tienda) => (
         tiendas != [] ? (
          <View style={styles.card} key={tienda.idTienda}
          >
            <SearchCard
              tienda={tienda}
              navigation={navigation}
            />
          </View>
        ) : <Text>No hay bro</Text>
      ))}
      
      </ScrollView>
    </View>
  );
};

export default CliBusquedaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "#ffffff",
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
    marginBottom: 10,
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
    marginBottom: 12,
  },
});
