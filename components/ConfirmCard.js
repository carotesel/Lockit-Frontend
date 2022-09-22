import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather";

const ConfirmCard = () => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
        <Icon name="check-circle" size={30} color="green" style={styles.icon}/>
      <Text style={styles.bigText}>Reserva confirmada!</Text>
      </View>
    <Text style={styles.text}>Tu codigo de reserva es: XXF-DR2</Text>
    </View>
  )
}

export default ConfirmCard;

const styles = StyleSheet.create({
    container: {
            width: 385,
            height: 110,
            borderRadius: 4,
            backgroundColor: "#f9fdfa",
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowOffset: {
              width: 0,
              height: 6
            },
            shadowRadius: 12,
            shadowOpacity: 1,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#1da82a",
            alignSelf: "center",
            marginTop: 45,

    },
    bigText: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 17,
        marginLeft: 10,
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,    },
    icon: {
        marginTop: 15,
        marginLeft: 10,
    },
});