import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";

const categoryData = ["Trending Now", "All", "New", "Men", "Women", "Kids"];
const HomeScreen = () => {
  const [product, setProduct] = useState(data.products);
  const [selectedCateg, setSelectedCateg] = useState(null);
  const insets = useSafeAreaInsets();

  const handleLiked = (item) => {
    const newProduct = product.map((prod) => {
      if (prod.id === item.id) {
        return { ...prod, isLiked:!prod.isLiked}
      }
      return prod;
    })
    setProduct(newProduct);
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header />

      {/* Product  List */}
      <FlatList
        data={product}
        renderItem={({ item, index }) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50}}
        ListHeaderComponent={
          <>
            <Text style={styles.matchTxt}>Match Your Style</Text>
            {/* Input container */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#C0C0C0" />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            {/* category section */}
            <FlatList
              data={categoryData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCateg={selectedCateg}
                  setSelectedCateg={setSelectedCateg}
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: "#f0e2e2",
  },
  matchTxt: {
    fontSize: 28,
    color: "black",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#fff",
    height: 48,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: "black",
  },
  iconContainer: {
    marginHorizontal: 20,
  },
});
