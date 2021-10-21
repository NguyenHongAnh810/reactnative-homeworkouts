import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import AddContent from './AddContent';
import AddMaking from './AddMaking';

export default function ListContents({
  name,
  array,
  onPressAdd,
  onchange,
}) {
  return (
    <View style={{backgroundColor: 'white', marginTop: 8}}>
      <Text style={styles.title}>{name}</Text>
      {name == 'Nguyên liệu'
        ? array.map((e, index) => {
            return (
              <AddContent
                value={e}
                index={index}
                onchange={onchange}
                key={`food-item-${index}`}
                onEndEditing={() => {}}
              />
            );
          })
        : array.map((e, index) => {
            return (
              <AddMaking
                value={e}
                index={index}
                onchange={onchange}
                key={`food-item-${index}`}
              />
            );
          })}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonAddContent} onPress={onPressAdd}>
          <Icon name="plus" size={12} />
          <Text style={{fontSize: 14, marginLeft: 5, fontWeight: '600'}}>
            {name == 'Nguyên liệu' ? 'Nguyên liệu' : 'Thêm bước'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#555555',
    marginHorizontal: 20,
    marginVertical: 16,
    fontWeight: '800',
  },
  textInputContent: {
    height: 40,
    width: '92%',
    fontSize: 16,
    padding: 5,
    marginLeft: '4%',
  },
  buttonAddContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 200,
  },
});
