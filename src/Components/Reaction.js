import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const Reaction = ({reaction}) => {
    return (
        <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.button} onPress={()=>{
                reaction.heart = reaction.heart + 1;
            }}>
                <Icon name="heart" color = 'red' size = {14}></Icon>
                <Text> {reaction.heart.num}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Icon1 name="smile-beam" color = '#EC870E' size = {14}></Icon1>
                <Text> {reaction.haha.num}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Icon1 name="sad-tear" color = '#38044B' size = {14}></Icon1>
                <Text> {reaction.sad.num}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    constrainer: {
        
    },
    button: {
        height: 24 ,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#D7D7D7',
        borderRadius: 15
    },

})
export default Reaction;