import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import Reaction from './Reaction';
import { BASE_URL } from '../api/Common';

const {height, wigth} = Dimensions.get('window');

export default function FoodItem({food, navigation, screen}) {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('FoodDetails', {food: food, screen: screen});
        }}>
        <Image style={styles.image} source={{uri: BASE_URL + food.image[0]}}></Image>
        <View>
        <Text style={styles.textName}>{food.name}</Text>
        <View style={{marginLeft: 11}}>
        <Reaction reaction={food.reaction} />
        </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      height: height*0.15,
      width: 360,
      // justifyContent: 'center',
      // backgroundColor: 'white',
      // backgroundColor: 'green',
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
  });
