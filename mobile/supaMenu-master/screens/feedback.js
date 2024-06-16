import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'

const Feedback = () => {
  return (
      <View style={styles.container}>
          
          <Text style={{ color: '#F7941D', width: '50%', textAlign: 'center', fontSize: 18 }}>Yayy! We value all feedback, please rate your experience below: </Text>
          <View style={{marginVertical: 100}}>
              <Image source={require('../assets/stars.png')} resizeMode="cover" />
          </View>
          <Text style={{ color: '#F7941D', width: '50%', textAlign: 'center', fontSize: 18, marginBottom: 60 }}>Thank you for helping us improve our service !</Text>
          <View  style={{display: 'flex', flexDirection: 'row', marginTop: 30}}>
          <Text style={{fontSize: 40, color: COLORS.white}}>Supa</Text>
              <Text style={{color: '#F7941D', fontSize: 40}}>Menu</Text>
              </View>
    </View>
  )
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    }
})