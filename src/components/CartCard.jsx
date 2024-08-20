import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"; // Corrected import
import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const CartCard = ({item, deleteCartItem}) => {  

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circleSizeContainer}>
          <View style={[styles.circle,{backgroundColor: item.color}]} />
          <View style={styles.size}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteCartItem(item)}>
        <FontAwesome6 name="trash" color={"#F68CB5"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  coverImage: {
    height: 125,
    width: "25%",
    borderRadius: 20,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#797979",
    marginVertical: 10,
    fontSize: 18,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    // backgroundColor: "#7094C1",
  },
  circleSizeContainer: {
    flexDirection: "row",
  },
  size: {
    backgroundColor: "white",
    height: 32,
    width: 32,
    borderRadius: 16,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
