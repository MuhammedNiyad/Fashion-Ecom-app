import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Fontisto from "react-native-vector-icons/Fontisto";
import Category from "../components/Category";

const categoryData = ["Trending Now", "All", "New", "Men", "Women", "Kids"];
const HomeScreen = () => {
  const [selectedCateg, setSelectedCateg] = useState(null)
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header />
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
        renderItem={({ item }) => (
          <Category item={item}  selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {/* <Category/> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
