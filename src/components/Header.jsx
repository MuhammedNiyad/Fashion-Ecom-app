import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Iconicons from "react-native-vector-icons/Ionicons";

const Header = ({ isCart }) => {
  const navigate = useNavigation().navigate
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        {isCart ? (
          <TouchableOpacity onPress={() => navigate("HOME STACK")}>
            <Iconicons name="chevron-back" color={"#E96E6E"} size={24} />
          </TouchableOpacity>
        ) : (
          <Image
            source={require("../../assets/appIcon.png")}
            style={styles.appIcon}
          />
        )}
      </View>
      {isCart && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>My Cart</Text>
        </View>
      )}

      <View>
        <Image source={require("../../assets/dp.png")} style={styles.dp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appIconContainer: {
    backgroundColor: "#fff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  appIcon: {
    width: 28,
    height: 28,
  },
  dp: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  textContainer: {},
  text: {
    fontSize: 28,
    color:"black",
  },
});

export default Header;
