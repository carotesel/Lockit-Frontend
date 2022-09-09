import react from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';




// screens
import ProfileScreen from "../screens/ProfileScreen";
import MoneyScreen from "../screens/Provider/MoneyScreen";
import LockersScreen from "../screens/Provider/LockersScreen";

// icons:

const ProvNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName="Money"
        screenOptions={{
          tabBarActiveTintColor: "#DF4F1A",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        
        <Tab.Screen
          name="Money"
          component={MoneyScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="money" size={42} color={color} style={{marginTop: 8}}/>
              ),
          }}
        />

        <Tab.Screen
          name="Lockers"
          component={LockersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="shield-lock" size={38} color={color} style={{marginTop: 10}} />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon3 name="storefront-outline" size={45} color={color} style={{marginTop: 8}} />
                        ),
          }}
        />
      </Tab.Navigator>
  );
};

export default ProvNavigation;
