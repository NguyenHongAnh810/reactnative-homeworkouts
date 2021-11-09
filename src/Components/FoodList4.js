import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';

import FoodHome from './FoodHome';
import Reaction from './Reaction';

const {height, wigth} = Dimensions.get('window');


const FoodList = ({title, data, navigation}) => {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('FoodDetails', {food: item, screen: 'Home'});
            }}>
            <Image style={styles.image} source={item.image[0]}></Image>
            <Text style={styles.textName}>{item.name}</Text>
            <Reaction reaction={item.reaction} style={{margin: 10}} />
          </TouchableOpacity>
        );
      };
  return (
    <View style = {styles.contrain}>
      <View style = {styles.viewTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.flatList}>
      <FlatList
              key={2}
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.idFood}
              numColumns={2}></FlatList>
    </View>
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
  flatList: {
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: 'black'
  },
  button: {
    height: height * 0.25,
    width: 180,
    justifyContent: 'center',
    backgroundColor: 'white',
    // backgroundColor: 'green',
    marginVertical: 20,
    borderRadius: 10,
    paddingBottom: 20,
    marginHorizontal: 5,
    marginBottom: 0
  },
  image: {
    width: 180,
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
