import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext,useState } from "react";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";

const sizes = ["S", "M", "L", "XL",];
const colors = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];

const ProductDetails = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const itemData = useRoute().params.item;
  
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate("CART");
    }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Image source={{ uri: itemData.image }} style={styles.coverImage} />
      {/* Content Container */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{itemData.title}</Text>
        <Text style={[styles.title, styles.price]}>${itemData.price}</Text>
      </View>
      {/* size container */}
      <Text style={[styles.title, styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size, ind) => (
          <TouchableOpacity
            key={ind}
            style={styles.sizeValueContainre}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeValue,
                selectedSize === size && { color: "#E55B5B" },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={[styles.title, styles.colorText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, ind) => {
          return (
            <TouchableOpacity style={[styles.circleBorder, color === selectedColor&&{borderColor:color, borderWidth:2}]} key={ind} onPress={()=>setSelectedColor(color)}>
              <View style={[styles.circle, { backgroundColor: color }]} />
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Button container */}
      <TouchableOpacity style={styles.button} onPress={()=>handleAddToCart(itemData)}>
        <Text style={styles.buttonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>
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
  sizeContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  sizeValueContainre: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colorText: {
    marginHorizontal: 20,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop:5
  },
  circle: {
    height: 34,
    width: 34,
    borderRadius: 18,
  },
  circleBorder: {
    height: 44,
    width: 44,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#E96E6E",
    padding: 10,
    margin: 10,
    marginVertical:20,
    borderRadius:20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    textAlign:"center"
  }
});
