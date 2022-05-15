import {View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { BASE_URL } from '../../../../api/Common';

const {height, width} = Dimensions.get('screen')

const RenderItemPost = ({item, navigation}) => {
  return (
    <TouchableOpacity
    style={styles.button}
    onPress={() => {
      // navigation.navigate('FoodDetails', {food: item, screen: 'Home'});
    }}>
    <Image style={styles.image} source={{uri: BASE_URL + item.image[0]}} resizeMode = 'contain'></Image>
    <Text style={styles.textName}>{item.name}</Text>
    {/* <View style={{height: 20}}>
    </View> */}
  </TouchableOpacity>
  );
};

export default function ListPostHome({data = [], navigation}) {
  return (
    <View style={styles.contrain}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}>
        {data.map((e, index) => {
          return (
            <RenderItemPost
              item={e}
              navigation={navigation}
              key={`food-item-${index}`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contrain: {
      flex: 1,
      backgroundColor: 'white'
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
    width: width - 24,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    height: width - 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    margin: 8,
    fontSize: 14,
    fontWeight: '700',
    height: 40
  },
});
