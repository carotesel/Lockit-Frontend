import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
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
import { FlatList } from "react-native-gesture-handler";

import { FlatGrid } from "react-native-super-grid";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const LockersScreen = () => {
  const lockers = [
    { id: 1, available: true },
    { id: 2, available: false },
    { id: 3, available: true },
    { id: 4, available: false },
    { id: 5, available: true },
    { id: 6, available: false },
    { id: 7, available: true },
    { id: 8, available: false },
    { id: 9, available: true },
    { id: 10, available: false },
    { id: 11, available: true },
    { id: 12, available: false },
    { id: 13, available: true },
    { id: 14, available: false },
    { id: 15, available: true },
    { id: 16, available: false },
    { id: 17, available: true },
    { id: 18, available: false },
    { id: 19, available: true },
    { id: 20, available: false },
    { id: 21, available: true },
    { id: 22, available: false },
    { id: 23, available: true },
    { id: 24, available: false },
  ];

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
          {lockers.map((locker) => (
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
          ))}
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
