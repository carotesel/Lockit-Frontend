import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ConfirmCard from '../../components/ConfirmCard'
import { useNavigation } from '@react-navigation/native'

const CliConfirmadoScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Tu reserva</Text>
      <ConfirmCard/>

      <TouchableOpacity style={styles.orangebutton} onPress={() => navigation.navigate("Lockers")}>
        <View style={styles.centerText}>
          <Text style={[styles.text2, { color: "white" }]}>Ver detalle de reserva</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CliConfirmadoScreen

const styles = StyleSheet.create({
    container: {
           flex: 1,
            backgroundColor: "#fff",
    },
    card: {
        alignSelf: "center",
        marginTop: 20,
    },
    bigText: {
      fontSize: 35,
      fontWeight: "bold",
      marginTop: 17,
      marginLeft: 10,
  },
  centerText: {
    alignItems: "center",
  },
  orangebutton: {
    backgroundColor: "#DF4F1A",
    padding: 15,
    width: "65%",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 8,
    alignSelf: "center",
  },
  text2: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 14,
  },
});