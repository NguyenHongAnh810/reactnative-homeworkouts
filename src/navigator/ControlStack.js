import React, {useState, useEffect, createContext} from 'react';
import {View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {TYPES} from '../redux/actions/Action';
import {GetMeApi} from '../api/GetMeApi';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Loading from '../Components/Loading';

import {useSelector, useDispatch} from 'react-redux';

const ControlStack = props => {
  const isLogin = useSelector(state => state.auth.user.isLogin);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch({
      type: TYPES.LOADING
    })
    const id = JSON.parse(await AsyncStorage.getItem('idUser'));
    const fetchMe = async () => {
      const params = {
        id: id,
      };
      const response = await GetMeApi(params);
      if (id) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          response: response[0],
        });
      }
    };
    fetchMe();
    dispatch({
      type: TYPES.LOADED
    })
  }, []);

  return (
    <React.Fragment>
      {isLogin ? <MainStack /> : <AuthStack />}
      <Loading />
    </React.Fragment>
  );
};

export default ControlStack;
