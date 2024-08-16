import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const image = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png"

const CartCard = () => {
  return (
	  <View style={styles.container} >
		  <Image source={{ uri: image }} style={styles.coverImage} />
		  <View style={styles.cardContainer}>
			  <Text style={styles.title}>Jacket Jeans</Text>
			  <Text style={styles.price}>$37.9</Text>
		  </View>
		  <FontAwesome6 name="trash" color={"#F68CB5"} size={25}/>
	</View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		flexDirection:"row"
	},
	coverImage: {
		height: 125,
		width:"25%"
	},
	cardContainer: {
		flex: 1,
		marginHorizontal:10
	},
	title: {
		fontSize: 18,
		color:"#444444"
	},
	price: {
		color:"#797979"
	}
});
