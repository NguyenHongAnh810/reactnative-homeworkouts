import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const dataTag = [
  {
    name: 'Tất cả',
    icon: '',
    content: <Text>Tất cả</Text>,
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

const RenderItemTag = ({item}) => {
  return (
    <View >
      <Text>{item.name}</Text>
    </View>
  );
};

export default function RenderTag() {
  return (
    <ScrollView horizontal>
      {dataTag.map(el => {
        return <RenderItemTag item={el} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
