import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

import { useDispatch, useSelector } from 'react-redux';

const Reaction = ({reaction, idFood}) => {
    const [heart, setHeart] = useState(reaction?.heart?.num || 0)
    const [haha, setHaha] = useState(reaction?.haha?.num || 0)
    const [sad, setSad] = useState(reaction?.sad?.num || 0)

    const dispatch = useDispatch()
    
    useEffect(() => {
       
    }, [heart, haha, sad])

    return (
        <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.button} onPress={()=>{
                setHeart(heart+1)
            }}>
                <Icon name="heart" color = 'red' size = {10}></Icon>
                <Text style={styles.text}> {heart}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={()=>{
                setHaha(haha+1)
            }}>
                <Icon1 name="smile-beam" color = '#EC870E' size = {10}></Icon1>
                <Text style={styles.text}> {haha}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={()=>{
                setSad(sad+1)
            }}>
                <Icon1 name="sad-tear" color = '#38044B' size = {10}></Icon1>
                <Text style={styles.text}> {sad}</Text>
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