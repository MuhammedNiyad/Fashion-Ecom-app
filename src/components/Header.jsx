import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image
          source={require("../../assets/appIcon.png")}
          style={styles.appIcon}
        />
      </View>
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
    backgroundColor: "#fffff",
    height: 44,
    width: 44,
    borderRadius: "22px",
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
});

export default Header;
