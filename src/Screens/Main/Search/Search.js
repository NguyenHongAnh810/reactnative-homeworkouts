
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import SuggestSearch from '../../../Components/SuggestSearch';
import FoodList6 from '../../../Components/FoodList6';
import { GetListFoodApi } from '../../../api/GetListFoodApi';
import { isFulfilled } from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
const {height, wigth} = Dimensions.get('window');

const DataSuggestFood = ['Cơm', 'Cháo', 'Phở', 'Bánh mì', 'Ốc xào', 'Trà sữa', 'Bít tết', 'Sushi']


const Search = ({navigation}) => {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const fetchProductList = async () => {
    console.log(key)
    try {
    const params = {
      name_contains: key
    }
    console.log('start');
    const response = await GetListFoodApi(params);
    console.log('end');
    setData(response)
    // console.log('Fetch listfood successfully: ', response);
    setData(response)
    } catch (error) {
    console.log('Failed to fetch listfood list: ', error);
    }
    }

    useEffect(() => {
      if (key == '') setSearch(false);
    }, [key]);

  useEffect(() => {
    if (key == '') setSearch(false);
      if(search) {fetchProductList()}
  }, [search]);

  const renderItem = ({item}) => {
    return (
      <SuggestSearch
        foodSuggest={item}
        onPress={() => {
          setKey(item);
          setSearch(true);
        }}
        key={`food-item-${item}`}
      />
    );
  };
  return (
    <View style={styles.contrain}>
      <View style={styles.header}>
      {/* <Button title="loading" onPress={() => {
        dispatch({
        type: 'LOADING',
      }); */}
      {/* setTimeout(()=>{
        dispatch({
          type: 'LOADED',
      })}, 2000);
      }}/> */}
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 36,
            marginLeft: 20,
            marginVertical: 20,
          }}>
          Search
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.headerInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={setKey}
              value={key}
              placeholder="Tìm tên món, nguyên liệu"
              underlineColorAndroid="#00000000"
              onEndEditing={() => {
                if (key != '') setSearch(true);
              }}
            />
            {key != '' ? (
              <TouchableOpacity
                style={styles.clear}
                onPress={() => {
                  setKey('');
                  setSearch(false);
                }}>
                <Feather name="x" size={8} color="white" />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>
          <TouchableOpacity
            style={{
              height: 32,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>{
              if(key != ''){
              setSearch(true)
              fetchProductList()
              }
            }}>
            <Feather
              name="search"
              size={20}
              style={styles.icon}
              color="#363636"
            />
          </TouchableOpacity>
        </View>
      </View>
      {search ? (
        <FoodList6
          value={key}
          data={data}
          navigation={navigation}
          screen="Search"
        />
      ) : (
        <View>
          <Text style={styles.title}>Món tìm kiếm phổ biến</Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
              key={2}
              data={DataSuggestFood}
              renderItem={renderItem}
              keyExtractor={item => item.idFood}
              numColumns={4}></FlatList>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    height: 150,
    width: wigth,
  },
  headerInput: {
    width: '86%',
    height: 32,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#707070',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    marginBottom: 5,
    marginRight: 5,
  },
  textInput: {
    height: 40,
    width: '92%',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: 'bold'
    // marginVertical: 6,
  },
  clear: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 12,
    width: 12,
    marginVertical: 10,
    backgroundColor: '#707070',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginVertical: 20,
  },
});

export default Search;
