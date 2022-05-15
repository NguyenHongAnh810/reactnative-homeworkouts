import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const dataTag = [
  {
    name: 'Tất cả',
    icon: '',
    content: <Text>Tất cả</Text>,
  },
  {
    name: 'Đặc sắc',
    icon: '',
    content: <Text>Quán ngon</Text>,
  },
  {
    name: 'Nấu ăn',
    icon: '',
    content: <Text>Nấu ăn</Text>,
  },
  {
    name: 'Quán ngon',
    icon: '',
    content: <Text>Quán ngon</Text>,
  },
  {
    name: 'Khác',
    icon: '',
    content: <Text>Khác</Text>,
  },
];

const renderIcon = item => {
  switch (item.name) {
    case 'Tất cả':
      return <Entypo name="news" size={16} color={'black'} />;
    case 'Đặc sắc':
      return <Entypo name="hand" size={16} color={'black'} />;
    case 'Nấu ăn':
      return (
        <MaterialCommunityIcons name="pot-mix" size={16} color={'black'} />
      );
    case 'Quán ngon':
      return <Entypo name="location-pin" size={16} color={'black'} />;
    case 'Khác':
      return <AntDesign name="videocamera" size={16} color={'black'} />;
  }
};

const RenderItemTag = ({item}) => {
  return (
    <TouchableOpacity style={styles.viewTag}>
      {renderIcon(item)}
      <Text style={styles.titleTag}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function RenderTag() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {dataTag.map(el => {
        return <RenderItemTag item={el} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    paddingVertical: 6,
    width: '100%',
    paddingRight: 20,
    paddingLeft: 10,
  },
  viewTag: {
    backgroundColor: '#dcdcdc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTag: {},
  titleTag: {
    fontWeight: '700',
    marginLeft: 10,
    // color: '#696969',
  },
});
