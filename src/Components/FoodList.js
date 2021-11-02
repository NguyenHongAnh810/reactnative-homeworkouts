import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import FoodHome from './FoodHome';

const FoodList = ({title, data, navigation}) => {
  return (
    <View style = {styles.contrain}>
      <View style = {styles.viewTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
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
});

export default FoodList;
