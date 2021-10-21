import React, {useState, useEffect, createContext} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {TYPES, loginSuccess, logoutSuccess} from '../redux/Action';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Loading from '../Components/Loading';

const ControlStack = props => {
  const isLogin = useSelector(state => state.isLogin);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    setIsLoading(true)
    const value = JSON.parse(await AsyncStorage.getItem('isLogin'));
    console.log('value', value);
    if (value)
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
      });
    setIsLoading(false)
  }, []);
  
  if(isLoading) return <Loading/>

  return (
    <View style={{flex: 1}}>{isLogin ? <MainStack /> : <AuthStack />}</View>
  );
};

export default ControlStack;
