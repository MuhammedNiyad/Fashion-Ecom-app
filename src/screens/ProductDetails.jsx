import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png"

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{ uri: imageUrl }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Winter coat</Text>
        <Text style={[styles.title,styles.price]}>$99.5</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f0e2e2",
  },
  headerContainer: {
    padding: 20,
    paddingTop:40,
  },
  coverImage: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  title: {
    fontSize: 20,
    color: "#44444",
    fontWeight:500,
  },
  price: {
    
  }

});
