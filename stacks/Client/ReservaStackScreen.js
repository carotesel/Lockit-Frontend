import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CliBusquedaScreen from "../../screens/Client/CliBusquedaScreen";
import CliDetalleScreen from "../../screens/Client/CliDetalleScreen";
import CliReservaScreen from "../../screens/Client/CliReservaScreen";
import CliConfirmadoScreen from "../../screens/Client/CliConfirmadoScreen";

const ReservaStackScreen = () => {
  const ReservaStack = createNativeStackNavigator();

  return (
    <ReservaStack.Navigator>
      <ReservaStack.Screen
        name="Busqueda"
        component={CliBusquedaScreen}
        options={{
          headerShown: false,
        }}
      />

      <ReservaStack.Screen
        name="Detalle"
        component={CliDetalleScreen}
        options={{ headerTitle: "", headerBackTitleVisible: false }}
      />

      <ReservaStack.Screen
        name="Reserva"
        component={CliReservaScreen}
        options={{ headerTitle: "" }}
      />

      <ReservaStack.Screen
        name="Confirmado"
        component={CliConfirmadoScreen}
        options={{ headerTitle: "" }}
      />
    </ReservaStack.Navigator>
  );
};

export default ReservaStackScreen;
