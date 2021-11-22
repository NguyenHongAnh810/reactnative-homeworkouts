import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import TabViewMe from '../../../navigator/TabViewMe';
import { BASE_URL } from '../../../api/Common';

// import {User} from '../Home/Home';

const Me = ({navigation}) => {
  const User = useSelector(state => state.auth.user.infor)
  const isLogin = useSelector(state => state.auth.user.isLogin)
  console.log("islogin", isLogin)
  console.log()
  console.log("infor", User)
  return (
    <View style={{backgroundColor: '#F8F8F7', padding: 5, flex: 1}}>
      <View style={{flex: 0.1, backgroundColor: 'white'}}>
        <TouchableOpacity
          style={styles.infor}
          onPress={() => {
            navigation.navigate('Infor');
          }}>
          <Image
            style={styles.avata}
            source={{
              uri: BASE_URL + User.avata?.url,
            }}></Image>
            <View>
          <Text style={styles.name}>{User.username}</Text>
          <Text style={styles.mail}>{User.email}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9}}>
        <TabViewMe navigation={navigation}/>
      </View>
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
    color: '#555555'
  }
});

export default Me;
