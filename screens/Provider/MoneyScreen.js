import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MoneyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{
                      fontSize: 30,
                      textAlign: "center",
                     marginTop: "20%"
                 }}>
    MoneyScreen</Text>
      </View>
  );
};

export default MoneyScreen;

const styles = StyleSheet.create({

});
