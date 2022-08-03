import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Alert,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Entypo from 'react-native-vector-icons/Entypo';
import TabViewMe from '../../../navigator/TabViewMe';
import {BASE_URL} from '../../../api/Common';
import {TYPES} from '../../../redux/actions/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Me = ({navigation}) => {
  const dispatch = useDispatch();
  const listContent = [
    {
      name: 'Hướng dẫn sử dụng',
      icon: '',
      onPress: () => {},
    },
    {
      name: 'Giới thiệu bạn bè',
      icon: '',
      onPress: () => {},
    },
    {
      name: 'Liên hệ',
      icon: '',
      onPress: () => {},
    },
    {
      name: 'Cài đặt',
      icon: '',
      onPress: () => {},
    },
    {
      name: 'Đăng xuất',
      icon: '',
      onPress: () => {
        Alert.alert('Xác nhận', 'Bạn có muốn đăng xuất?', [
          {
            text: 'hủy',
            style: 'cancel',
          },
          {text: 'Xác nhận', onPress: () => logout()},
        ]);
      },
    },
  ];

  const logout = async () => {
    dispatch({
      type: TYPES.LOGOUT_SUCCESS,
    });
    await AsyncStorage.setItem('idUser', JSON.stringify(0));
  };
  const User = useSelector(state => state.auth.user.infor);
  const isLogin = useSelector(state => state.auth.user.isLogin);
  const renderContent = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemProfile}
        onPress={() => item.onPress()}>
        <Text style={styles.textItemProfile}>{item.name}</Text>
        <Entypo name="chevron-right" size={16} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: '#F8F8F7', padding: 5, flex: 1}}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity
          style={styles.infor}
          onPress={() => {
            navigation.navigate('PersonalPage', {user: User});
          }}>
          <Image
            style={styles.avata}
            source={{
              uri: BASE_URL + User.avata?.url,
            }}></Image>
          <View>
            <Text style={styles.name}>{User.username}</Text>
            <Text style={styles.mail}>Xem trang cá nhân của bạn</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listContent}
        renderItem={renderContent}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor: {
    marginLeft: 20,
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mail: {
    marginLeft: 10,
    fontSize: 10,
    color: '#555555',
  },
  itemProfile: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 10,
    // elevation: 1,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: 'silver'
  },
  textItemProfile: {},
});

export default Me;
