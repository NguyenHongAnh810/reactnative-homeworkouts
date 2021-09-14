import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {USER_FETCH_REQUESTED} from '../Redux/action';
import rateApi from '../api/rateApi';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const Item = ({id, title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text>     </Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

// const Item = (item) => {
//   <View style = {styles.containerItem}>
//     {/* <Text>{item.id}</Text> */}
//     <Text style = {styles.title}>{item.title}</Text>
//   </View>
// }

const Rate = props => {
  const DATA = useSelector(state => state.listRate);
  console.log('data: ', DATA);
  const dispatch = useDispatch();

  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Currency Exchange Rate</Text>
        <Text style={styles.text}>Base: USD</Text>
      </View>
      <View style={(styles.container, {flex: 0.5})}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(USER_FETCH_REQUESTED());
          }}>
          <Text>get the currency rate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#C0C0C0',
    paddingHorizontal: 28,
    paddingVertical: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 12,
    justifyContent: 'space-between'

  },
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    marginTop: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

export default Rate;
