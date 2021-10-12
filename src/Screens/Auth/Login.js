import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Input from '../../Components/Input';
import LoginNode from '../../Components/LoginNode';
import InputPass from '../../Components/InputPass';
import { validateEmail, validateName, validatePassword } from '../../Utils/Validate';

import {login, logout} from '../../redux/Action'

import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsVaid] = useState(false);

  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if(validateEmail(email)&&validatePassword(pass)){
      setIsVaid(true)
    }else{
      setIsVaid(false)
    }
  }, [email, pass])

  const checkLogin = async () => {
    try{
      if(isValid == true){
        // await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        dispatch(login())
        navigation.navigate({name: 'HomeTabs'})
      }
    } catch(error) {
      // Error saving data
      console.log(error, 'err');
    }
  }

  return (
    
    <View style={styles.contrainer}>
      <View style={styles.contrainTitle}>
        <Text style={styles.title}>Đăng nhập với email</Text>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/image/logo.png')}
      />
      </View>
      <View style={styles.email}>
        <Input value={email} type={'email'} changeValue={setEmail} isValid = {validateEmail(email)}/>
        <InputPass value={pass} type={'pass'} changeValue={setPass} typeRegister ={false} isValid = {validatePassword(pass)}/>
      </View>
      <View style={styles.node}>
          <LoginNode navigation={navigation} nameNode={'Đăng nhập'} isValid = {isValid} onPress = {checkLogin}></LoginNode>
      </View>
      <View style={styles.content}>
        <Text style = {styles.text}>Bạn chưa có tài khoản?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({name: 'Register'});
        }}>
        <Text style={styles.textNode}>Tạo tài khoản</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 3,
    backgroundColor: '#F6F5F1',
    
  },
  contrainTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    flex: 1,
  },
  node: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  content: {
    flex: 2,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginTop: 30,
    borderRadius: 100
  },
  text: {
    fontSize: 12,
    color: '#555555'
  },
  textNode: {
    margin: 10,
    marginTop: 0,
    fontSize: 12,
    color: '#426EB4'
  }
});
export default Login;
