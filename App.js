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
import { CartContext, CartProvider } from "./src/context/CartContext";
import { useContext } from 'react';

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
    <CartProvider>
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
                const {carts} = useContext(CartContext);
                return (
                  <View style={{position:"relative"}}>
                  <MaterialCommunityIcons
                    name={"cart"}
                    size={size}
                    color={color}
                    />
                    <View style={{
                      height:14,
                      width:14,
                      borderRadius:7,
                      backgroundColor:color,
                      position:"absolute",
                      top:-10,
                      right:-5,
                      justifyContent:"center",
                      alignItems:"center",
                    }}>
                      <Text style={{
                        fontSize:10,
                        color:"white",
                        fontWeight:"500",
                        textAlign:"center",
                      }} >{carts.length}</Text>
                    </View>
                    </View>
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
    </CartProvider>
  );
}

const styles = StyleSheet.create({});
