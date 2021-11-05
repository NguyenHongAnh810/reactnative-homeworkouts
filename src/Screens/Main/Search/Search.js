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
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import SuggestSearch from '../../../Components/SuggestSearch';
import FoodList6 from '../../../Components/FoodList6';
import {Data} from './../Home/Home';
const {height, wigth} = Dimensions.get('window');

const DataSuggestFood = ['Cơm', 'Cháo','Phở', 'Bánh mì', 'Ốc xào', 'Trà sữa', 'Bít tết', 'Sushi']


const Search = ({navigation}) => {
  const [key, setKey] = useState('');
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (key == '') setSearch(false);
  }, [key]);

  const renderItem = ({item}) => {
    return (
      <SuggestSearch
        foodSuggest={item}
        onPress={() => {
          setKey(item);
          setSearch(true);
        }}
        // key={`food-item-${item}`}
      />
    );
  };
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
          data={Data}
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
