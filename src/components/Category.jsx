import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({item, selectedCateg, setSelectedCateg}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCateg(item)}>
      <Text
        style={[
          styles.categoryTxt,
          selectedCateg === item && {
            color: "#FFFFFF",
            backgroundColor: "#E96E6E",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}

export default Category

const styles = StyleSheet.create({
  categoryTxt: {
    fontSize: 16,
    fontWeight: "600",
    // color: "#fff",
    color: "#938F8F",
    // backgroundColor:"#E96E6E",
    backgroundColor: "#DFDCDC",
    textAlign: "center",
    borderRadius: 16,
    // marginHorizontal: 10,
    marginRight:10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});