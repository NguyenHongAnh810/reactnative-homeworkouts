import React from 'react';
import {View, Text} from 'react-native';

import FoodList2 from '../../../Components/FoodList2';

import { Data } from '../Home/Home';

const FoodSave = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <FoodList2 data = {Data} navigation = {navigation} screen = "Me"/>
      </View>
  );
};

export default FoodSave;
