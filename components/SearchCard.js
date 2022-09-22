import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon3 from 'react-native-vector-icons/MaterialIcons';


const SearchCard = ({ tienda, navigation }) => {
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("Detalle", {tienda: tienda})}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Icon3 name="store-mall-directory" size={48} color={'black'} style={{marginTop: 8, alignSelf: 'center'}} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", marginRight: 60, marginStart: 5 }}>
          <Text style={{ fontSize: 20 }}>{tienda.nombre_tienda}</Text>
        </View>
        <Text style={{marginStart: 5, marginTop: 8, marginBottom: 8, fontSize: 16}}>{tienda.direccion}</Text>
        {tienda.veinticuatrohs ? <Text style={{marginStart: 5, fontWeight: 'bold', fontSize: 16, color: 'green'}}>24hs</Text> : undefined}
      </View>
    </View>
    </TouchableOpacity>
  );
};

/*id: 4,
      local: "Las antos",
      barrio: "Belgrano",
      lockersDisponibles: 10,
      is24: false,**/

export default SearchCard; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  imageBorder: {
    marginTop: 6,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  imageContainer: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#000",
    width: 70,
    height: 70,
  },
  textContainer: {
    marginLeft: 80,
    marginTop: -70,
  },
});
