import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../../../api/Common';
import {GetMeApi} from '../../../../api/GetMeApi';
import Reaction from '../../../../Components/Reaction';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('screen');

const RenderItemPost = ({item, navigation}) => {
  console.log('itemmmmmmmmmmmmmmmmmm', item);
  const [userFood, setUserFood] = useState({});
  useEffect(async () => {
    const params = {
      id: item.idUser,
    };
    const response = await GetMeApi(params);
    setUserFood(response[0]);
  }, [item]);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('FoodDetails', {food: item, screen: 'Home'});
      }}>
      <Image style={styles.image} source={{uri: BASE_URL + item.image[0]}} />
      <View style={styles.viewContent}>
        <View style={[styles.viewInfor, {justifyContent: 'space-between'}]}>
          <View style={styles.viewInfor}>
            <Image
              style={styles.avata}
              source={{
                uri: BASE_URL + userFood.avata?.url,
              }}></Image>
            <View
              style={{
                marginLeft: 10,
                height: 50,
                justifyContent: 'space-between',
                paddingVertical: 6,
              }}>
              <Text style={styles.names}>{userFood.username}</Text>
              <View style={{flexDirection: 'row'}}>
                <Entypo name="hand" size={12} color="gray" />
                <Text style={styles.mail}>Người mới</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>29 </Text>
            <MaterialCommunityIcons
              name="fruit-watermelon"
              color={'red'}
              size={14}
            />
          </View>
        </View>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={{fontSize: 14}}>Món ăn nhà làm ngon như nhà làm.</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 6,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo name="clock" size={12} color="gray" />
            <Text style={{color: 'gray', marginHorizontal: 6, fontSize: 12}}>
              {item.created_at}
            </Text>
            <Entypo name="globe" size={12} color="black" />
          </View>
          <Text style={{color: 'gray', fontSize: 12}}>2 lượt xem</Text>
        </View>
        <Reaction />
      </View>
    </TouchableOpacity>
  );
};

export default function ListPostHome({data = [], navigation}) {
  return (
    <View style={styles.contrain}>
      <ScrollView showsHorizontalScrollIndicator={false}>
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
    // backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  image: {
    height: (3 * (width - 24)) / 4.5,
    width: width - 24,
    borderRadius: 10,
  },
  textName: {
    fontWeight: '700',
    fontSize: 16,
  },
  viewContent: {
    width: '100%',
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  names: {
    fontWeight: 'bold',
  },
  viewInfor: {
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mail: {
    fontSize: 10,
    color: '#555555',
    marginLeft: 3,
  },
});
