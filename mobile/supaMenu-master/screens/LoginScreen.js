import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import LinkText from "../components/LinkText";
import axiosInstance from "../config";
import * as SecureStorage from "expo-secure-store"

const Loginscreen = ({navigation}) => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e);
    }
    const handlePasswordChange = (e) => {
        setPassword(e);
    }

    const handleSubmit = () => {
        axiosInstance.post("/user/login", {email: email, password: password})
            .then(res => {
                console.log("res", res)
                if (res.status == 200) {
                  SecureStorage.setItemAsync("token", res.data.token)
                  navigation.navigate("Scan")
              }
            }).catch(err => {
              console.log("error", err)
         })
    }

    return <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.mainText}>
                Supa<Text style={styles.spanText}>Menu</Text>
            </Text>
            <Text style={styles.welcome}>Welcome...</Text>
            <Text style={styles.grayText}>Sign in to continue</Text>

            <TextInput 
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={handleEmailChange}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
            />

            {/* <CustomButton title="Sign In" onPress={handleSubmit}/> */}
            <CustomButton title="Sign In" onPress={() => handleSubmit()}/>
            <Text style={styles.or}>OR</Text>
            <CustomButton title="Login with Google" onPress={handleSubmit} buttonStyle={styles.googleButton} textStyle={styles.textStyle}/>
            <CustomButton title="Login with facebook" onPress={handleSubmit} buttonStyle={styles.googleButton} textStyle={styles.textStyle}/>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <Text style={styles.register}>
                Don't have account? <Text style={styles.spanText} onPress = {() => navigation.navigate('Signup')}>Register</Text>
                {/* Don'have account? <LinkText text='Register' onPress={() => navigation.navigate('Signup')}/> */}
            </Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7941D'
    },
    subContainer: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: 70,
        borderRadius: 20,
        height: '100%'
    },
    mainText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 95,
        padding: 4
    },
    spanText:{
        color:'#F7941D'
    },
    welcome: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'darkblue',
        marginLeft: 145,
        paddingTop: 15,
        paddingBottom: 6
    },
    grayText: {
        fontSize: 11,
        color:'gray',
        marginLeft: 120,
        marginBottom: 20
    },
    input: {
        width: '90%',
        height: 40,
        fontSize: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 5,
        marginLeft: 20
    },
    or:{
        fontWeight: 'bold',
        fontSize: 12,
        color:'gray',
        marginLeft: 170,
        marginBottom: 10,
        marginTop: 10,
    },
    forgotPassword: {
        fontSize: 11,
        fontWeight: 'bold',
        color:'#F7941D',
        marginLeft: 130,
        marginBottom: 20,
    },
    register:{
        fontSize: 11,
        color:'gray',
        marginLeft: 120,
        marginTop: 10,
        marginBottom: 10,
    },
    googleButton:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F7941D',
    },
    textStyle: {
        color: '#F7941D'
    }
});

export default Loginscreen;