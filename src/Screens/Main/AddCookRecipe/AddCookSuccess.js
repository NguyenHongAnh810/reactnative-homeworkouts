import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';

import LoginNode from '../../../Components/LoginNode';
import { BASE_URL } from '../../../api/Common';

export default function AddCookSuccess({route, navigation}) {
    const {food} = route.params;
    console.log(food)
  return (
      <ImageBackground style={{flex: 1}} source = {require('../../../assets/image/bg8.jpg')}>
    <View style={styles.contrain}>
      <Text style={styles.text}>Chúc mừng bạn đã chia sẻ món này!</Text>
      <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
        <Image style={styles.image} source = {{uri: BASE_URL + food.image[0].url}}></Image>
        <Text style = {styles.text}>{food.name}</Text>
      </View>
      <View style={{width: 360, alignItems: 'center',
      justifyContent: 'center', marginVertical: 20}}>
      <Text style = {styles.text}>
        Các bếp khác sẽ tìm thấy, nấu theo, và thưởng thức món của bạn đó
      </Text>
      </View>
      <LoginNode
        nameNode="Xong!"
        isValid={true}
        onPress={() => {
          navigation.navigate('Add');
        }}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contrain: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
      marginTop: 40,
      height: 200,
      width: 200,
      margin: 20
  },
  text: {
      fontSize: 16,
      fontWeight: '700',
      alignItems: 'center'
  }
});
