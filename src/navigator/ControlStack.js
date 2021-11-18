import React, {useState, useEffect, createContext} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {TYPES} from '../redux/actions/Action';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Loading from '../Components/Loading';

const ControlStack = props => {
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    const value = JSON.parse(await AsyncStorage.getItem('isLogin'));
    if (value)
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
      });
  }, []);

  return (
    <React.Fragment>
      {isLogin ? <MainStack /> : <AuthStack />}
      <Loading />
    </React.Fragment>
  );
};

export default ControlStack;
