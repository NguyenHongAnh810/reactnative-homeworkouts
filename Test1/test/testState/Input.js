import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Input = () => {
    const [count, setCount] = useState(1)
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}> Counter : {count} </Text>

            <TouchableOpacity style={styles.bottom} onPress = {() => {
                setCount(count+1)
                }}>
                <Text style = {{textAlign: 'center',}}>bam vao day</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 50,
        fontFamily: "Cochin",
        backgroundColor: 'pink',
        marginTop: 200,
        margin: 50,
        height: 100,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    bottom: {
        marginTop: 10,
        height:50,
        width:100, 
        backgroundColor:"#008b8b",
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
    }
})

export default  Input