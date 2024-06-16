import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LinkText = ({text, onPress, style}) => {
    const textStyle = [styles.text, style];
    return <View>
        <TouchableOpacity onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    text: {
        // color: '#F7941D',
        color: 'white',
        fontSize: 11
    }
})

export default LinkText;