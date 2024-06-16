import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Category = ({ category, navigation }) => {
  const handleCategoryPress = () => {
        navigation.navigate('Category', {categoryId: category._id});
    }

  return (
    <TouchableOpacity onPress={() => handleCategoryPress()} style={styles.menuItem}>
          <Text style={styles.itemText}>{category.generalName}</Text>
            <Ionicons name="chevron-forward-outline" size={20} style={{color: 'white', paddingRight: 30}}/>
        </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    menuItem:{
        color: 'white',
        fontSize: 20,
        padding: 13,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
  },
  
  itemText: {
    paddingLeft: 50,
    fontSize: 17,
    color: 'white'
}
})