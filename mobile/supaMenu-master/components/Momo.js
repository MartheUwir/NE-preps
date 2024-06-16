import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'

const MomoOptions = () => {
    
    const [selectedMomoOption, setSelectedMomoOption] = useState(2)

    const momoOptions = [
        {
            id: 1,
            image: require('../assets/mtn.png'),
            name: 'MTN Mobile Money'
        },

        {
            id: 2,
            image: require('../assets/airtel.png'),
            name: 'Airtel Money'
        },

        {
            id: 3,
            image: require('../assets/cash.png'),
            name: 'Cash'
        }
    ]

    const MomoListItem = ({item}) => {
        return (
        <View style={styles.momoOption}>
            <Image source={item.image} resizeMode="contain" style={{width: '30%', padding:16, marginRight: 20}} />
            <Text style={{ fontSize: 17 }}>{item.name}</Text>
            </View>
        )
    }

  return (
    <View style={{marginTop: 25, marginBottom: 0, marginHorizontal: 20, width: '91%', height: '47%'}}>
              <FlatList
                  data={momoOptions}
                  renderItem={({item}) => <MomoListItem item={item} />}
                  keyExtractor={item => item.id}
                  style={{width: '100%', height: '100%'}}
              />
          </View>
  )
}

const styles = StyleSheet.create({
    momoOption: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        padding: 20, //use padding for height
        width: '100%',
        // marginBottom: 20,
        // backgroundColor: '#ffffff'
    }
})

export default MomoOptions