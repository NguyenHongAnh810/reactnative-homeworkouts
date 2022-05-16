import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/Main/Home/Home';
import Search from '../Screens/Main/Search/Search';
import AddCookRecipe from '../Screens/Main/AddCookRecipe/AddCookRecipe';
import Me from '../Screens/Main/Me/Me';
import Chat from '../Screens/Main/Chat/Chat';

const Tab = createBottomTabNavigator();

const MainButtonTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EC7E5D',
        tabBarInactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon2 name="house" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="magnifying-glass" color={color} size={size} />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="squared-plus" color={color} size={size} />
          ),
        }}
        component={AddCookRecipe}
      />
      <Tab.Screen
        name="Me"
        options={{
          title: 'Me',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
        component={Me}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default MainButtonTabStack;
