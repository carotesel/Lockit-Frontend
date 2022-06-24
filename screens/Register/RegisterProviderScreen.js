import {
  View,
  ScrollView,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,Button,

} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  const [tipo, setTipo] = useState([]);
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [isAperPickerVisible, setAperPickerVisibility] = useState(false);
  const [isCierrePickerVisible, setCierrePickerVisibility] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [aper, setAper] = useState("");
  const [cierre, setCierre] = useState("");
  const [isVisible, setIsVisible] = useState(false);


  const[dataTiming, setDataTiming]  = useState({
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
    navigation.reset({
      index: 0,
      routes: [{ name: "Nav" }],
    });
    console.log(data);
  };


  const showAperPicker = () => {
    setAperPickerVisibility(true);
    setCierrePickerVisibility(false);
  };

  const showCierrePicker = () => {
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
    console.warn("APER - A date has been picked: ", time.getHours(), time.getMinutes());
    setAper(time.getHours() + ":" + time.getMinutes());
    hideAperPicker();
  };

  const handleConfirmCierre = (time) => {
    console.warn("CIERRE - A date has been picked: ", time.getHours(), time.getMinutes());
    setCierre(time.getHours() + ":" + time.getMinutes());
    hideCierrePicker();
  };

  const handleCheck = ( name, e) => {
    console.log(name, e);
    
    if (dataTiming[name] === undefined) {
      setDataTiming({
        ...dataTiming,
        [name]: [],
      });
    } else {
      setDataTiming({
        ...dataTiming,
        [name]: undefined,
      });
}    
  };
// [name]: [],
  const navigation = useNavigation();

  return (
    <>
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../Register/images/LOGO.png")}
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
                textStyle={{ fontSize: 15, color: "#DF4F1A", textDecorationLine: "none", }}
              >
              </BouncyCheckbox>
            ))}
            </>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.text}>Elija los dias que abre</Text>

          {dias.map((dia) => (
            <BouncyCheckbox
              size={25}
              fillColor="#DF4F1A"
              unfillColor="#FFFFFF"
              name={dia}
              text={dia}
              onPress={() => {
                if (diasSeleccionados.includes(dia)) {
                  setDiasSeleccionados(
                    diasSeleccionados.filter((d) => d !== dia)
                  );
                } else {
                  setDiasSeleccionados([...diasSeleccionados, dia]);
                }
                setIsChecked(!isChecked);
                handleCheck(dia);
                console.log(dataTiming);
                setIsVisible(true);

              }}
              key={dia}
              iconStyle={{
                borderColor: "#DF4F1A",
                borderWidth: 1,
                borderRadius: 5,
                padding: 5,
                margin: 5,
                marginTop: 10,
                marginBottom: 10,
              }}
              textStyle={{
                textDecorationLine: "none",
                color: "white",
              }}
            />
          ))}
        </View>


      
        {diasSeleccionados.map((dia) => (
        <View style={{ marginTop: 15 }} key={dia}>
          <View style={{flexDirection: "row", justifyContent: 'space-between'}}> 
          <Text style={styles.text} key={dia}>{dia}</Text>
          <Text style={styles.text}>Franja Horaria</Text>
          </View>
          <Button title="Apertura" onPress={showAperPicker} />
          <Button title="Cierre" onPress={showCierrePicker} />
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
         ))}
        
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

const styles = StyleSheet.create({
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
    fontSize: 15,
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
  selector: {
    padding: 10,
    width: "32%",
    borderRadius: 8,
    marginTop: 8,
  },
  image: {
    marginTop: 40,
  },
});
