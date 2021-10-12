import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Reaction from '../../../Components/Reaction';

const {height, wigth} = Dimensions.get('window');

const FoodDetails = ({route, navigation}) => {
  const {food} = route.params;
  return (
    <View>
      <ScrollView>
        <Image style={styles.image} source={food.image}></Image>
        <Text style={styles.name}>{food.name}</Text>
        <View>
          <Text>Nguyên Liệu</Text>
          {food.ingredients.map((e)=>{
               return(
                <Text>{e}</Text>
            );
          })}
          <Text>Các bước làm</Text>
          {food.repice.map((e)=>{
               return(
                <Text>{e}</Text>
            );
          })}
        </View>
        <Reaction reaction = {food.reaction}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {},
  name: {
    fontSize: 24,
    margin: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: wigth,
  },
});
export default FoodDetails;
