import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, React } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon2 from "react-native-vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import { getAvailableTypeLockers } from "../../services/ClientService";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { reservarLocker } from "../../services/ClientService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const CliReservaScreen = () => {
  
  const [size, setSize] = useState(null);
  const [hours, setHours] = useState(null);

  console.log("aber", size, hours);

  const route = useRoute();
  const { tienda } = route.params;

  const navigation = useNavigation();

  const { infoUser } = useContext(AuthContext);

  console.log('====================================');
  console.log(tienda.idTienda);
  console.log('====================================');

  useEffect (() => {
    const getTypes = async () => {
      const res = await getAvailableTypeLockers(tienda.idTienda);
      console.log('{0}',res);
    }
    getTypes();
  }, [])


  const handleReserva = async () => {
    const codigo = await reservarLocker(tienda.idTienda, size, infoUser.idUsuarios, hours, navigation);
    console.log(codigo);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Reservar</Text>

      <Text style={styles.text}>Tamaño del locker</Text>
      <SelectDropdown
        data={["Chico - 40x70x60cm", "Mediano - 50x75x65cm", "Grande - 60x80x70cm"]}
        onSelect={(selectedItem, index) => {
         console.log("juan tamanio", index); 
         setSize(index);
          
        }}
        defaultButtonText="Seleccionar tamaño"
        buttonStyle={styles.input2}
        buttonTextStyle={{ color: "black", marginRight: 55 }}
        dropdownStyle={{ borderRadius: 10 }}
        renderDropdownIcon={() => {
          return (
            <Icon2
              name="down"
              size={25}
              color="black"
              style={{ marginRight: 25 }}
            />
          );
        }}
      />
      <Text style={[styles.text, {marginTop: 50}]}>Cantidad de horas a reservar</Text>

        <SelectDropdown
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            onSelect={(selectedItem) => {
                setHours(selectedItem);
                console.log(selectedItem);
            }}
            defaultButtonText="Seleccionar horas"
            buttonStyle={styles.input2}
            buttonTextStyle={{ color: "black", marginRight: 55 }}   
            dropdownStyle={{ borderRadius: 10, height: 230 }}
            renderDropdownIcon={() => {
                return (
                    <Icon2
                        name="down"
                        size={25}
                        color="black"
                        style={{ marginRight: 25 }}
                    />
                );
            }}
        />

      <TouchableOpacity style={styles.orangebutton} onPress={()=> handleReserva()}>
        <View style={styles.centerText}>
          <Text style={[styles.text2, { color: "white" }]}>Pagar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CliReservaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bigText: {
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 22,
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 25,
    marginBottom: 15,
  },
  input: {
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
  input2: {
    marginTop: 10,
    width: 300,
    height: 55,
    alignSelf: "center",
    borderRadius: 10,
  },
  centerText: {
    alignItems: "center",
  },
  orangebutton: {
    backgroundColor: "#DF4F1A",
    padding: 15,
    width: "65%",
    borderRadius: 8,
    marginTop: 270,
    marginBottom: 8,
    alignSelf: "center",
  },
  text2: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 14,
  },
});
