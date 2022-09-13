import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CliBusquedaScreen from '../../screens/Client/CliBusquedaScreen';
import CliDetalleScreen from '../../screens/Client/CliDetalleScreen';

const ReservaStackScreen = () => {

    const ReservaStack = createNativeStackNavigator();

  return (
    <ReservaStack.Navigator>
        <ReservaStack.Screen name="Busqueda" component={CliBusquedaScreen} options={{
              headerShown: false,
            }}/>

        <ReservaStack.Screen name="Detalle" component={CliDetalleScreen} />
    </ReservaStack.Navigator>
  );
}

export default ReservaStackScreen