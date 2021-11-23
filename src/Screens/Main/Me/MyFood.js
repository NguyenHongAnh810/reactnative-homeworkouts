import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import FoodList2 from '../../../Components/FoodList2';
import {useSelector, useDispatch} from 'react-redux';
import {TYPES} from '../../../redux/actions/ActionFetchList';
import FoodList6 from '../../../Components/FoodList6';

const MyFood = ({navigation}) => {
  const User = useSelector(state => state.auth.user.infor);
  const Data = useSelector(state => state.product.myFood);
  console.log('myfoodlistdata', Data);
  const dispatch = useDispatch();
  useEffect(() => {
    const params = {
      idUser: User.id,
    };
    dispatch({
      type: TYPES.FETCH_MYFOODLIST_REQUEST,
      params: params,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <FoodList6 data={Data} navigation={navigation} screen="Me" type="MyFood"/>
    </View>
  );
};

export default MyFood;
