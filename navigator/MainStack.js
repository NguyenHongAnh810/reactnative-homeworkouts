import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screen/Main/Home';
import Login from '../src/screen/Auth/Login'
import NavigationBottom from '../components/ButtonTab';

const Stack = createStackNavigator();
export default function index() {
    return (
      <NavigationContainer>
          <StatusBar hidden= {true}/>
        <NavigationBottom/>
      </NavigationContainer>
    )
}