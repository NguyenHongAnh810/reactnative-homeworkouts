import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import FoodHome from './FoodHome';

const FoodList = ({title, data, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 20}}>
        {data.map((e, index) => {
          return (
            <FoodHome
              food={e}
              navigation={navigation}
              key={`food-item-${index}`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {},
  title: {
    fontSize: 18,
    margin: 20,
    marginEnd: 40,
    fontWeight: '300',
  },
});

export default FoodList;
