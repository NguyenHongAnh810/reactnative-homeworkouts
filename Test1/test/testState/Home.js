import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from './Input'
const Home = () => {
    return (
        <View >
            <Text style = {styles.tille}>homepage</Text>
            <Input/>
        </View>
    )
}

const styles = StyleSheet.create({
    tille: {
        backgroundColor: 'green',
        fontSize: 50,
        fontFamily: "Cochin",
        justifyContent: 'center',
        textAlign: 'center',
        margin: 20,
    },
})
export default Home;