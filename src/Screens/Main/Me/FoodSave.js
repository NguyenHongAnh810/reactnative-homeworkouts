import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import FoodList6 from '../../../Components/FoodList6';
import {useSelector, useDispatch} from 'react-redux';
import {TYPES} from '../../../redux/actions/ActionFetchList';

// import { Data } from '../Home/Home';

const FoodSave = ({navigation, dataFood}) => {
  const User = useSelector(state => state.auth.user.infor);
  const Data = useSelector(state => state.product.foodSave);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    const params = {
      idUser: User.id,
    };
    dispatch({
      type: TYPES.FETCH_FOODSAVELIST_REQUEST,
      params: params,
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <FoodList6
        data={dataFood ?? Data}
        navigation={navigation}
        screen="Me"
        type= {dataFood ? null : "FoodSave"}
      />
    </View>
  );
};

export default FoodSave;
