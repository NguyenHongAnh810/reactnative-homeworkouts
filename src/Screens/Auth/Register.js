// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// import Input from '../../Components/Input';
// import LoginNode from '../../Components/LoginNode';
// import InputPass from '../../Components/InputPass';
// import { validateEmail, validateName, validatePassword } from '../../Utils/Validate';

// import { AsyncStorage } from '@react-native-async-storage/async-storage';

// const Register = ({navigation}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [isValid, setIsVaid] = useState(false);
//   useEffect(() => {
//     if(validateEmail(email)&&validatePassword(pass)&&validateName(name)){
//       setIsVaid(true)
//     }else{
//       setIsVaid(false)
//     }
//   }, [email, pass, name])

//   return (
//     <View style={styles.contrainer}>
//       <View style={styles.contrainTitle}>
//         <Text style={styles.title}>Đăng ký bằng email</Text>
//         <Image
//         style={styles.tinyLogo}
//         source={require('../../assets/image/logo.png')}
//       />
//       </View>
//       <View style={styles.email}>
//         <Input value={name} type={'name'} changeValue={setName} isValid={validateName(name)}/>
//         <Input value={email} type={'email'} changeValue={setEmail} isValid={validateEmail(email)}/>
//         <InputPass value={pass} type={'pass'} changeValue={setPass} typeRegister ={true} isValid={validatePassword(pass)}/>
//       </View>
//       <View style={styles.node}>
//           <LoginNode navigation={navigation} nameNode={'Tạo tài khoản'} isValid = {isValid}></LoginNode>
//       </View>
//       <View style={styles.content}>
//         <Text style = {styles.text}>Bạn đã có tài khoản?</Text>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate({name: 'Login'});
//         }}>
//         <Text style={styles.textNode}>Đăng nhập</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   contrainer: {
//     flex: 1,
//     backgroundColor: '#F6F5F1',
//   },
//   contrainTitle: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   email: {
//     flex: 2.5,
//   },
//   tinyLogo: {
//     width: 40,
//     height: 40,
//     marginTop: 30,
//     borderRadius: 100
//   },
//   content: {
//     flex: 2,
//     alignItems: 'center',
//     // justifyContent: 'center'
//   },
//   text: {
//     fontSize: 12,
//     color: '#555555'
//   },
//   textNode: {
//     margin: 10,
//     marginTop: 0,
//     fontSize: 12,
//     color: '#426EB4'
//   },
//   node: {
//     flex: 0.5,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

// export default Register;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
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

import {TYPES, loginSuccess, logoutSuccess} from '../../redux/Action';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const checkLogin = async () => {
    try {
      if (true) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
        });
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
      }
    } catch (error) {
      // Error saving data
      console.log(error, 'err');
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
