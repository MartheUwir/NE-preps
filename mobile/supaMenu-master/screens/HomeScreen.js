import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    
    useEffect(() => {
        //set timeout to navigate to signup page
        const timeout = setTimeout(() => {
            navigation.navigate('Signup');
        }, 1000);
        return () => clearTimeout(timeout)
    }, [])

    return <View style={styles.container}>
        <Text style={styles.mainText}>
            Supa<Text style={styles.spanText}>Menu</Text>
        </Text>
        {/* <Button onPress={() => navigation.navigate('Signup')} title="Signup"/> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',     
        alignItems: 'center',
        backgroundColor: '#F7941D'
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    spanText: {
        color: 'white',
    },
});
export default HomeScreen;