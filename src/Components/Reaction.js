import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const Reaction = ({reaction}) => {
    return (
        <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.button} onPress={()=>{
                // reaction?.heart?.num = reaction?.heart?.num + 1;
            }}>
                <Icon name="heart" color = 'red' size = {10}></Icon>
                <Text style={styles.text}> {reaction?.heart?.num}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Icon1 name="smile-beam" color = '#EC870E' size = {10}></Icon1>
                <Text style={styles.text}> {reaction?.haha?.num}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Icon1 name="sad-tear" color = '#38044B' size = {10}></Icon1>
                <Text style={styles.text}> {reaction?.sad?.num}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    constrainer: {
        
    },
    button: {
        height: 20 ,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: '#D7D7D7',
        borderRadius: 15
    },
    text: {
        fontSize: 12
    }

})
export default Reaction;