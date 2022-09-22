import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Foundation";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const CliDetalleScreen = () => {
  const route = useRoute();
  const { tienda } = route.params;

  console.log('====================================');
  console.log(tienda);
  console.log('====================================');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/starbucks.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.bigText}>{tienda.nombre_tienda}</Text>

        <View>
          <Text style={[styles.text, { marginTop: 8 }]}>
            <Icon name="location-outline" size={30} /> {tienda.direccion}
          </Text>

          {tienda.veinticuatrohs ? (
            <Text
              style={[
                styles.text,
                {
                  color: "green",
                  fontWeight: "bold",
                  marginTop: 18,
                  marginBottom: 2,
                  alignSelf: "center",
                },
              ]}
            >
              Abierto las 24Hs
            </Text>
          ) : undefined}
          <View style={[styles.row, {marginTop: -18, alignSelf: "center"}]}>
            <Image
              source={require("../../assets/icons/Star.png")}
              style={styles.star}
            />
            <Image
              source={require("../../assets/icons/Star.png")}
              style={styles.star}
            />
            <Image
              source={require("../../assets/icons/Star.png")}
              style={styles.star}
            />
            <Image
              source={require("../../assets/icons/Star.png")}
              style={styles.star}
            />
          </View>
        </View>

        
      </View>

      <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 15, backgroundColor:"white", width: 170, padding: 10, borderRadius:10, paddingTop:2, shadowColor: "#fffff" }}>
        <Icon2 name="telephone" size={28} style={{ marginTop: 12 }} />
        <Text style={[styles.text, { marginLeft: 7, marginTop: 15 }]}>
          {tienda.telefono_publico.trim()}
        </Text>
      </View>

      <Text style={[styles.text, { marginTop: 30, marginLeft: 20 }]}>
        {tienda.descripcion}
      </Text>

      <TouchableOpacity style={styles.orangebutton} onPress={()=> navigation.navigate("Reserva", {tienda: tienda})}>
        <View style={styles.centerText}>
          <Text style={[styles.text, { color: "white" }]}>Reservar locker</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


// {[styles.text, {marginLeft: 120}]

export default CliDetalleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigText: {
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 14,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#000",
    width: 85,
    height: 85,
    marginTop: 5,
  },
  image: {
    marginTop: -2,
    width: 85,
    height: 85,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  textContainer: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    alignItems: "center",
  },
  star: {
    width: 22,
    height: 22,
    marginTop: 28,
    marginLeft: 20,
  },
  centerText: {
    alignItems: "center",
  },
  orangebutton: {
    backgroundColor: "#DF4F1A",
    padding: 15,
    width: "65%",
    borderRadius: 8,
    marginTop: 200,
    marginBottom: 8,
    alignSelf: "center",
  },
});
