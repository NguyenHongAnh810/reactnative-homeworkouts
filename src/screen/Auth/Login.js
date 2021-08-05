import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  image,
  ScrollView,
} from 'react-native';
import { StateGlobal } from '../../../App';

import Input from '../../../components/Input';
import Link from '../../../components/Link';
import Node from '../../../components/Node';

import {validateEmail, validatePassword} from '../../utils/validate';
import Islogin from './Service';

const Login = props => {
  const {navigation} = props;
  const [name, setname] = useState('');
  const [pass, setPass] = useState('');

  const [errName, setErrName] = useState('');
  const [errPass, setErrPass] = useState('');

  const isEmail = validateEmail(name);
  const isPass = validatePassword(pass);

  const {setcheck} = useContext(StateGlobal)

  const onEndEditingEmail = () => {
    if (isEmail == false) {
      setErrName('username is not in the correct email format!');
    } else {
      setErrName(null);
    }
  };
  

  const onEndEditingPass = () => {
    if (isPass == false) {
      setErrPass('Password is Minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');
    } else {
      setErrPass(null);
    }
  };

  const checkLogin = async () => {
    if (isEmail == true && isPass == true) {
      Islogin(isEmail, isPass);
      setcheck(true)
      console.log('dang nhap thanh cong');
      // navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground
      source={require('./../../inmage/hinhnen4.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView>
        <View style={styles.contrain}>
          <Text style={styles.title}>Hello,</Text>
          <Text style={styles.minititle}>Welcome back</Text>

          <Input
            title="Username"
            placeholder="Enter your email"
            range={16}
            onChange={setname}
            err={errName}
            onEndEditing={onEndEditingEmail}
          />
          <Input
            title="Password"
            pass={true}
            placeholder="Enter your password"
            range={16}
            onChange={setPass}
            err={errPass}
            onEndEditing={onEndEditingPass}
          />
          <Node nameNode="Login" checkLogin={checkLogin} />

          <View
            style={{
              marginVertical: 'auto',
              // flex : 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 16,
            }}>
            <View style={styles.hr} />
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
              }}>
              OR
            </Text>
            <View style={styles.hr} />
          </View>
          <Link
            cmp="Login"
            image={require('./../../inmage/GoogleLogo.png')}
            name="Google"
          />
          <Link
            cmp="Login"
            image={require('./../../inmage/logoFB1.png')}
            name="Facebook"
          />
          <View style={styles.change}>
            <Text style={styles.text}>Don't have acount yet?</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.textButton}>Register here</Text>
            </TouchableOpacity>
          </View>
          {/* <Change title = 'not acount' nameNode = 'Register' navigation = {navigation} /> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contrain: {
    flex: 1,
    backgroundColor: 'rgba(154, 229, 237, 0)',
    paddingHorizontal: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#f8f8ff',
    fontFamily: '',
    marginTop: 20,
  },
  change: {
    color: '#f8f8ff',
    marginTop: 50,
  },
  text: {
    alignSelf: 'center',
    color: '#f8f8ff',
  },
  textButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#f8f8ff',
  },
  button: {
    alignSelf: 'center',
  },
  minititle: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#f8f8ff',
    fontSize: 20,
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  hr: {
    height: 2,
    backgroundColor: '#fff',
    flexGrow: 1,
    maxWidth: '40%',
  },
});

export default Login;
