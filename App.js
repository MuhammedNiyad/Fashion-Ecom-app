import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = ()=>{
  return(
    <View>
      <Text>
        I am Home Page
      </Text>
    </View>
  )
}
const Explore = ()=>{
  return(
    <View>
      <Text>
        I am Explore Page
      </Text>
    </View>
  )
}
const Hello = ()=>{
  return(
    <View>
      <Text>
        I am Hello Page
      </Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={Home}/>
        <Tab.Screen name="REORDER" component={Explore} />
        <Tab.Screen name="CART" component={Hello}/>
        <Tab.Screen name="ACCOUNT" component={Hello}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
