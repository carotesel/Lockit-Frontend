import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';


const SearchCard = ({ local, barrio, lockersDisponibles, is24 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Icon3 name="storefront-outline" size={48} color={'black'} style={{marginTop: 8, alignSelf: 'center'}} />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", marginRight: 60, marginStart: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 19 }}>{local}</Text>
        </View>
        {lockersDisponibles > 0 ? (
            <Text style={{marginStart: 5, marginTop: 5, marginBottom: 5, color: "green", fontWeight: "bold", fontSize:17 }}>Disponible</Text>
        ) : (
            undefined
        )}
        <Text style={{marginStart: 5, marginTop: 8, marginBottom: 8}}>Dirección:</Text>
        {is24 ? <Text style={{marginStart: 5, fontWeight: 'bold'}}>24hs</Text> : undefined}
      </View>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    marginLeft: 20,
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
