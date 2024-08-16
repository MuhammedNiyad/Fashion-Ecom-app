import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import CartCard from "../components/CartCard";

const CartScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <CartCard />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f0e2e2",
  },
  headerContainer: {
    marginBottom:20
  }
});
