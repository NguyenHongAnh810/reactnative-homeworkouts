import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CustomHeader({navigation}) {
  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={()=>{
          navigation.goBack()
      }}>
        <Ionicons name = {'chevron-back'} size = {36}/>
      </TouchableOpacity>
      <Text style = {styles.title}>Thông tin cá nhân</Text>
      <TouchableOpacity>
      <Ionicons name = {'reload'} size = {28}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '700'
    }
})