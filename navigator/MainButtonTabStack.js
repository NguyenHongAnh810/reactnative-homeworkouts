import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import Home from '../src/Screens/Main/Home/Home.js';
import Search from '../src/Screens/Main/Search';
import AddCookRecipe from '../src/Screens/Main/AddCookRecipe';
import Me from '../src/Screens/Main/Me';
import Chat from '../src/Screens/Main/Chat';

const Tab = createBottomTabNavigator();

const MainButtonTabStack = () => {

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      // tabBarOptions={{
      //     activeTintColor: '#3249ed',
      //     inactiveTintColor: '#7f8087',

      //     style: {
      //         backgroundColor: "#fff",
      //         borderTopColor: 'rgba(225,225,225,0.2)'
      //     },

      // }}
      screenOptions={{
        activeTintColor: '#3249ed',
        inactiveTintColor: '#7f8087',
        headerShown: false,

        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          // title: "Classic",
          tabBarIcon: ({color, size}) => (
            <Icon2 name="house" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Search"
        options={{
          // title: "Search",
          tabBarIcon: ({color, size}) => (
            <Icon1 name="magnifying-glass" color={color} size={size} />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Add"
        options={{
          // title: 'Add',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="squared-plus" color={color} size={size} />
          ),
        }}
        component={AddCookRecipe}
      />
      <Tab.Screen
        name="Chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="message" color={color} size={size} />
          ),
        }}
        component={Chat}
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
