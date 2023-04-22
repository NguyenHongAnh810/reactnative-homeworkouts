import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import Reaction from './Reaction';

const {height, wigth} = Dimensions.get('window');

import { BASE_URL } from '../api/Common';

import { User } from '../Screens/Main/Home/Home';

export default function FoodItem1({food, navigation, screen, type}) {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('FoodDetails', {food: food, screen: screen, type: type});
        }}>
        <Image style={styles.image} source={{uri: BASE_URL + food.image[0]}}></Image>
        <View>
        <Text style={styles.textName}>{food.name}</Text>
        <View style={{marginLeft: 11}}>
        <Text style = {{marginLeft: 5, width: "55%"}}>{food.des}</Text>
        {/* <Reaction reaction={food.reaction} /> */}
        </View> 
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      height: height*0.15,
      width: 360,
      marginVertical: 5,
      borderRadius: 10,
      paddingBottom: 20,
      flexDirection: 'row'
    },
    image: {
      width: '48%',
      height: height * 0.15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textName: {
      margin: 8,
      marginLeft: 16,
      fontSize: 14,
      fontWeight: '700',
    },
    avata: {
      width: 24,
      height: 24,
      borderRadius: 100,
      backgroundColor: '#ccc',
    },
    names: {
      fontWeight: 'bold',
      marginLeft: 10,
      fontSize: 12
    },
    infor: {
      marginVertical: 12,
      alignItems: 'center',
      flexDirection: 'row',
    },
  });
