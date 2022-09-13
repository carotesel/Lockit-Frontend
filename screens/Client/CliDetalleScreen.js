import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CliDetalleScreen = ({ tienda }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/starbucks.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.bigText}>Nombre</Text>

        <View style={styles.row}>
          <Text style={styles.text}>24 hs -</Text>
          <Text style={[styles.text, { marginLeft: 10 }]}>Dirección</Text>
        </View>
      </View>
      <Text style={[styles.text, {marginTop: 30, marginLeft: 20}]}>Descripcion:</Text>

    <View style={styles.row}>   
      <Text style={[styles.text, {marginTop: 30, marginLeft: 20}]}>Calificacion:</Text>
      <Image source={require("../../assets/icons/Star.png")} style={styles.star}/>
      <Image source={require("../../assets/icons/Star.png")} style={styles.star}/>
      <Image source={require("../../assets/icons/Star.png")} style={styles.star}/>
      <Image source={require("../../assets/icons/Star.png")} style={styles.star}/>

    </View>
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
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 10,
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
    marginTop: 10,
    marginLeft: 10,
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
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
  },
    star: {
    width: 28,
    height: 28,
    marginTop: 28,
    marginLeft: 10,
    },
});
