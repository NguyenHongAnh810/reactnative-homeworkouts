import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({value, type, changeValue, isValid}) => {
  const [placeholder, setPlaceholder] = useState("Địa chỉ email");
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
},[]);
  
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={changeValue}
        value={value}
        placeholder={placeholder}
        onEndEditing = {()=>{
         setIsVal(isValid)
        }}></TextInput>
        {isVal ? <View/>: <Text style ={styles.err}>{err}</Text>}
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
  err: {
    fontSize: 10,
    marginLeft: 20,
    color: 'red'
  }
});

export default Input;
