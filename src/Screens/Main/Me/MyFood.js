import React from 'react'
import { View, Text } from 'react-native'

import FoodList2 from '../../../Components/FoodList2'

import {Data} from '../Home/Home';

const MyFood = ({navigation}) => {
    return (
      <View style={{flex:1}}>
        <FoodList2 value={Data} navigation = {navigation} screen = "Me"/>
      </View>
    );
  };
  
  export default MyFood;
