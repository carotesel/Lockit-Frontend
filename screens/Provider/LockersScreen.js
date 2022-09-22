import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";

import { AuthContext } from "../../context/AuthContext";
import { getStore } from "../../services/AdminService";
import { getLockers } from "../../services/AdminService";

const LockersScreen = () => {
  const { infoUser } = useContext(AuthContext);
  const [store, setStore] = useState(null);
  const [lockers, setLockers] = useState(null);

  const getLockersStore = async () => {
    const lock = await getLockers(store);
    setLockers(lock);
  };

  useEffect(() => {
    const getIdStore = async () => {
      const idStore = await getStore(infoUser.idUsuarios);
      setStore(idStore.idTienda);
    };
    getIdStore();
    getLockersStore();

  }, []);

  console.log("storeee", store);
  console.log("lockers", lockers);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text
        style={{
          fontSize: 30,
          marginTop: 47,
          fontWeight: "bold",
          marginRight: "48%",
        }}
      >
        Lockers
      </Text>

      <TextInput
        style={styles.textInput}
        name="Busca por usuario o numero de locker􀌆"
        placeholder="Busca por usuario o numero de locker"
        placeholderTextColor={"rgba(60, 60, 67, 0.6)"}
      />

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {/* {lockers.map((locker) => (
            <View style={styles.locker} key={locker.id}>
              <Text style={styles.text}>{locker.id}</Text>
              <TouchableOpacity
                onPress={() =>
                  alert(
                    locker.available
                      ? "locker disponibleee"
                      : "locker ocupadooo"
                  )
                }
              >
                <Image
                  source={
                    locker.available
                      ? require("../../assets/icons/2.png")
                      : require("../../assets/icons/1.png")
                  }
                  style={styles.lockerImage}
                />
              </TouchableOpacity>
                </View>
          ))}*/}
        </View>
      </ScrollView>
    </View>
  );
};

export default LockersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    height: "120%",
  },
  locker: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
    marginHorizontal: "5%",
    marginBottom: 15,
  },
  lockerImage: {
    width: 70,
    height: 120,
  },
  scroll: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginTop: "5%",
  },
  textInput: {
    width: 350,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    marginTop: "5%",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    paddingLeft: "5%",
    paddingRight: "3%",
    letterSpacing: 0.3,
    textAlign: "left",
    color: "rgba(60, 60, 67, 0.6)",
    marginBottom: 10,
  },
});
