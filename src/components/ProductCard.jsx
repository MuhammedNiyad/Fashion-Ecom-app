import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductCard = () => {
	//   const [isLiked, setIsLiked] = useState(false);
	let isLiked = true
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/fashion-app-img-1.jpg")}
        style={styles.coverImg}
      />
      <View
        style={{ width: "100%", alignItems: "flex-start", paddingLeft: 20 }}
      >
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.7</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={()=>isLiked = false}>
        <AntDesign
          name={isLiked ? "heart" : "hearto"}
          size={20}
          color={"#E55B5B"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    position: "relative",
  },
  coverImg: {
    height: 256,
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    color: "#9c9c9c",
    fontWeight: "600",
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    //   padding: 10,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 17,
  },
});
