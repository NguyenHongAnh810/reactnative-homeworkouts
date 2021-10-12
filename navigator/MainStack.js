import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainButtonTabStack from './MainButtonTabStack';
import FoodDetails from '../src/Screens/Main/Home/FoodDetails';
import Login from '../src/Screens/Auth/Login'

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeTabs" component={MainButtonTabStack} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
