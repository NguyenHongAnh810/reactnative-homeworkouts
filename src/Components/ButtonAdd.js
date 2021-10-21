import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonAdd = ({nameNode, isValid, onPress, border, marginEnd}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
        borderWidth: border? 0.4 : 0,
          height: 30,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          marginHorizontal: 10,
          marginEnd: marginEnd? marginEnd : 0 
        }}
          onPress = {
            ()=>onPress && onPress()
        }
          >
            {isValid ? 
        <Text style={{
        //   color: 'red'
          color: 'red'
      }}>{nameNode}</Text>
      : <View/>
    }
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

export default ButtonAdd;