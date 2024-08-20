import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useContext} from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const insets = useSafeAreaInsets();

  const {carts, totalPrice, deleteCartItem} = useContext(CartContext);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList 
        data={carts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartCard item={item} deleteCartItem={deleteCartItem} />}
        ListFooterComponent={
          <>
          <View style={styles.priceContainer}>
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Total:</Text>
              <Text style={styles.text}>${totalPrice}</Text>
            </View>
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Shipping:</Text>
              <Text style={styles.text}>$0.0</Text>
            </View>
          </View>
          <View style={styles.divider} />
      <View style={styles.priceAndTitle}>
        <Text style={styles.text}>Grand Total:</Text>
        <Text style={[styles.text, { color: "black", fontWeight: "700" }]}>${totalPrice}</Text>
      </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f0e2e2",
    flex: 1, // Added flex to ensure it takes up the full space
  },
  headerContainer: {
    marginBottom: 20,
  },
  priceContainer: {
    marginTop: 40,
  },
  priceAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: "#757575",
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
  },
  checkoutContainer: {
    backgroundColor: "#E96E6E", // Changed to a visible color
    marginVertical: 10, // Increased margin for visibility
    width: "100%",
    borderRadius: 10,
    alignItems: "center", // Centered content
    paddingVertical: 15, // Added vertical padding for better touch area
  },
  buttonText: {
    fontSize: 20, // Adjusted size for better visibility
    color: "white",
    textAlign: "center",
    fontWeight:"700"
  },
});
