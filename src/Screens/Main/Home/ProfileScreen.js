import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {User} from './Home';
import {Data} from './Home';
import FoodList2 from '../../../Components/FoodList2';

const ProfileScreen = ({route, navigation}) => {
  const {food} = route.params;
  const {screen} = route.params;
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FoodDetails', {food: food, screen: 'Home'});
        }}
        style={{backgroundColor: 'white'}}>
        <Ionicons
          name="md-return-up-back"
          size={28}
          color={'black'}
          style={{margin: 10}}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.infor}>
          <Image
            style={styles.avata}
            source={{
              uri: User[0].avata,
            }}></Image>
          <View>
            <Text style={styles.names}>{User[0].name}</Text>
            <Text style={styles.mail}>{User[0].gmail}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.text}>Món của tôi ({User[0].myFood.length})</Text>
        <FoodList2 data={Data} navigation={navigation} screen="ProfileScreen"/>
      </View>
    </View>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  names: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor: {
    marginLeft: 20,
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mail: {
    marginLeft: 10,
    fontSize: 10,
    color: '#555555',
  },
  text: {
    fontSize: 20,
    marginLeft: 24,
    marginTop: 20,
    fontWeight: 'bold'
  }
});
