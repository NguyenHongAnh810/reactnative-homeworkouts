import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LoginNode = ({navigation, nameNode, isValid, isDone, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: isValid ? '#EC7E5D' : '#CECCCD',
          height: 30,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}
        // onPress={
          // navigation.navigate({name: 'Launch'});
          // (e)=>{onPress} && onPress()}
          onPress = {
            (e)=>onPress && onPress()
        }
          >
        <Text style={{
          // color: '#9E9E9E'
          color: '#363636'
      }}>{nameNode}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    height: 50,
    width: 100,
    // backgroundColor: 'pink',
  },
});

export default LoginNode;
