import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../../../assets/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const dataTag = [
  {
    name: 'Tất cả',
    icon: <Text/>,
    content: <Text>Tất cả</Text>,
  },
  {
    name: 1,
    icon: <FontAwesome name="star" color={'darkorange'} size={14} />,
    content: <Text>1</Text>,
  },
  {
    name: 2,
    icon: <FontAwesome name="star" color={'darkorange'} size={14} />,
    content: <Text>2</Text>,
  },
  {
    name: 3,
    icon: <FontAwesome name="star" color={'darkorange'} size={14} />,
    content: <Text>3</Text>,
  },
  {
    name: 4,
    icon: <FontAwesome name="star" color={'darkorange'} size={14} />,
    content: <Text>4</Text>,
  },
  {
    name: 5,
    icon: <FontAwesome name="star" color={'darkorange'} size={14} />,
    content: <Text>5</Text>,
  },
];

const renderIcon = (item, color = 'black') => {
  switch (item.name) {
    case 'Tất cả':
      return <Entypo name="news" size={16} color={color} />;
    case 'Đặc sắc':
      return <Entypo name="hand" size={16} color={color} />;
    case 'Nấu ăn':
      return <MaterialCommunityIcons name="pot-mix" size={16} color={color} />;
    case 'Quán ngon':
      return <Entypo name="location-pin" size={16} color={color} />;
    case 'Khác':
      return <AntDesign name="videocamera" size={16} color={color} />;
  }
};

export default function RenderTagSearch({tag, setTag}) {
  console.log('tag', tag)
  const [idChoose, setIdChoose] = useState(0);
  const RenderItemTag = ({item, index}) => {
    const [active, setActive] = useState(false);
    const [color, setColor] = useState('black');
    useEffect(() => {
      if (idChoose == index) {
        setActive(true);
        setColor('peru');
      }
    }, [idChoose]);
    return (
      <TouchableOpacity
        style={[styles.viewTag, {backgroundColor: active ? 'crimson' : '#dcdcdc'}]}
        onPress={() => {
          setIdChoose(index);
          setTag(dataTag[index].name)
        }}>
        <Text style={[styles.titleTag, {color: active ? 'white' : 'gray'}]}>
          {item.name}  
        </Text>
        <Text>  </Text>
        {item.icon}
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {dataTag.map((el, index) => {
        return <RenderItemTag item={el} index={index} />;
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
    paddingLeft: 16,
  },
  viewTag: {
    //   backgroundColor: '#dcdcdc',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTag: {},
  titleTag: {
    fontWeight: '700',
    // color: '#696969',
  },
});
