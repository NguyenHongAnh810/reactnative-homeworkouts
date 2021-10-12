import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Input from '../../Components/Input';
import LoginNode from '../../Components/LoginNode';
import InputPass from '../../Components/InputPass';
import { validateEmail, validateName, validatePassword } from '../../Utils/Validate';

import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsVaid] = useState(false);
  useEffect(() => {
    if(validateEmail(email)&&validatePassword(pass)&&validateName(name)){
      setIsVaid(true)
    }else{
      setIsVaid(false)
    }
  }, [email, pass, name])


  return (
    <View style={styles.contrainer}>
      <View style={styles.contrainTitle}>
        <Text style={styles.title}>Đăng ký bằng email</Text>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/image/logo.png')}
      />
      </View>
      <View style={styles.email}>
        <Input value={name} type={'name'} changeValue={setName} isValid={validateName(name)}/>
        <Input value={email} type={'email'} changeValue={setEmail} isValid={validateEmail(email)}/>
        <InputPass value={pass} type={'pass'} changeValue={setPass} typeRegister ={true} isValid={validatePassword(pass)}/>
      </View>
      <View style={styles.node}>
          <LoginNode navigation={navigation} nameNode={'Tạo tài khoản'} isValid = {isValid}></LoginNode>
      </View>
      <View style={styles.content}>
        <Text style = {styles.text}>Bạn đã có tài khoản?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({name: 'Login'});
        }}>
        <Text style={styles.textNode}>Đăng nhập</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: '#F6F5F1',
  },
  contrainTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    flex: 2.5,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginTop: 30,
    borderRadius: 100
  },
  content: {
    flex: 2,
    alignItems: 'center',
    // justifyContent: 'center'
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
  },
  node: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
});

export default Register;
