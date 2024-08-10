import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const image = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png"

const CartCard = () => {
  return (
	  <View>
		  <Image source={{uri:image}}/>
	  <Text>CartCard</Text>
	</View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});
