import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Header,
  Alert,
} from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

import Reaction from '../../../Components/Reaction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const {height, wigth} = Dimensions.get('window');

const FoodDetails = ({route, navigation}) => {
  const {food} = route.params;
  const {screen} = route.params;
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
    <View>
      
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screen);
          }}>
          <Ionicons
            name="md-return-up-back"
            size={24}
            color={'white'}
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
                color={'white'}
                style={{margin: 10}}
              />
            </TouchableOpacity>
          }>
          <Menu.Item onPress={() => {
            Alert.alert("Thông báo", "Lưu thành công món ăn!")
            closeMenu();
          }} title="Lưu" contentStyle={{color: 'red'}}/>
          <Divider />
          <Menu.Item onPress={() => {
            closeMenu()
          }} title="Hủy" />
        </Menu>
        {/* <TouchableOpacity onPress = {()=>{
            navigation.navigate(screen)
          }}>
            <Entypo name="dots-three-vertical" size={22} color={'white'} style = {{margin: 10}}/>
          </TouchableOpacity> */}
      </View>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={food.image}></ImageBackground>

        <Text style={styles.name}>{food.name}</Text>
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
            {food.reaction.heart.user} và x người khác đã thả cảm xúc
          </Text>
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
    marginVertical: 10,
  },
  include: {
    fontSize: 12,
    marginLeft: 8,
    marginVertical: 12,
  },
  include1: {
    fontSize: 12,
    marginLeft: 4,
    marginVertical: 8,
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
    marginVertical: 20,
    borderTopColor: '#B7B7B7',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});
export default FoodDetails;
