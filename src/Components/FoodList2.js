import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

import FoodItem from './FoodItem';


const {height, wigth} = Dimensions.get('window');

const FoodList2 = ({value, navigation, screen, data}) => {
  const renderItem = ({item}) => {
    return <FoodItem food ={item} navigation = {navigation} screen = {screen} key={`food-item-${item.idFood}`}/>;
  };
  return (
    <View style={{alignItems: 'center', flex: 1, marginTop: 10, width: '100%'}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.idFood}
        ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodList2;
