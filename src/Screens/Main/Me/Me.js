import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import TabViewMe from '../../../navigator/TabViewMe';

import {User} from '../Home/Home';

const Me = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#F8F8F7', padding: 5, flex: 1}}>
      <View style={{flex: 0.1, backgroundColor: 'white'}}>
        <TouchableOpacity
          style={styles.infor}
          onPress={() => {
            navigation.navigate('Infor');
          }}>
          <Image
            style={styles.avata}
            source={{
              uri: User[0].avata,
            }}></Image>
          <Text style={styles.name}>{User[0].name}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9}}>
        <TabViewMe navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor: {
    marginLeft: 20,
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Me;
