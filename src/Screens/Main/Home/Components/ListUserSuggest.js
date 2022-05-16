import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getSuggestUser} from '../../../../api/Home/HomeApi';
import {BASE_URL} from '../../../../api/Common';
import {Color} from '../../../../assets/color';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const {height, width} = Dimensions.get('window')

const RenderUser = ({item}) => {
  console.log('itemmmmmmmmmmmmmmmmmmmm', item);
  return (
    <TouchableOpacity style={styles.itemUser}>
      <Image source={{uri: BASE_URL + item.avata?.url}} style={styles.avatar} />
      <Text style={styles.nameUser}>{item.username}</Text>
      <View style={{flexDirection: 'row', marginBottom: 4}}>
        <Entypo name="hand" size={14} color="gray" />
        <Text style={styles.textTypeUser}>Người mới</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 150,
          paddingHorizontal: 16,
        }}>
        <Text style={styles.friendUser}>0 bạn chung</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
          <Text style={{color: 'red', fontSize: 12}}>29 </Text>
          <MaterialCommunityIcons
            name="fruit-watermelon"
            color={'red'}
            size={12}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 150,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.buttonAddFriend}>
          <FontAwesome5 name="user-plus" color={'navy'} size={14} />
          <Text style={{color: 'navy', marginLeft: 6}}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonX}>
          <Feather name="x" color={'gray'} size={14} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default function ListUserSuggest() {
  const [dataUser, setDataUser] = useState([]);
  console.log('dataUser', dataUser);
  const getData = async () => {
    try {
      const res = await getSuggestUser();
      setDataUser([...res]);
    } catch (e) {
      console.log('err', e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name="handshake" color={Color.orange} size={16} />
          <Text style={styles.title}>Tiến cử làm quen</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: 'darkblue'}}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}>
        {dataUser.map(item => {
          return <RenderUser item={item} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite',
    marginBottom: 6,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  itemUser: {
    backgroundColor: 'white',
    marginLeft: 10,
    elevation: 5,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 200,
    width: 150,
    borderRadius: 5,
  },
  scroll: {
    // height: 100,
  },
  title: {
    color: Color.orange,
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 16,
    marginLeft: 8,
  },
  nameUser: {
    fontWeight: '600',
    marginVertical: 6,
  },
  friendUser: {
    fontSize: 12,
    color: 'gray',
  },
  buttonAddFriend: {
    backgroundColor: '#f0f8ff',
    padding: 6,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonX: {
    backgroundColor: 'whitesmoke',
    // padding: 6,
    borderRadius: 60,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTypeUser: {
    fontSize: 12,
    color: '#555555',
    marginLeft: 3,
  },
});
