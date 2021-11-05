import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
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
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
      {content: 'Món ăn chẳng ngon đi làm mệt còn nấu nướng gì!, cảm ơn tác giả', userId: 2},
    ],
  },
  {
    idFood: 2,
    idUser: 1,
    name: 'Bánh tráng trộn',
    ingredients: ['đường', 'bột mì'],
    repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
    image: require('../../../assets/image/backgroundLaunch.jpg'),
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
      {content: 'Món ăn chẳng ngon gì mệt vch còn bắt nấu cơm!, cảm ơn tác giả', userId: 2},
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

const Home = ({navigation}) => {
  return (
    <View style={styles.contrain}>
      <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>
        <FoodList title="Món mới nhất" data={Data} navigation={navigation} />
        <FoodList3
          title="Khám phá xem thứ gì đang trong mùa nhé!"
          data={Data}
          navigation={navigation}
        />
        <FoodList5
          title="Trổ tài với các món đặc sắc"
          data={Data}
          navigation={navigation}
        />

        <FoodList4
          title="Chúc mừng top 3 món ăn"
          data={Data}
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
