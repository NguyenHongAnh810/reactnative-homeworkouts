import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {useSelector, useDispatch} from 'react-redux';

import {logout, login} from '../../redux/Action'

const Me = ({navigation}) => {
    const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

    return (
        <View>
            <Text>Me</Text>
            <TouchableOpacity onPress = {()=>{
                 dispatch(logout())
                 navigation.navigate({name: 'Login'})
                 console.log(isLogin, "logout")
            }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Me
