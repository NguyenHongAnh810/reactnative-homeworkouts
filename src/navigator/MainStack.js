import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainButtonTabStack from './MainButtonTabStack';
import FoodDetails from '../Screens/Main/Home/FoodDetails';
import Infor from '../Screens/Main/Me/Infor'
import EditProfileScreen from '../Screens/Main/Me/EditProfileScreen';
import ProfileScreen from '../Screens/Main/Home/ProfileScreen';
import AddCookSuccess from '../Screens/Main/AddCookRecipe/AddCookSuccess';
import MyFood from '../Screens/Main/Me/MyFood';
import FoodSave from '../Screens/Main/Me/FoodSave';

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
        <Stack.Screen name="Infor" component={Infor} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddCookSuccess" component={AddCookSuccess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
