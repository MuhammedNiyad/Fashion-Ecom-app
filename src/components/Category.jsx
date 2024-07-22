import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
      <Text style={styles.categoryTxt}>Category</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  categoryTxt: {
    fontSize: 16,
    fontWeight:"600",
    color: "#fff",
    backgroundColor:"#E96E6E",
    padding:20,
    textAlign:"center",
    borderRadius:16,
},
})