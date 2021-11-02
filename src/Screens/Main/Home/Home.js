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
      {/* <View style = {styles.viewTitle}>
            <Text style = {styles.title}>Kho cảm hứng</Text>
            </View> */}
      <View
        style={{
          backgroundColor: 'white',
          height: 60,
          justifyContent: 'center',
          // borderBottomWidth: 1,
          borderBottomColor: 'black',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 36, fontWeight: 'bold', marginLeft: 20}}>
          Home
        </Text>
      </View>
      <ScrollView style={{flex: 0.9}}>
        <FoodList title="Món mới nhất" data={Data} navigation={navigation} />
        <FoodList
          title="Trổ tài với các món đặc sắc"
          data={Data}
          navigation={navigation}
        />
        <FoodList
          title="Khám phá xem thứ gì đang trong mùa nhé!"
          data={Data}
          navigation={navigation}
        />
        <FoodList
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
