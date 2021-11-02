import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LoginButton = ({nameNode, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.contrainer}
          onPress = {
            ()=>onPress && onPress()
        }
          >
        <Text style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 24
        
      }}>{nameNode}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    backgroundColor: '#000000',
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 10
  },
});

export default LoginButton;
