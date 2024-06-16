import React from "react";
import { StyleSheet } from "react-native";
import {View, Image, Text} from 'react-native';

const RestaurantItem = ({restaurant, navigation}) => {
    return(
    <View style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.coverImage }} style={styles.restaurantImage}/>
        <Text style={styles.textContainer}>
            <Text style={styles.restaurantTitle} onPress = {() => navigation.navigate('MenuOrdered',{restaurantId: restaurant._id})}>{restaurant.name}</Text>{"\n"}
            <Text style={styles.restaurantDescription}>{restaurant.description}</Text>
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    restaurantContainer: {
        marginBottom: 16,
        height: 64,
        backgroundColor: '#E5E5EA',
        display: "flex",
        flexDirection: 'row',
        borderRadius: 16,
        padding: 7
    },
    textContainer: {
        // backgroundColor: 'yellow',
        marginLeft: 7,
        padding: 5,
        // display: "flex",
        // flexDirection: 'column-reverse'
    },
    restaurantImage: {
        width: 50,
        height: 50,
        borderRadius: 11
    },
    restaurantTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    restaurantDescription: {
        fontSize: 12,
    },
})

export default RestaurantItem;