import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Daily =(props)=> {

    return (
        <View style={{justifyContent: 'center',
        alignItems: 'center'}}>
            <Text>{props.mycount}</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.Text}>+</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.Text}>-</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 150,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        margin: 10
    },
    Text: {
        color: 'white',
        fontSize: 40,
    }
})

export default Daily;