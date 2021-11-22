import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LoginNode = ({nameNode, isValid, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: isValid ? '#EC7E5D' : '#CECCCD',
          height: 34,
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginHorizontal: 10
        }}
          onPress = {
            ()=>onPress && onPress()
        }
          >
        <Text style={{
          // color: '#9E9E9E'
          color: '#555555',
          fontWeight: '700',
          fontSize: 16
        
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
