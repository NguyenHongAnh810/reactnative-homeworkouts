import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';


export default function Count() {
  const counter = useSelector((state) => state.count);
  return (
   <View style={styles.contrainer}>
     <Text style={styles.text}>{counter}</Text>
   </View>
  );
}
const styles = StyleSheet.create({
  contrainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
  }

})
