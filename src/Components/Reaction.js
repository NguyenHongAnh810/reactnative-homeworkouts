import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useDispatch, useSelector} from 'react-redux';

const ReactionData = [{}];

const Reaction = ({reaction, idFood}) => {
  const [heart, setHeart] = useState(0);
  const [crab, setCrab] = useState(0);
  const [flower, setFlower] = useState(0);
  const [angry, setAngry] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {

  }, [heart, crab, flower, angry]);

  useEffect(()=>{

  }, [])

  return (
    <View style={styles.constainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCrab(crab + 1);
        }}>
        <Image
          source={require('../assets/image/hand_clap.png')}
          style={styles.icon}
        />
        <Text style={styles.text}> {crab}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setFlower(flower + 1);
        }}>
        <Image
          source={require('../assets/image/flower.png')}
          style={styles.icon}
        />
        <Text style={styles.text}> {flower}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setAngry(angry + 1);
        }}>
        <Image
          source={require('../assets/image/angry.png')}
          style={styles.icon}
        />
        <Text style={styles.text}> {angry}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setHeart(heart + 1);
        }}>
        <Icon name="heart" color="red" size={16} />
        <Text style={styles.text}> {heart}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {borderRightWidth: 0}]}
        onPress={() => {
          // setSad(sad + 1);
        }}>
        <AntDesign name="message1" color="blue" size={16} />
        <Text style={styles.text}> 0</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'silver',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 14,
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'silver',
  },
  text: {
    fontSize: 13,
    color: 'darkred',
    fontWeight: '600',
  },
  icon: {
    height: 16,
    width: 16,
  },
});
export default Reaction;
