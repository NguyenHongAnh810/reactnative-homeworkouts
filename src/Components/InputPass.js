import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const InputPass = ({value, type, changeValue, typeRegister}) => {
  const [placeholder, setPlaceholder] = useState('Địa chỉ email');
  const [notseen, setNotSeen] = useState(true);
  const [iconName, setIconName] = useState('eye-off');
  useEffect(() => {
    switch (type) {
      case 'email':
        setPlaceholder('Địa chỉ email');
        break;
      case 'pass':
        setPlaceholder('Mật khẩu');
        break;
      case 'name':
        setPlaceholder('Tên');
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
          underlineColorAndroid="#00000000"></TextInput>
       <TouchableOpacity
            onPress={() => {
              setNotSeen(!notseen);
              setIconName(notseen ? 'eye' : 'eye-off');
            }}>
            <Icon
              style={styles.icon}
              name={iconName}
              size={16}
              color={'#000000'}></Icon>
          </TouchableOpacity>
      </View>
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
});

export default InputPass;
