import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const InputPass = ({value, type, changeValue, typeRegister, isValid}) => {
  const [placeholder, setPlaceholder] = useState('Địa chỉ email');
  const [notseen, setNotSeen] = useState(true);
  const [iconName, setIconName] = useState('eye');
  const [isVal, setIsVal] = useState("true")
  const [err, setErr] = useState("")
  useEffect(() => {
    switch(type){
      case "email":
          setPlaceholder("Địa chỉ email");
          setErr("Email không hợp lệ!")
          break;
      case "pass":
          setPlaceholder("Mật khẩu");
          setErr("Mật khẩu không hợp lệ!")
          break;
      case "name":
          setPlaceholder("Tên");
          setErr("Tên không hợp lệ!")
          break;
}
  }, []);

  return (
    <View>
      <View style={styles.contrainer}>
        <TextInput
          style={styles.input}
          onChangeText={changeValue}
          value={value}
          placeholder={placeholder}
          secureTextEntry={notseen}
          underlineColorAndroid="#00000000"
          onEndEditing = {()=>{
            setIsVal(isValid)
          }}
          ></TextInput>
       <TouchableOpacity
            onPress={() => {
              setNotSeen(!notseen);
              setIconName(notseen ? 'eye-off' : 'eye');
            }}>
            <Icon
              style={styles.icon}
              name={iconName}
              size={16}
              color={'#000000'}></Icon>
          </TouchableOpacity>
      </View>
      {isVal ? <View/>: <Text style ={styles.err}>{err}</Text>}
      <Text style={styles.note}>
        {typeRegister ? 'Vui lòng điền mật khẩu có ít nhất 6 kí tự' : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    margin: 12,
  },
  icon: {
    margin: 12
  },
  input: {
    height: 40,
    padding: 10,
  },
  note: {
    fontSize: 10,
    color: '#707070',
    marginLeft: 20,
  },
  err: {
    fontSize: 10,
    marginLeft: 20,
    color: 'red',
    marginTop: 0
  }
});

export default InputPass;
