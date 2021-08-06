
import React from 'react';

import store from './src/Redux/store'
import { Provider } from 'react-redux'
import Bottom from './navigator/Stack';

import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return(
    <Provider store ={store}>
       <NavigationContainer>
          <StatusBar hidden= {true}/>
          <Bottom/>
      </NavigationContainer>
    </Provider>
    )
}

export default App
