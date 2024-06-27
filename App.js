import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Hello = () => {
  return (
    <View>
      <Text>I am Hello Page</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#E96E6E",
          }}
        >
          <Tab.Screen
            name="HOME"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={"home"} size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Hello}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialIcons name={"reorder"} size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={Hello}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialCommunityIcons
                    name={"cart"}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Hello}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <FontAwesome6 name={"user"} size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
