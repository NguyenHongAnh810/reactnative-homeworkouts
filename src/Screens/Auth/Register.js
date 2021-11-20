
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Input from '../../Components/Input';
import LoginNode from '../../Components/LoginNode';
import LoginButton from '../../Components/LoginButton';
import InputPass from '../../Components/InputPass';
import {Color} from '../../assets/color';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../Utils/Validate';

import { TYPES } from '../../redux/actions/Action';

import { RegisterApi } from '../../api/RegisterApi';

const Register = ({navigation}) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsVaid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (validateEmail(email) && validatePassword(pass)&& validateName(name)) {
      setIsVaid(true);
    } else {
      setIsVaid(false);
    }
  }, [email, pass, name]);

  const register = async () => {
    try {
      const data = {
        username: name,
        email: email,
        password: pass
      };
      dispatch({
        type: TYPES.REGISTER_REQUEST,
        params: data,
        navigation: navigation
      });
    } catch (error) {
      console.log('register failted: ', error);
      
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
            <Text style={styles.title}>Register</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Bạn đã có tài khoản?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate({name: 'Login'});
                }}>
                <Text style={styles.textNode}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Input
              value={name}
              type={'name'}
              changeValue={setName}
              isValid={validateName(name)}
            />
            <Input
              value={email}
              type={'email'}
              changeValue={setEmail}
              isValid={validateEmail(email)}
            />
            <InputPass
              value={pass}
              type={'pass'}
              changeValue={setPass}
              typeRegister={true}
              isValid={validatePassword(pass)}
            />
            <View style={styles.node}>
              <LoginButton
                nameNode={'Register'}
                onPress={register}></LoginButton>
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
    flex: 0.65,
    backgroundColor: Color.background,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  contrainTitle: {
    flex: 0.35,
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
export default Register;
