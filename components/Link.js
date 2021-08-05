import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

const Link = (props) => {
    return(
        <View>
            <TouchableOpacity style = {styles.button}>
                    <Image
                    style={styles.stretch}
                    source={props.image}
                    />
                    <Text style = {styles.text}>     {props.cmp} with {props.name}</Text>
            </TouchableOpacity>
        </View>
    )
     
}

const styles = StyleSheet.create({
    contrain:{
        flex:1
    },
    button:{
        borderRadius: 5,
        height: 32,
        marginTop: 20,
        backgroundColor: '#f8f8ff',
        flexDirection:'row',
        marginTop: 12
    },
    text:{
        alignSelf: 'center',
        fontSize: 12,
        color: 'black'
    },
    stretch: {
        marginLeft: '25%',
        width: 16,
        height: 16,
        marginTop: 8,
      }
})

export default Link