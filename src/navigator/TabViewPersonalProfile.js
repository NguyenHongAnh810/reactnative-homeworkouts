import React, {useState} from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import FoodSave from '../Screens/Main/Me/FoodSave';
import MyFood from '../Screens/Main/Me/MyFood';
import {Color} from '../assets/color';
import {useEffect} from 'react';
import {GetListFoodApi} from '../api/GetListFoodApi';
import FoodList6 from '../Components/FoodList6';

const TabViewPersonalProfile = ({navigation, user}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'Favorite', title: 'Tất cả', icon: <Text />},
    {key: 'Food', title: 'Đặc sắc', icon: <Text />},
  ]);

  const [listUserFood, setListUserFood] = useState([]);
  const getListFood = async () => {
    try {
      const params = {
        idUser: user.id,
      };
      const res = await GetListFoodApi(params);
      setListUserFood(res);
    } catch (e) {
      console.log('e', e);
    }
  };
  useEffect(() => {
    getListFood();
  }, []);

  const renderTabBar = props => {
    return (
      <View>
        <TabBar
          {...props}
          style={{backgroundColor: 'white'}}
          renderLabel={renderLabel}
        />
      </View>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <View>
        <Text style={focused ? styles.activeLable : styles.inactiveLable}>
          {route.title}
        </Text>
      </View>
    );
  };

  const renderScene = route => {
    switch (route.route.key) {
      case 'Favorite':
        return <MyFood navigation={navigation} dataFood={listUserFood} />;
      case 'Food':
        return <FoodSave navigation={navigation} dataFood={listUserFood} />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeLable: {
    color: 'red',
    fontWeight: '800',
  },
  inactiveLable: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default TabViewPersonalProfile;
