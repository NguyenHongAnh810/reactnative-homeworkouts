import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign'

import RemoteCount from '../src/screen/RemoteCount';
import Count from '../src/screen/Count';
import Rate from '../src/screen/Rate';

const Bottom = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: '#3249ed',
        inactiveTintColor: '#7f8087',

        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
        <Tab.Screen
        name="Rate"
        options={{
          title: 'Rate',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="areachart" color={color} size={size} />
          ),
        }}
        component={Rate}
      />
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={RemoteCount}
      />
      <Tab.Screen
        name="Count"
        options={{
          title: 'Count',
          tabBarIcon: ({color, size}) => (
            <Icon name="compass" color={color} size={size} />
          ),
        }}
        component={Count}
      />
      
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default Bottom;


