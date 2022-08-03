import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {BASE_URL} from '../../../api/Common';
import CustomHeader from '../Me/components/CustomHeader';
import Entypo from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

export default function ListUser({navigation, route}) {
  const listUser = route.params.listUser;
  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PersonalPage', {user: item});
        }}>
        <Image
          style={styles.image}
          source={{uri: BASE_URL + item.avata?.url}}></Image>
        <View>
          <Text style={styles.textName}>{item.username}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 4,
              marginLeft: 16,
              marginTop: 10,
            }}>
            <Entypo name="hand" size={14} color="gray" />
            <Text style={styles.textTypeUser}>Người mới</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            paddingRight: 5
          }}>
          <TouchableOpacity onPress={()=>{
             navigation.navigate('PersonalPage', {user: item});
          }}>
            <Text style={{color: 'navy', fontSize: 10}}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{alignItems: 'center', flex: 1, width: '100%'}}>
      <CustomHeader title="Danh sách người dùng" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listUser}
        renderItem={renderItem}
        contentContainerStyle={{marginBottom: 100}}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: height * 0.15 + 10,
    width: width,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  image: {
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    margin: 8,
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '700',
  },
  avata: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  names: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 12,
  },
  infor: {
    marginVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  email: {
    // fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 12,
  },
  textTypeUser: {
    fontSize: 12,
    color: '#555555',
    marginLeft: 3,
  },
});
