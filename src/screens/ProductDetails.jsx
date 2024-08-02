import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";

const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDetails = () => {
    const [selectedSize,setSelectedSize] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      {/* Content Container */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Winter coat</Text>
        <Text style={[styles.title, styles.price]}>$99.5</Text>
      </View>
      {/* size container */}
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size,ind) => (
          <TouchableOpacity key={ind} style={styles.sizeValueContainre} onPress={()=>setSelectedSize(size)}>
            <Text style={[styles.sizeValue,selectedSize === size && {color:"#E55B5B"}]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e2e2",
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
  },
  coverImage: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4D4C4C",
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer:{
    marginVertical:20,
    marginHorizontal: 20,
    flexDirection:"row",
  },
  sizeValueContainre:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:10,
  },
  sizeValue:{
    fontSize:18,
    fontWeight:"600",
  }
});
