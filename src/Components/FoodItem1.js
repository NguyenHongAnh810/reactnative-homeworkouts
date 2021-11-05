import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import Reaction from './Reaction';

const {height, wigth} = Dimensions.get('window');

import { User } from '../Screens/Main/Home/Home';

export default function FoodItem1({food, navigation, screen}) {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('FoodDetails', {food: food, screen: screen});
        }}>
        <Image style={styles.image} source={food.image}></Image>
        <View>
        <Text style={styles.textName}>{food.name}</Text>
        <View style={{marginLeft: 11}}>
        <Reaction reaction={food.reaction} />
        <View style={styles.infor}>
          <Image
            style={styles.avata}
            source={{
              uri: User[0].avata,
            }}></Image>
          <View>
            <Text style={styles.names}>{User[0].name}</Text>
          </View>
          </View>
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
