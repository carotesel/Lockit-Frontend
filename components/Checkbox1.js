import { StyleSheet } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox1 = ({setTipo, lock, tipo}) => {
  // checkbox de los tipos de locker!
  return (
     <BouncyCheckbox
                    key={lock}
                    style={styles.selector}
                    onPress={() => {
                      if (tipo.find((t) => t === lock) === undefined) {
                        setTipo([...tipo, lock]);
                      } else {
                        setTipo(tipo.filter((t) => t !== lock));
                      }
                    }}
                    size={25}
                    fillColor="#DF4F1A"
                    unfillColor="#FFFFFF"
                    name={lock}
                    text={lock}
                    textStyle={styles.text}
                  ></BouncyCheckbox>
  )
}

export default Checkbox1

const styles = StyleSheet.create({
  selector: {
    padding: 10,
    width: "32%",
    borderRadius: 8,
    marginTop: 8,
  },
  text: {
    fontSize: 15,
    color: "#DF4F1A",
    textDecorationLine: "none",
  },
  }
  );
