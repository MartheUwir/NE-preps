import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Category from "../components/Category";
import axiosInstance from "../config";

const MenuOrderedScreen = ({ navigation }) => {
    const restaurantId = navigation.getParam('restaurantId')
    const [categories, setCategories] = useState([])

    axiosInstance.get(`/resto/${restaurantId}`)
        .then(res => {
            setCategories(res.data.products)
        }).catch(err => {
          console.log("err", err)
      })

    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
        <Text style={{color: '#F7941D', textAlign:'center', marginTop: 50, fontSize: 18, fontWeight: 'bold'}}>Choose Kigali</Text>
        <View style={styles.topNav}>
            <TouchableOpacity style={{paddingRight: 30}}>
                <Image source={require('../assets/orderIcon.png')}/> 
                <Text style={{color: 'white'}}>N8</Text>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Ordered</Text>
            </TouchableOpacity>


            <View style={{width: 1, height: 70, backgroundColor: '#F7941D'}}>
            <TouchableOpacity style={{paddingLeft: 30}}>
                <Image source={require('../assets/waiterIcon.png')}/>
                <Text style={{color: 'white', fontSize: 15}}>Call waiter</Text>
            </TouchableOpacity>
                </View>
                
                </View>
        <Text style={styles.menuHeader}>Menu</Text>
        {/* List of menu categories */}
        <FlatList
            ShowVerticalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item._id}
                renderItem={({ item }) => <Category category={item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35
    },
    menuHeader: {
        color: '#F7941D',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 40,
        paddingBottom: 20
    },
  

})

export default MenuOrderedScreen;