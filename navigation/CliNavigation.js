import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/MaterialIcons";

// screens
import ProfileScreen from "../screens/ProfileScreen";
import CliBusquedaScreen from "../screens/Client/CliBusquedaScreen"; 
import CliLockersScreen from "../screens/Client/CliLockersScreen";

// stacks 
import ReservaStackScreen from "../stacks/Client/ReservaStackScreen";
import LockersStackScreen from "../stacks/LockersStackScreen";


const CliNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: "#DF4F1A",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Search"
        component={ReservaStackScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          tabBarIcon: ({ color }) => (
            <Icon
              name="ios-search-sharp"
              size={42}
              color={color}
              style={{ marginTop: 8 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Lockers"
        component={LockersStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon2
              name="locker"
              size={42}
              color={color}
              style={{ marginTop: 10 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon3
              name="person-outline"
              size={45}
              color={color}
              style={{ marginTop: 8 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CliNavigation;
