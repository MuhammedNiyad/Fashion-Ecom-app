import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./src/screens/ProductDetails";
import CartScreen from "./src/screens/CartScreen";

const Hello = () => {
  return (
    <View>
      <Text>I am Hello Page</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () =>{
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HOME"
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
    </Stack.Navigator>
  );
}


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
          initialRouteName="CART"
        >
          <Tab.Screen
            name="HOME STACK"
            component={MyHomeStack}
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
            component={CartScreen}
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
