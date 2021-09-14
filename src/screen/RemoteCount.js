import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {decrease, increase} from '../Redux/action'

const RemoteCount = props => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 60, marginVertical: 150}}>{counter}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}
          onPress={()=>dispatch(decrease())}
          >
            <Text style={styles.Text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
           onPress={()=>dispatch(increase())}
          >
            <Text style={styles.Text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default RemoteCount;

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 150,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    margin: 10,
  },
  Text: {
    color: 'white',
    fontSize: 40,
  },
});



