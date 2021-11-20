import React, {useState, useEffect, createContext} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {TYPES} from '../redux/actions/Action';
import {GetMeApi} from '../api/GetMeApi';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Loading from '../Components/Loading';

const ControlStack = props => {
  const isLogin = useSelector(state => state.auth.user.isLogin);
  const dispatch = useDispatch();

  // useEffect(async () => {
  //   const id = JSON.parse(await AsyncStorage.getItem('idUser'));
  //   console.log('idUser', id);
  //   const fetchMe = async () => {
  //     const params = {
  //       id: id,
  //     };
  //     const response = await GetMeApi(params);
  //     console.log(response)
  //     if (id) {
  //       dispatch({
  //         type: TYPES.LOGIN_SUCCESS,
  //         response: response,
  //       });
  //     }
  //   };
  //   fetchMe();
  //   // if (value)
  //   //   dispatch({
  //   //     type: TYPES.LOGIN_SUCCESS,
  //   //     response: response
  //   //   });
  // }, []);

  return (
    <React.Fragment>
      {isLogin ? <MainStack /> : <AuthStack />}
      <Loading />
    </React.Fragment>
  );
};

export default ControlStack;
