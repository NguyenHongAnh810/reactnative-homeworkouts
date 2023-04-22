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
import {TYPES} from '../../../../redux/actions/Action';
import {useDispatch} from 'react-redux';

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
  // {
  //   name: 'Nấu ăn',
  //   icon: '',
  //   content: <Text>Nấu ăn</Text>,
  // },
  // {
  //   name: 'Quán ngon',
  //   icon: '',
  //   content: <Text>Quán ngon</Text>,
  // },
  // {
  //   name: 'Khác',
  //   icon: '',
  //   content: <Text>Khác</Text>,
  // },
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

export default function RenderTag({tagId = 0, setTagId = () => {}}) {
  const dispatch = useDispatch();
  const [idChoose, setIdChoose] = useState(tagId);

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
        style={styles.viewTag}
        onPress={() => {
          dispatch({
            type: TYPES.LOADING,
          });
          console.log('index', index)
          setIdChoose(index);
          setTagId(index);
          setTimeout(() => {
            dispatch({
              type: TYPES.LOADED,
            });
          }, 1000);
        }}>
        {renderIcon(item, color)}
        <Text style={[styles.titleTag, {color: active ? 'peru' : 'black'}]}>
          {item.name}
        </Text>
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
