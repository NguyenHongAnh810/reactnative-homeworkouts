import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'

import Reaction from './Reaction';
import FoodDetails from '../Screens/Main/Home/FoodDetails';

const {height, wigth} = Dimensions.get('window');

const FoodHome = ({ food, navigation}) => {
    return (
        <View style ={styles.constrainer}>
            <TouchableOpacity style = {styles.button} onPress = {()=>{
                navigation.navigate('FoodDetails',{food: food});
            }}>
                <Image style={styles.image} source = {food.image} ></Image>
                <Text style ={styles.textName}>{food.name}</Text>
                <Reaction reaction = {food.reaction} style = {{margin: 10}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    constrainer: {
        // flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    button: {
        height: height*0.3 ,
        width: 200,
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
        marginVertical: 20
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    textName: {
        margin: 8,
        fontSize: 20,
        fontWeight: '500',
    }

})

export default FoodHome;
