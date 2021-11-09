import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
import {Menu, Divider, Provider} from 'react-native-paper';
import Swiper from 'react-native-swiper';

import Reaction from '../../../Components/Reaction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height, wigth} = Dimensions.get('window');

import {User} from './Home';

const FoodDetails = ({route, navigation}) => {
  const {food} = route.params;
  const {screen} = route.params;
  const [visible, setVisible] = React.useState(false);
  const [comment, setComment] = useState('');

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(screen, {food: food});
            }}>
            <Ionicons
              name="md-return-up-back"
              size={28}
              color={'black'}
              style={{margin: 10}}
            />
          </TouchableOpacity>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Entypo
                  name="dots-three-vertical"
                  size={22}
                  color={'black'}
                  style={{margin: 10}}
                />
              </TouchableOpacity>
            }>
            <Menu.Item
              onPress={() => {
                Alert.alert('Thông báo', 'Lưu thành công món ăn!');
                closeMenu();
              }}
              title="Lưu"
              contentStyle={{color: 'red'}}
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                closeMenu();
              }}
              title="Hủy"
            />
          </Menu>
        </View>
        <ScrollView style={{flex: 0.9}}>
          <View style={styles.image}>
            <Swiper showsButtons={true}>
              {food.image.map((e, index) => {
                return (
                  <View>
                    <ImageBackground
                      style={styles.image}
                      source={e}></ImageBackground>
                  </View>
                );
              })}
            </Swiper>
          </View>
          <Text style={styles.name}>{food.name}</Text>
          <View>
            <TouchableOpacity
              style={styles.infor}
              onPress={() => {
                navigation.navigate('ProfileScreen', {
                  food: food,
                  screen: screen,
                });
              }}>
              <Image
                style={styles.avata}
                source={{
                  uri: User[0].avata,
                }}></Image>
              <View>
                <Text style={styles.names}>{User[0].name}</Text>
                <Text style={styles.mail}>{User[0].gmail}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.borderTitle}>
            <Text style={styles.title}>Nguyên Liệu</Text>
            {food.ingredients.map((e, index) => {
              return (
                <View
                  style={{
                    borderStyle: 'dotted',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#B7B7B7',
                  }}
                  key={`food-item-${index}`}>
                  <Text style={styles.include1}>{e}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.borderTitle}>
            <Text style={styles.title}>Các bước làm</Text>
            {food.repice.map((e, index) => {
              return (
                <View
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  key={`food-item-${index}`}>
                  <View style={styles.viewIndex}>
                    <Text style={styles.index}>{index + 1}</Text>
                  </View>
                  <Text style={styles.include}>{e}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.reaction}>
            <Reaction reaction={food.reaction} />
            <Text style={styles.textReact}>
              {food.reaction.heart.user[0]} và{' '}
              {food.reaction.heart.num +
                food.reaction.sad.num +
                food.reaction.haha.num}{' '}
              người khác đã thả cảm xúc
            </Text>
          </View>
          <View style={styles.borderTitle}>
            <Text style={styles.title}>Bình luận</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 32, height: 32, borderRadius: 100}}
                source={{
                  uri: User[0].avata,
                }}></Image>
              <View style={styles.headerInput}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setComment}
                  value={comment}
                  placeholder="Thêm bình luận"
                  underlineColorAndroid="#00000000"
                  onEndEditing={() => {}}
                  numberOfLines={2}
                />
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <FontAwesome
                  name="send"
                  size={22}
                  color={'#EC7E5D'}></FontAwesome>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 40,
                borderTopWidth: 1,
                borderTopColor: '#B7B7B7',
                // alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 20,
              }}>
              {food.comment.map((e, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      borderBottomWidth: 0.3,
                      paddingBottom: 10,
                    }}>
                    <Image
                      style={{width: 32, height: 32, borderRadius: 100}}
                      source={{
                        uri: User[index].avata,
                      }}></Image>
                    <View style={{marginHorizontal: 10, marginRight: 20}}>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        {User[index].name}
                      </Text>
                      <Text style={{fontSize: 14}}>{e.content}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            {/* <View
              style={{
                marginTop: 40,
                borderTopWidth: 1,
                borderTopColor: '#B7B7B7',
                paddingBottom: 20,
              }}></View> */}
          </View>
        </ScrollView>
      </View>
    </Provider>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    // marginLeft: 24,
    marginVertical: 20,
    marginTop: 32,
  },
  include: {
    fontSize: 12,
    marginLeft: 8,
    marginVertical: 12,
  },
  include1: {
    fontSize: 12,
    marginLeft: 4,
    marginVertical: 10,
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
    padding: 20,
  },
  textReact: {
    fontSize: 10,
    color: '#707070',
  },
  borderTitle: {
    borderTopWidth: 1,
    marginHorizontal: 24,
    marginTop: 20,
    borderTopColor: '#B7B7B7',
    paddingBottom: 20,
  },
  // comment: {
  //   borderTopWidth: 1,
  //   marginHorizontal: 24,
  //   marginTop: 20,
  //   borderTopColor: '#B7B7B7',
  //   paddingBottom: 20,
  //   flexDirection: 'row'
  // },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flex: 0.06,
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  names: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infor: {
    marginLeft: 20,
    marginVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  mail: {
    marginLeft: 10,
    fontSize: 10,
    color: '#555555',
  },
  textInput: {
    height: 40,
    width: '92%',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '600',
  },
  headerInput: {
    width: '82%',
    height: 32,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#707070',
    alignItems: 'center',
    marginLeft: 10,
  },
});
export default FoodDetails;
