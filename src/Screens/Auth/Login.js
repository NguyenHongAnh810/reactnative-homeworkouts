
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Input from '../../Components/Input';
import LoginNode from '../../Components/LoginNode';
import LoginButton from '../../Components/LoginButton';
import InputPass from '../../Components/InputPass';
import {Color} from '../../assets/color';
import Loading from '../../Components/Loading';
import {validateName, validatePassword} from '../../Utils/Validate';

import {TYPES} from './../../redux/actions/Action';
import {LoginApi} from '../../api/LoginApi';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsVaid] = useState(false);
  const [check, setCheck] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  console.log('loading', loading)
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) return <Loading />;
  }, [loading]);


  useEffect(() => {
    if (validateName(username) && validatePassword(password)) {
      setIsVaid(true);
    } else {
      setIsVaid(false);
    }
  }, [username, password]);
 
  const checkLogin = async () => {
    try {
      const data = {
        identifier: username,
        password: password,
      };
      dispatch({
        type: TYPES.LOGIN_REQUEST,
        params: data,
      });
      // const User = useSelector(state => state.auth.user.infor)
      // await AsyncStorage.setItem('idUser', JSON.stringify(User.id));
    } catch (error) {
      console.log('Login failted: ', error);
    }
  };

  return (
    <View style={styles.contrainer}>
      <ImageBackground
        source={require('../../assets/image/bg2.jpg')}
        style={styles.image}>
        <View style={styles.contrainTitle}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/image/logo2.png')}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.header}>
            <Text style={styles.title}>Login</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate({name: 'Register'});
                }}>
                <Text style={styles.textNode}>Đăng kí</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Input
              value={username}
              type={'name'}
              changeValue={setUsername}
              isValid={validateName(username)}
            />
            <InputPass
              value={password}
              type={'pass'}
              changeValue={setPassword}
              typeRegister={false}
              isValid={validatePassword(password)}
            />
            <View style={styles.node}>
              <LoginButton
                nameNode={'Login'}
                onPress={checkLogin}></LoginButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  view: {
    flex: 0.6,
    backgroundColor: Color.background,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  contrainTitle: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 30,
  },
  text: {
    fontSize: 12,
    color: '#707070',
  },
  textNode: {
    margin: 1,
    marginTop: 0,
    fontSize: 12,
    color: '#426EB4',
  },
  header: {
    marginLeft: 20,
    marginBottom: 32,
    marginTop: 10,
  },
  node: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
});
export default Login;
