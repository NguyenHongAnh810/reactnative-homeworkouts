import React from 'react';
import {View, Text} from 'react-native';

import FoodList6 from '../../../Components/FoodList6';

import { Data } from '../Home/Home';

const FoodSave = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <FoodList6 data = {Data} navigation = {navigation} screen = "Me"/>
      </View>
  );
};

export default FoodSave;
