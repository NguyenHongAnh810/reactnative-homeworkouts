import React, {useState} from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import MyFood from '../Screens/Main/Me/MyFood';
import FoodSave from '../Screens/Main/Me/FoodSave';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TabViewMe = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'MyFood', title: 'Món của tôi'},
    {key: 'FoodSave', title: 'Món đã lưu'},
  ]);

  const renderTabBar = (props) => {
    return (
      <View>
        <TabBar
          {...props}
          // indicatorStyle={styles.indicator}
          style={{backgroundColor: 'white'}}
          renderLabel={renderLabel}
          activeColor={'black'}
        />
      </View>
    );
  };

  const renderLabel = (route, focused) => {
    console.log(focused)
    return(
    <Text style={focused? styles.activeLable : styles.inactiveLable }>{route.route.title}</Text>
    );
  };

  const renderScene = route => {
    switch (route.route.key) {
      case 'MyFood':
        return <MyFood navigation={navigation}/>;
      case 'FoodSave':
        return <FoodSave navigation={navigation}/>;
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
  }

  const styles = StyleSheet.create({
    activeLable: {
      color: Colors.gray_text,
      fontWeight: '800'
      
    },
    inactiveLable: {
      color: 'black',
      fontWeight: 'bold'
    }
  });

export default TabViewMe;
