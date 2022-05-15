import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../../../../api/Common';

export default function HeaderAddPost() {
  const user = useSelector(state => state.auth.user.infor);
  return (
    <TouchableOpacity style={styles.container}>
      <View style = {styles.viewAvata}>
        <Image
          style={styles.avata}
          source={{
            uri: BASE_URL + user.avata?.url,
          }}></Image>
        <Text style = {styles.placeHolder}>Hôm nay bạn ăn gì?</Text>
      </View>
      <Ionicons name="images-outline" size={20} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 12
    
  },
  viewAvata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avata: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  placeHolder: {
    marginLeft: 10,
    color: 'gray'
  }
});
