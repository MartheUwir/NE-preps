import React, {useState} from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const DrinkItem = ({ drink, onUpdateTotal }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAddDrink = () => {
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity);
        onUpdateTotal(drink.price, updatedQuantity);
    };

    const handleRemoveDrink = () => {
        if(quantity > 0) {
            const updatedQuantity = quantity - 1;
            setQuantity(updatedQuantity);
            onUpdateTotal(-drink.price, updatedQuantity);
        }
    };  

    return(
        <View style={styles.drinkContainer}>
            <Image source={{ uri: drink.optionCoverImage }} style={styles.drinkImage}/>
            <Text style={styles.textContainer}>
                <Text style={{fontSize: 13, fontWeight: 'bold', width: '90%'}}>{drink.name}</Text>{"\n"}
                <Text style={{fontSize: 10}}>{drink.description}</Text>{"\n"}
                <View style={{width: '100%' ,display:'flex', flexDirection: 'row'}}>
                    <View style={{paddingRight: 110}}>
                        <Text style={{color:'#F7941D', fontWeight: 'bold'}}>Frw {drink.price}</Text>
                    </View>
                    <View style={styles.counter}>
                        <TouchableOpacity onPress={handleRemoveDrink}>
                            <Text >-</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#F7941D'}}>{drink.quantity}</Text>
                        <TouchableOpacity onPress={handleAddDrink}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    drinkContainer: {
        backgroundColor: '#F8F8FB',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 5,
        width: '90%',
        marginLeft: 20,
        alignItems: 'center',
        marginBottom: 15
    },
    drinkImage: {
        width: 50,
        height: 50,
        borderRadius: 11,
    },
    textContainer: {
        marginLeft: 10,
        width: '80%',
    },
    counter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: 50,
        height: 20,
        borderRadius: 5,
        // paddingHorizontal: 10,
    }
})

export default DrinkItem;