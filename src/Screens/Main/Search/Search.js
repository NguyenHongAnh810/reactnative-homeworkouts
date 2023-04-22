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
  Button,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import SuggestSearch from '../../../Components/SuggestSearch';
import FoodList6 from '../../../Components/FoodList6';
import {GetListFoodApi} from '../../../api/GetListFoodApi';
import {isFulfilled} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';
import {TYPES} from '../../../redux/actions/Action';
import RenderTagSearch from './components/RenderTagSearch';
import { getListRateApi } from '../../../api/Rate';
const {height, wigth} = Dimensions.get('window');

const DataSuggestFood = [
  'Cơm',
  'Cháo',
  'Phở',
  'Bánh mì',
  'Ốc xào',
  'Trà sữa',
  'Bít tết',
  'Sushi',
];

const tagTitle = [
  "Tất cả",
  1,
  2,
  3,
  4,
  5
]

const Search = ({navigation}) => {
  const [key, setKey] = useState('');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  const [tag, setTag] = useState(tagTitle[0])
  console.log('tag', tag)
  const dispatch = useDispatch();

  const countRate = async(data) => {
    let dataShow = []
    // const dataAddRate = data
    data.map(async(item, index)=>{
      const params = {
        idFood: item.id,
      };
      const res = await getListRateApi(params);
      let sum = 0;
      if (res.length > 0) {
        res.map(item => {
          sum = sum + item.rate;
        });
      const count = sum / res.length;
      console.log('count', count)
      console.log('tag', tag)
      if(count >= tag && (count < tag + 1)) {
        dataShow.push(item)
      }
      // dataAddRate = [...dataAddRate, dataAddRate[index] = {...dataAddRate[index], rate: count.toFixed(1)}]
      // setRate(count.toFixed(1));
      }
    })
    setData(dataShow)
  }

  const fetchProductList = async () => {
    try {
      dispatch({
        type: TYPES.LOADING,
      });
      const params = {
        name_contains: key,
      };
      const response = await GetListFoodApi(params);
      if(tag == "Tất cả"){
        setData(response)
      } else {
      countRate(response)
      }
      setTimeout(() => {
        dispatch({
          type: TYPES.LOADED,
        });
      }, 200);
    } catch (error) {
      console.log('Failed to fetch listfood list: ', error);
    }
  };

  useEffect(() => {
    if (key == '') setSearch(false);
  }, [key]);

  useEffect(() => {
    if (key == '') setSearch(false);
    if (search) {
      fetchProductList();
    }
  }, [search]);

  useEffect(()=>{
    fetchProductList()
  }, [tag])

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

  const Search = () => {};

  return (
    <View style={styles.contrain}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 36,
            marginLeft: 20,
            marginVertical: 20,
          }}>
          Search
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={styles.headerInput}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (key != '') {
                  setSearch(true);
                  fetchProductList();
                }
              }}>
              <Feather
                name="search"
                size={20}
                style={styles.icon}
                color="#363636"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              onChangeText={setKey}
              value={key}
              placeholder="Nhập từ khóa bạn cần tìm"
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
        </View>
        <RenderTagSearch tag = {tag} setTag = {setTag}/>
      </View>
      {search ? (
        data?.length != 0 ? (
          <FoodList6
            value={key}
            data={data}
            navigation={navigation}
            screen="Search"
          />
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
            <Text
              style={{marginLeft: 20, marginBottom: 50, fontWeight: 'bold'}}>
              Không tìm thấy kết quả nào
            </Text>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../../assets/image/icons8-nothing-found-64.png')}></Image>
          </View>
        )
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
    width: wigth,
  },
  headerInput: {
    width: '92%',
    height: 32,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#707070',
    alignItems: 'center',
    marginLeft: '4%',
    marginBottom: 12,
  },
  icon: {
    marginBottom: 5,
    marginRight: 5,
  },
  textInput: {
    height: 40,
    width: '82%',
    fontSize: 14,
    marginLeft: 8,
    // fontWeight: '500',
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
    marginBottom: 20,
  },
});

export default Search;
