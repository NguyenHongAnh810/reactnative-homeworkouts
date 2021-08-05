import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
 
import Home from './../src/screen/Main/Home';
import Classic from './../src/screen/Main/Classic';
import Daily from './../src/screen/Main/Daily';
import Discover from './../src/screen/Main/Discover';
import Me from './../src/screen/Main/Me';
import Personal from './../src/screen/Main/Personal';

const NavigationBottom = () => {
    const Tab = createBottomTabNavigator();
 
    return (
 
 
        <Tab.Navigator initialRouteName="HomeTab"
            tabBarOptions={{
                activeTintColor: '#3249ed',
                inactiveTintColor: '#7f8087',
 
                style: {
                    backgroundColor: "#fff",
                    borderTopColor: 'rgba(225,225,225,0.2)'
                },
 
            }}>
            <Tab.Screen name="Home" options={{
                title: "Classic",
                tabBarIcon: ({ color, size }) => (
 
                    <Icon name="time" color={color} size={size} />
                ),
            }} component={Home} />
            <Tab.Screen name="Discover" options={{
                title: "Discover",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="compass" color={color} size={size} />
                ),
 
            }} component={Discover} />
            <Tab.Screen name="Personal" options={{
                title: 'Personal',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-document-text" color={color} size={size} />
                   
                ),
            }} component={Personal} />
            <Tab.Screen name="Daily" options={{
                title: "Daily",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="calendar" color={color} size={size} />
                ),
            }} component={Daily} />
            <Tab.Screen name="Me" options={{
                title: "Me",
                tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={size} />
                ),
            }} component={Me} />
        </Tab.Navigator>
 
 
    )
}
const styles = StyleSheet.create({
})
 
export default NavigationBottom;
