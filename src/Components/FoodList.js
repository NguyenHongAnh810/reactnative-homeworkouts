import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import FoodHome from './FoodHome';

const FoodList = ({title, data, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true}>
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
    fontSize: 20,
    margin: 10,
    marginEnd: 40,
    fontWeight: '300',
  },
});

export default FoodList;
