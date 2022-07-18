import {
  View,
  ScrollView,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox1 from "../../components/Checkbox1";
import Checkbox2 from "../../components/Checkbox2";
import Icon from "react-native-vector-icons/Entypo";

const RegisterProviderScreen = () => {
  const tiposLocker = ["Chico", "Mediano", "Grande"];
  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const [tipo, setTipo] = useState([]); // tipo de locker
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [isAperPickerVisible, setAperPickerVisibility] = useState(false);
  const [isCierrePickerVisible, setCierrePickerVisibility] = useState(false);
  const [isPicked, setIsPicked] = useState(false);
  const [horario, setHorario] = useState({
    apertura: "",
    cierre: "",
    day: "",
  });

  const [dataTiming, setDataTiming] = useState({
    Lunes: undefined,
    Martes: undefined,
    Miercoles: undefined,
    Jueves: undefined,
    Viernes: undefined,
    Sabado: undefined,
    Domingo: undefined,
  });

  console.log(tipo);
  console.log(dataTiming);
  console.log(horario);

  const [data, setData] = useState({
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    dni: undefined,
    nombreComercio: undefined,
    calle: undefined,
    altura: undefined,
    ciudad: undefined,
    codPostal: undefined,
    emailComercio: undefined,
    razonSocial: undefined,
    CUIT: undefined,
  });

  const onChangeInput = (name, e) => {
    console.log(e, name);
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = () => {
    // await postData(); que esta en context lol
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
    console.log(data);
  };

  const showAperPicker = (dia) => {
    setHorario({
      ...horario,
      day: dia,
    });
    setAperPickerVisibility(true);
    setCierrePickerVisibility(false);
  };

  const showCierrePicker = (dia) => {
    setHorario({
      ...horario,
      day: dia,
    });
    setAperPickerVisibility(false);
    setCierrePickerVisibility(true);
  };

  const hideAperPicker = () => {
    setAperPickerVisibility(false);
  };

  const hideCierrePicker = () => {
    setCierrePickerVisibility(false);
  };

  const handleConfirmAper = (time) => {
    console.log(
      "APER - A date has been picked: ",
      time.getHours().toString().padStart(2, "0"),
      time.getMinutes().toString().padStart(2, "0")
    );
    setHorario({
      ...horario,
      apertura:
        time.getHours().toString().padStart(2, "0") +
        ":" +
        time.getMinutes().toString().padStart(2, "0"),
    });
    hideAperPicker();
  };

  const handleConfirmCierre = (time) => {
    console.log(
      "CIERRE - A date has been picked: ",
      time.getHours(),
      time.getMinutes()
    );
    hideCierrePicker();
    setHorario({
      ...horario,
      cierre:
        time.getHours().toString().padStart(2, "0") +
        ":" +
        time.getMinutes().toString().padStart(2, "0"),
    });
  };

  const handleCheck = (name, e) => {
    console.log(name, e);

    if (dataTiming[name] === undefined) {
      setDataTiming({
        ...dataTiming,
        [name]: [],
      });
      setIsPicked(true);
    } else {
      setDataTiming({
        ...dataTiming,
        [name]: undefined,
      });
      setIsPicked(false);
    }
  };

  const handleOpenAper = (dia) => {
    if (horario.apertura === "") {
      showAperPicker(dia);
    }
  };

  const handleOpenCierre = (dia) => {
    if (horario.cierre === "") {
      showCierrePicker(dia);
    }
  };

  useEffect(() => {
    diasSeleccionados.length === 0 &&
      setHorario({ apertura: "", cierre: "", day: "" });
  }, [diasSeleccionados]);

  const handleDatatiming = (horario) => {
    setDataTiming({
      ...dataTiming,
      [horario.day]: [
        ...dataTiming[horario.day],
        { apertura: horario.apertura, cierre: horario.cierre },
      ],
    });
  };

  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/images/LOGO.png")}
          />
          <Text style={styles.text}>Datos del titular</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nombre"
            name="nombre"
            onChange={(e) => onChangeInput(e, "nombre")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Apellido"
            name="apellido"
            onChange={(e) => onChangeInput(e, "apellido")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            name="email"
            onChange={(e) => onChangeInput(e, "email")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="DNI"
            name="dni"
            onChange={(e) => onChangeInput(e, "dni")}
            placeholderTextColor="#adaaaa"
          />

          <Text style={styles.text}>Datos del negocio</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nombre del comercio"
            name="nombreComercio"
            onChange={(e) => onChangeInput(e, "nombreComercio")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Dirección"
            name="calle"
            onChange={(e) => onChangeInput(e, "calle")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Altura"
            name="altura"
            onChange={(e) => onChangeInput(e, "altura")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ciudad"
            name="ciudad"
            onChange={(e) => onChangeInput(e, "ciudad")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Código Postal"
            name="codPostal"
            onChange={(e) => onChangeInput(e, "codPostal")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email del comercio"
            name="emailComercio"
            onChange={(e) => onChangeInput(e, "emailComercio")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Razón Social del comercio"
            name="razonSocial"
            onChange={(e) => onChangeInput(e, "razonSocial")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="CUIT"
            name="CUIT"
            onChange={(e) => onChangeInput(e, "CUIT")}
            placeholderTextColor="#adaaaa"
          />

          <View style={{ marginTop: 15 }}>
            <Text style={styles.text}>Elija sus lockers</Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <>
                {tiposLocker.map((lock) => (
                  <Checkbox1
                    setTipo={setTipo}
                    lock={lock}
                    tipo={tipo}
                    key={lock}
                  />
                ))}
              </>
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.text}>Elija los dias que abre</Text>

            {dias.map((dia) => (
              <Checkbox2
                dia={dia}
                diasSeleccionados={diasSeleccionados}
                setDiasSeleccionados={setDiasSeleccionados}
                key={dia}
                handleCheck={handleCheck}
                dataTiming={dataTiming}
              />
            ))}
          </View>

          {diasSeleccionados.map((dia) => {
            return (
              <Modal
                transparent
                visible={isPicked}
                key={dia}
                animationType="slide"
              >
                <View style={styles.modalBackGround}>
                  <View style={styles.modalView}>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Icon name="cross" size={30} color="#DF4F1A" onPress={()=> setIsPicked(false)} />
                      <View style={{ alignItems: "center", marginLeft: 85 }}>
                        <Text style={styles.textNegro} key={dia}>
                          {dia}
                        </Text>
                      </View>
                    </View>
                    <View style={{marginTop: 20, marginStart: 5, marginRight: 200}}>
                    <Button
                      title="Apertura"
                      onPress={() => handleOpenAper(dia)}
                    />
                    <Button
                      title="Cierre"
                      onPress={() => handleOpenCierre(dia)}
                    />                    
                    </View>

                    <TouchableOpacity
                      style={{ alignItems: "center" }}
                      onPress={() => handleDatatiming(horario)}
                    >
                      <Text style={styles.orangeText}>Confirmar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 30 }}>
                      <Text style={{ color: "#000000" }}>
                        Agregar Franja horaria
                      </Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isAperPickerVisible}
                      mode="time"
                      onConfirm={handleConfirmAper}
                      onCancel={hideAperPicker}
                      display="spinner"
                    />
                    <DateTimePickerModal
                      isVisible={isCierrePickerVisible}
                      mode="time"
                      onConfirm={handleConfirmCierre}
                      onCancel={hideCierrePicker}
                      display="spinner"
                    />
                  </View>
                </View>
              </Modal>
            );
          })}

          <TouchableOpacity style={styles.orangebutton} onPress={registrar}>
            <View style={styles.centerText}>
              <Text style={styles.text}>Registrarme</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.text}>Ya tenés una cuenta? Iniciar Sesión</Text>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterProviderScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    backgroundColor: "#051E44",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#051E44",
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    width: "85%",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  text: {
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  textNegro: {
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
  centerText: {
    alignItems: "center",
  },
  orangebutton: {
    backgroundColor: "#DF4F1A",
    borderWidth: 1,
    padding: 6,
    width: "65%",
    borderRadius: 8,
    marginTop: 28,
    marginBottom: 8,
  },
  image: {
    marginTop: 40,
  },
  orangeText: {
    color: "#DF4F1A",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  modalView: {
    backgroundColor: "white",
    marginTop: 180,
    paddingHorizontal: 25,
    width: "88%",
    paddingVertical: 45,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 1,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    alignItems: "center",
  },
});
