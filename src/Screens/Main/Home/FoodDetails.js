import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Reaction from '../../../Components/Reaction';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, wigth} = Dimensions.get('window');

const FoodDetails = ({route, navigation}) => {
  const {food} = route.params;
  const {screen} = route.params

  return (
    <View>
      <ScrollView>
        <ImageBackground style={styles.image} source={food.image}>
          <TouchableOpacity onPress = {()=>{
            navigation.navigate(screen)
          }}>
            <Icon name="md-return-up-back" size={24} color={'white'} style = {{margin: 10}}/>
          </TouchableOpacity>
        </ImageBackground>
       
        <Text style={styles.name}>{food.name}</Text>
        <View style = {styles.borderTitle}>
          <Text style={styles.title}>Nguyên Liệu</Text>
          {food.ingredients.map((e, index) => {
            return (
            <View style={{borderStyle: 'dotted', borderBottomWidth: 0.5, borderBottomColor: '#B7B7B7'}}>
            <Text style={styles.include1}>{e}</Text>
          </View>
            );
          })}
          </View>
          <View style = {styles.borderTitle}>
          <Text style={styles.title}>Các bước làm</Text>
          {food.repice.map((e, index) => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.viewIndex}>
                  <Text style={styles.index}>{index + 1}</Text>
                </View>
                <Text style={styles.include}>{e}</Text>
              </View>
            );
          })}
        </View>
        <View style = {styles.reaction} >
        <Reaction reaction={food.reaction}/>
        <Text style = {styles.textReact}>{food.reaction.heart.user} và x người khác đã thả cảm xúc</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {},
  name: {
    fontSize: 20,
    margin: 24,
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: wigth,
  },
  title: {
    fontSize: 16,
    // marginLeft: 24,
    marginVertical: 10,
  },
  include: {
    fontSize: 12,
    marginLeft: 8,
    marginVertical: 12,
  },
  include1: {
    fontSize: 12,
    marginLeft: 4,
    marginVertical: 8,
  },
  index: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
  viewIndex: {
    borderRadius: 10,
    backgroundColor: '#363636',
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reaction: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textReact: {
    fontSize: 10,
    color: '#707070'
  },
  borderTitle: {
    borderTopWidth: 1, 
    marginHorizontal: 24,
    marginVertical: 20,
    borderTopColor: '#B7B7B7'
  }
});
export default FoodDetails;
