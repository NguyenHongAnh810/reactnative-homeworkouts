import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import {useDispatch} from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {TYPES} from '../../../redux/Action';

export default function Infor({navigation}) {
  const dispatch = useDispatch()
    return (
        <View>
          <TouchableOpacity
          style={styles.logout}
          onPress={async () => {
            dispatch({
              type: TYPES.LOGOUT_SUCCESS,
            });
            await AsyncStorage.setItem('isLogin', JSON.stringify(false));
          }}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            navigation.navigate('Me')
          }}>
          <Text style={{}}>Back</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logout: {
      height: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    textLogout: {
      color: 'red',
    },
  });



  
