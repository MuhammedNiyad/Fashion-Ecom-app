import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {

	const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header />
		  <Text style={styles.matchTxt}>Match Your Style</Text>
		  <View style={styles.inputContainer}>
			  
		  </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor:"#f0e2e2"
	},
	matchTxt: {
		fontSize: 28,
		color: "black",
		marginTop:25,
	}
});
