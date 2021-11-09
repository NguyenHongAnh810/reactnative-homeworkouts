import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import Reaction from './Reaction';
const {height, wigth} = Dimensions.get('window');

const FoodList = ({title, data, navigation}) => {
  return (
    <View style = {styles.contrain}>
      <View style = {styles.viewTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView
      showsHorizontalScrollIndicator= {false}
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 20}}>
        {data.map((e, index) => {
          return (
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('FoodDetails', {food: e, screen: 'Home'});
            }}>
            <Image style={styles.image} source={e.image[0]}></Image>
            <Text style={styles.textName}>{e.name}</Text>
            <Reaction reaction={e.reaction} style={{margin: 10}} />
          </TouchableOpacity>
        // <FoodItem1 food={e} navigation={navigation}/>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    marginTop: 20
  },
  title: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewTitle: {
    borderBottomWidth: 0.8,
    marginLeft: 20,
    borderBottomColor: '#EC7E5D',
    flex: 0.06,
    justifyContent: 'center',
  },
  button: {
    height: height * 0.25,
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'white',
    // backgroundColor: 'green',
    marginVertical: 20,
    borderRadius: 10,
    paddingBottom: 20,
    marginRight: 12,
  },
  image: {
    width: 200,
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

export default FoodList;
