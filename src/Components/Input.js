import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({value, type, changeValue}) => {
  const [placeholder, setPlaceholder] = useState("Địa chỉ email");
  useEffect(() => {
    switch(type){
        case "email":
            setPlaceholder("Địa chỉ email");
            break;
        case "pass":
            setPlaceholder("Mật khẩu");
            break;
        case "name":
            setPlaceholder("Tên");
            break;
  }
},[]);
  
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={changeValue}
        value={value}
        placeholder={placeholder}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.5,
    padding: 10,
  },
});

export default Input;
