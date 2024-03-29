
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {TYPES} from '../../../redux/actions/Action';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Color} from '../../../assets/color';
import {BASE_URL} from '../../../api/Common'
// import {User} from '../Home/Home';

const InforScreen = ({navigation, route}) => {
  const user = route.params.user
  const User = user ?? useSelector(state => state.auth.user.infor)
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/image/bg5.jpg')} style={{flex:1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{marginLeft: 10, marginVertical: 10}}
          onPress={() => {
            navigation.goBack()
          }}>
          <Ionicons name="arrow-back" color={'white'} size={28} />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{marginRight: 10, marginVertical: 10}}
          onPress={() => {
            navigation.navigate('EditProfileScreen');
          }}>
          <AntDesign name="edit" color={'white'} size={28} />
        </TouchableOpacity> */}
      </View>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center', marginBottom: 80}}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={{
                uri: BASE_URL + User.avata?.url,
              }}
              style={{height: 100, width: 100, marginTop: 32}}
              imageStyle={{borderRadius: 15}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </ImageBackground>
          </View>
        </View>
        <View style={{}}>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={'black'} size={20} />
            <Text
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}>
              {User.username}
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={'black'} size={20} />
            <Text
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}>
              {User.email}
            </Text>
          </View>
          {/* <View style={styles.action}>
            <Feather name="lock" color={'black'} size={20} />
            <Text
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}>
              ...........
            </Text>
          </View> */}
        </View>
        {/* <TouchableOpacity
          style={styles.logout}
          onPress={async () => {
            dispatch({
              type: TYPES.LOGOUT_SUCCESS,
            });
            await AsyncStorage.setItem('idUser', JSON.stringify(0))
          }}>
          <Text style={styles.textLogout}>Đăng xuất</Text>
        </TouchableOpacity> */}
      </View>
      </ImageBackground>
    </View>
  );
};

export default InforScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    paddingBottom: 5,
    alignItems: 'center',
    // backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginLeft: 6,
  },
  logout: {
    height: 50,
    backgroundColor: Color.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  textLogout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
