import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import Reaction from './Reaction';


const {height, wigth} = Dimensions.get('window');

const FoodHome = ({food, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('FoodDetails', {food: food, screen: 'Home'});
      }}>
      <Image style={styles.image} source={food.image}></Image>
      <Text style={styles.textName}>{food.name}</Text>
      <Reaction reaction={food.reaction} style={{margin: 10}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: height * 0.25,
    width: 150,
    justifyContent: 'center',
    backgroundColor: 'white',
    // backgroundColor: 'green',
    marginVertical: 20,
    borderRadius: 10,
    paddingBottom: 20,
    marginRight: 12,
  },
  image: {
    width: 150,
    height: height * 0.15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    margin: 8,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default FoodHome;
