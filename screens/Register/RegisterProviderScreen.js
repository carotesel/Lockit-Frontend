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
import axios from "axios";
import PhoneInput from "react-native-phone-input";
import SelectDropdown from "react-native-select-dropdown";

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
  const security = ["Si", "No"];
  const [tipo, setTipo] = useState([]); // tipo de locker
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [isAperPickerVisible, setAperPickerVisibility] = useState(false);
  const [isCierrePickerVisible, setCierrePickerVisibility] = useState(false);
  const [isPicked, setIsPicked] = useState(false);
  const [name, setName] = useState("");
  const [securityChecked, setSecurityChecked] = useState(false);
  const [is24, setIs24] = useState(false);
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
  console.log("days", diasSeleccionados);
  console.log("security", securityChecked);
  console.log("is24", is24);

  const [data, setData] = useState({
    nombre: undefined,
    apellido: undefined,
    dni: undefined,
    email: undefined,
    telefono: undefined,
    nombreComercio: undefined,
    direccion: undefined,
    ciudad: undefined,
    codPostal: undefined,
    emailComercio: undefined,
    telefonoPublico: undefined,
    descripcion: undefined,
    razonSocial: undefined,
    barrio: undefined,
    CUIT: undefined,
    horario: undefined,
  });

  const handleInput = (e, name) => {
    setData({
      ...data,
      [name]: e.nativeEvent.text,
    });
  };

  const registrar = async (data, is24, tipo) => {
    const body = {
      nombre_titular: data.nombre,
      apellido_titular: data.apellido,
      dni_titular: data.dni,
      mail_interno: data.email,
      telefono_interno: data.telefono,
      razon_social: data.razonSocial,
      cuit: data.CUIT,
      nombre_tienda: data.nombreComercio,
      direccion: data.direccion,
      ciudad: data.ciudad,
      cp: data.codPostal,
      mail_publico: data.emailComercio,
      telefono_publico: data.telefonoPublico,
      descripcion: data.descripcion,
      seguridad: securityChecked,
      veinticuatrohs: is24,
      tipo_locker: tipo,
      precio: 654,
      descuento: 20,
      barrio: data.barrio,
      fk_usuario: 1,
      horario: dataTiming,
    };

    try {
      console.log(data);
      const res = await axios.post(
        "https://lockit-backend.herokuapp.com/api/providers/createProvider",
        body
      );
      if (res.status === 201) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
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
    setName(name);
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
    setIsPicked(false);
    setHorario({ apertura: "", cierre: "", day: "" });
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
            onChange={(e) => handleInput(e, "nombre")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Apellido"
            name="apellido"
            onChange={(e) => handleInput(e, "apellido")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            name="email"
            onChange={(e) => handleInput(e, "email")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="DNI"
            name="dni"
            onChange={(e) => handleInput(e, "dni")}
            placeholderTextColor="#adaaaa"
          />

          <Text style={styles.text}>Datos del negocio</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nombre del comercio"
            name="nombreComercio"
            onChange={(e) => handleInput(e, "nombreComercio")}
            placeholderTextColor="#adaaaa"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Mail interno"
            name="email"
            onChange={(e) => handleInput(e, "email")}
            placeholderTextColor="#adaaaa"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Dirección"
            name="calle"
            onChange={(e) => handleInput(e, "calle")}
            placeholderTextColor="#adaaaa"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Ciudad"
            name="ciudad"
            onChange={(e) => handleInput(e, "ciudad")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Código Postal"
            name="codPostal"
            onChange={(e) => handleInput(e, "codPostal")}
            placeholderTextColor="#adaaaa"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Barrio"
            name="barrio"
            onChange={(e) => handleInput(e, "barrio")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email del comercio"
            name="emailComercio"
            onChange={(e) => handleInput(e, "emailComercio")}
            placeholderTextColor="#adaaaa"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Razón Social del comercio"
            name="razonSocial"
            onChange={(e) => handleInput(e, "razonSocial")}
            placeholderTextColor="#adaaaa"
          />

          <PhoneInput
            name="telefono"
            onChange={(e) => handleInput(e, "telefono")}
            style={styles.textInput}
            textProps={{
              placeholder: "Teléfono publico",
              placeholderTextColor: "#adaaaa",
            }}
            flagStyle={{
              width: 35,
              height: 20,
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="CUIT"
            name="CUIT"
            onChange={(e) => handleInput(e, "CUIT")}
            placeholderTextColor="#adaaaa"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Descripción"
            name="descripcion"
            onChange={(e) => handleInput(e, "descripcion")}
            placeholderTextColor="#adaaaa"
          />

          <View style={{ marginTop: 15, marginBottom: 22 }}>
            <Text style={[styles.text, {marginLeft: 120}]}>Elija sus lockers</Text>

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

          <Text style={[styles.text, { marginTop: 20 }]}>Tenes seguridad?</Text>
          <SelectDropdown
            style={styles.selector}
            data={security}
            onSelect={(e) =>
              e === "Si" ? setSecurityChecked(true) : setSecurityChecked(false)
            }
            buttonStyle={styles.selector}
            buttonTextStyle={{ fontSize: 16 }}
            dropdownStyle={{ borderRadius: 10 }}
            name="seguridad"
          />

          <Text style={[styles.text, { marginTop: 38 }]}>Abris las 24 hs?</Text>
          <SelectDropdown
            style={styles.selector}
            data={security}
            buttonStyle={styles.selector}
            buttonTextStyle={{ fontSize: 16 }}
            dropdownStyle={{ borderRadius: 10 }}
            onSelect={(e) => (e === "Si" ? setIs24(true) : setIs24(false))}
            name="24"
          />

          <View style={{ marginTop: 15, alignSelf: "flex-start" }}>
            <Text style={[styles.text, {marginRight: 35}]}>Elija los dias que abre</Text>

            <View style={{marginLeft: 30}}>
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
                      <Icon
                        name="cross"
                        size={30}
                        color="#DF4F1A"
                        onPress={() => setIsPicked(false)}
                      />
                      <View style={{ alignItems: "center", marginLeft: 85 }}>
                        <Text style={styles.textNegro} key={name}>
                          {name}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{ marginTop: 20, marginStart: 2, marginRight: 80 }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          title="Horario apertura"
                          onPress={() => handleOpenAper(name)}
                        />
                        <View style={{ marginLeft: 10 }}>
                          <Text style={styles.textModal}>
                            {horario.apertura}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          title="Horario cierre"
                          onPress={() => handleOpenCierre(name)}
                        />
                        <View style={{ marginLeft: 35 }}>
                          <Text style={styles.textModal}>{horario.cierre}</Text>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      style={{ alignItems: "center", marginTop: 20 }}
                      onPress={() => handleDatatiming(horario)}
                    >
                      <Text style={styles.orangeText}>Confirmar</Text>
                    </TouchableOpacity>

                    {/*<TouchableOpacity style={{ marginTop: 30 }}>
                      <Text style={{ color: "#000000" }}>
                        Agregar Franja horaria
                      </Text>
                    </TouchableOpacity> */}

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

          <TouchableOpacity
            style={styles.orangebutton}
            onPress={() => registrar(data, is24, tipo)}
          >
            <View style={styles.centerText}>
              <Text style={styles.text2}>Registrarme</Text>
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
    fontSize: 20,
    marginBottom: 8,
    marginTop: 25,
    alignSelf: "flex-start",
    marginLeft: 32,
  },
  text2: {
    color: "#ffffff",
    fontSize: 20,
    padding: 10,
  },
  textNegro: {
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
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
  textModal: {
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 6,
  },
  selector: {
    borderWidth: 2,
    padding: 5,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
    marginBottom: 8,
    width: "85%",
  },
});
