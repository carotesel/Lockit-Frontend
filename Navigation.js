import react from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

// screens
import ProfileScreen from "./screens/ProfileScreen";
import IndexStackScreen from "./stacks/IndexStackScreen";
import LockersScreen from "./screens/LockersScreen";

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#DF4F1A",
          headerShown: false,
        }}
      >
        
        <Tab.Screen
          name="Home"
          component={IndexStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Lockers"
          component={LockersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="locker" size={35} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default Navigation;
