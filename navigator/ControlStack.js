import React, {useState, useEffect, createContext} from 'react';
import { View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import MainStack from './MainStack';


const App = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  console.log(isLogin)

  // useEffect(async () => {
  //   const value = JSON.parse(await AsyncStorage.getItem('isLogin'));
  //   if (value == true) {
  //     dispatch(login())
  //   } else {
  //     dispatch(logout())
  //   }
  // }, [isLogin]);

  return (
      <View style={{flex:1}}>
     {isLogin ?
      <MainStack />
      :
      <AuthStack />} 
      </View>
  );
};

export default App;