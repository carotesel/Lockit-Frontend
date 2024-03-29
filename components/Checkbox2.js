import React from "react";
import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox2 = ({
  dia,
  diasSeleccionados,
  setDiasSeleccionados,
  handleCheck,
  dataTiming,
}) => {
  return (
    <BouncyCheckbox
      size={25}
      fillColor="#DF4F1A"
      unfillColor="#FFFFFF"
      name={dia}
      text={dia}
      onPress={() => {
        if (diasSeleccionados.includes(dia)) {
          setDiasSeleccionados(diasSeleccionados.filter((d) => d !== dia));
        } else {
          setDiasSeleccionados([...diasSeleccionados, dia]);
        };
        handleCheck(dia);
        console.log(dataTiming);
      }}
      key={dia}
      iconStyle={styles.icon}
      textStyle={styles.text}
    />
  );
};

export default Checkbox2;

const styles = StyleSheet.create({
  icon: {
    borderColor: "#DF4F1A",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    textDecorationLine: "none",
    color: "white",
    fontSize: 20,
  },
});
