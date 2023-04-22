import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Animated from 'react-native-reanimated';
import {TYPES as TYPES1} from '../../../redux/actions/Action';
import {TYPES} from '../../../redux/actions/ActionFetchList';

import {BASE_URL} from '../../../api/Common';
import {useDispatch, useSelector} from 'react-redux';
import {Color} from '../../../assets/color';
import BottomSheetUpdateImage from '../../../Components/BottomSheetUpdateImage';
import {validateName, validatePassword, validateEmail} from '../../../Utils/Validate';
import { UpdateUserApi } from '../../../api/GetMeApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = ({navigation}) => {
  const User = useSelector(state => state.auth.user.infor);
  const [image, setImage] = useState([
    BASE_URL + User.avata?.url ||
      'https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo',
  ]);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [newPass, setNewpass] = useState('');
  // const [checkPassword, setCheckPassword] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkUsername, setCheckUsername] = useState(true);
  const [checkNewpass, setCheckNewpass] = useState(true);
  const dispatch = useDispatch()

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const logout = async () => {
    dispatch({
      type: TYPES1.LOGOUT_SUCCESS,
    });
    await AsyncStorage.setItem('idUser', JSON.stringify(0));
  };

  const EditProfileProcess = async() => {
    try {
      dispatch({
        type: TYPES1.LOADING,
      });
      const formData = new FormData();
      if (image.length) {
        formData.append('file', {
          uri: image[0],
          name: 'file',
          type: 'image/jpg',
        });
      }
      if (name) {
        formData.append('username', name);
      }
      if (mail) {
        formData.append('email', mail);
      }
      if (newPass) {
        formData.append('password', newPass);
      }
      console.log('formData', formData)
      const response = await UpdateUserApi(formData, User.id);
      console.log('response', response);
      Alert.alert('Thông báo', 'Lưu thông tin thành công');
      // await logout();
    } catch (error) {
      alert('Lưu thông tin không thành công');
      console.log('register failted: ', error);
    } finally {
      dispatch({
        type: TYPES1.LOADED,
      });
    }
  };

  const checkValidate = () => {
    if(name){
      if(!validateName(name)) {
        setCheckUsername(false)
        return false
      } else {
        setCheckUsername(true)
      } } else {setCheckUsername(true)}

    if(mail){
      if(!validateEmail(mail)) {
        setCheckEmail(false)
        return false
      } else {
        setCheckEmail(true)
      } } else {setCheckEmail(true)}

    if(newPass){
      if(!validatePassword(newPass)) {
        setCheckNewpass(false)
        return false
      } else {
        setCheckNewpass(true)
      } } else {setCheckNewpass(true)}
    return true
  }
  return (
    <View style={styles.container}>
      <BottomSheetUpdateImage
        title="Thay đổi ảnh đại diện"
        note="Đăng tải ảnh đại diện của bạn"
        bs={bs}
        fall={fall}
        setImage={setImage}
        multiple={false}
      />
      <ImageBackground
        source={require('../../../assets/image/bg5.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{marginLeft: 10, marginVertical: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color={'white'} size={28} />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={{
            marginHorizontal: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          }}>
          <View style={{alignItems: 'center', marginBottom: 80}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <ImageBackground
                  source={{
                    uri: image[0],
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
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={'black'} size={20} />
            <TextInput
              placeholder={User.username}
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={name}
              onChangeText={setName}
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}
            />
          </View>
          {!checkUsername && <Text style = {{marginLeft: 10, color: "red", fontSize: 12}}>Tên không hợp lệ</Text>}
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={'black'} size={20} />
            <TextInput
              placeholder={User.email}
              placeholderTextColor="#666666"
              keyboardType="email-address"
              autoCorrect={false}
              value={mail}
              onChangeText={setMail}
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}
            />
          </View>
          {!checkEmail && <Text style = {{marginLeft: 10, color: "red", fontSize: 12}}>Email không hợp lệ</Text>}
          {/* <View style={styles.action}>
            <Feather name="lock" color={'black'} size={20} />
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="#666666"
              autoCorrect={false}
              secureTextEntry={true}
              value={pass}
              onChange={setPass}
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}
            />
          </View> */}
          <View style={styles.action}>
            <Feather name="lock" color={'black'} size={20} />
            <TextInput
              placeholder="Mật khẩu mới"
              placeholderTextColor="#666666"
              autoCorrect={false}
              secureTextEntry={true}
              value={newPass}
              onChangeText={setNewpass}
              style={[
                styles.textInput,
                {
                  color: 'black',
                },
              ]}
            />
          </View>
          {!checkNewpass && <Text style = {{marginLeft: 10, color: "red", fontSize: 12}}>Mật khẩu không hợp lệ</Text>}
          <TouchableOpacity
            style={styles.commandButton}
            onPress={()=>{
              if(checkValidate()) {
              EditProfileProcess()
              }
              }}>
            <Text style={styles.panelButtonTitle}>Lưu</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: Color.orange,
    alignItems: 'center',
    marginTop: 40,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: Color.orange,
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
});
