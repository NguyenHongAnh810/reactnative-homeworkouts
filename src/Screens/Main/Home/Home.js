import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Button,
  StyleSheet,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import FoodList from '../../../Components/FoodList';
import FoodList3 from '../../../Components/FoodList3';
import FoodList4 from '../../../Components/FoodList4';
import FoodList5 from '../../../Components/FoodList5';


export const Data = [
  {
    idFood: 1,
    idUser: 1,
    name: 'Chè Khoai Dẻo',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {
        content:
          'Món ăn chẳng ngon đi làm mệt còn nấu nướng gì!, cảm ơn tác giả',
        userId: 2,
      },
    ],
  },
  {
    idFood: 2,
    idUser: 1,
    name: 'Bánh tráng trộn',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {content: 'Món ăn rất ngon lắm nhé!, cảm ơn tác giả', userId: 2},
    ],
  },
  {
    idFood: 3,
    idUser: 1,
    name: 'Bít tết',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {content: 'Món ăn rất ngon lắm luôn!, cảm ơn tác giả', userId: 2},
    ],
  },
  {
    idFood: 4,
    idUser: 1,
    name: 'Xúc xích rán',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {content: 'Món ăn rất ngon ngon cực kì á!, cảm ơn tác giả', userId: 2},
    ],
  },
  {
    idFood: 5,
    idUser: 1,
    name: 'Cháo',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {content: 'Món ăn rất ngon mới là lạ!, cảm ơn tác giả', userId: 2},
    ],
  },
  {
    idFood: 6,
    idUser: 1,
    name: 'Bánh mì kẹp trứng',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: [
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
      require('../../../assets/image/backgroundLaunch.jpg'),
    ],
    reaction: {
      heart: {
        num: 2,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      haha: {
        num: 3,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
      sad: {
        num: 5,
        user: ['Khoa Phạm', 'Hồng Ánh'],
      },
    },
    comment: [
      {content: 'Món ăn rất ngon!, cảm ơn tác giả', userId: 1},
      {
        content:
          'Món ăn chẳng ngon gì mệt vch còn bắt nấu cơm!, cảm ơn tác giả',
        userId: 2,
      },
    ],
  },
];

export const User = [
  {
    id: 1,
    name: 'Nguyễn Hồng Ánh',
    gmail: 'honganh08102000@gmail.com',
    pass: '12345',
    status: true,
    myFood: [1, 3],
    foodSave: [2, 6],
    avata:
      'https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo',
  },
  {
    id: 2,
    name: 'Nguyễn Văn Bắc',
    gmail: 'Bacnv@gmail.com',
    pass: '12346',
    status: true,
    myFood: [1, 3],
    foodSave: [2, 6],
    avata:
      'https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo',
  },
  {
    id: 3,
    name: 'Lương Ngọc Thuyết',
    gmail: 'Thuyetln@gmail.com',
    pass: '12347',
    status: true,
    myFood: [1, 3],
    foodSave: [2, 6],
    avata:
      'https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo',
  },
];

import {TYPES} from '../../../redux/actions/Action'
import {TYPES as TYPESGETLIST} from '../../../redux/actions/ActionFetchList'
import { useDispatch, useSelector } from 'react-redux';


const Home = ({navigation}) => {
  const newFood = useSelector(state => state.product.newFood)
  console.log(newFood)
  const setFood = useSelector(state => state.product.setFood)
  const specialFood = useSelector(state => state.product.specialFood)
  const topFood = useSelector(state => state.product.topFood)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProductList = async () => {
      try {
      const params = null;
     
        dispatch({
          type: TYPES.LOADING
        })
        dispatch({
          type: TYPESGETLIST.FETCH_NEWFOODLIST_REQUEST,
          params: params
        })
        dispatch({
          type: TYPESGETLIST.FETCH_SETFOODLIST_REQUEST,
          params: params
        })
        dispatch({
          type: TYPESGETLIST.FETCH_SPECIALFOODLIST_REQUEST,
          params: params
        })
        dispatch({
          type: TYPESGETLIST.FETCH_TOPFOODLIST_REQUEST,
          params: params
        })
        setTimeout(()=>{
          dispatch({
            type: TYPES.LOADED
          })
        }, 1000)
      } catch (error) {
      console.log('Failed to fetch listfood list: ', error);
      }
      }
      fetchProductList();
  }, [])
  return (
    <View style={styles.contrain}>
      <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>
        <FoodList title="Trổ tài với các món đặc sắc" data={specialFood} navigation={navigation} />
        <FoodList3
          title="Khám phá xem thứ gì đang trong mùa nhé!"
          data={setFood}
          navigation={navigation}
        />
        <FoodList5
          title="Chúc mừng top các món ăn"
          data={topFood}
          navigation={navigation}
        />

        <FoodList4
          title="Món mới nhất"
          data={newFood}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    backgroundColor: '#ECECEC',
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewTitle: {
    borderBottomWidth: 2,
    marginHorizontal: 10,
    borderBottomColor: '#EC7E5D',
    flex: 0.06,
    justifyContent: 'center',
  },
});

export default Home;
