import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

import FoodList2 from '../../../Components/FoodList2'
import { useSelector, useDispatch } from 'react-redux';
import {TYPES} from '../../../redux/actions/ActionFetchList'


const MyFood = ({navigation}) => {
  const User = useSelector(state => state.auth.user.infor)
  const Data = useSelector(state => state.product.myFood)
  console.log('myfoodlistdata', Data)
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
   setisLoading(true);
   const params = {
     idUser: User.id,
   }
   dispatch({
     type: TYPES.FETCH_MYFOODLIST_REQUEST,
     params: params
   })
  }, [])
    return (
      <View style={{flex:1}}>
        <FoodList2 data={Data} navigation = {navigation} screen = "Me"/>
      </View>
    );
  };
  
  export default MyFood;
