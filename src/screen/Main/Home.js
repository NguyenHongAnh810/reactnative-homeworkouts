import React, {useContext, useEffect, UseState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateGlobal } from '../../../App';

const Home = props => {
  const [image, setImage] = useState(require('./../../inmage/background3.jpg'));
  const [imageArray, setBackground] = useState([
    require('./../../inmage/background3.jpg'),
    require('./../../inmage/background5.jpg'),
    require('./../../inmage/background6.jpg'),
    require('./../../inmage/background7.jpg'),
    require('./../../inmage/background8.jpg'),
  ]);
  const {setcheck} = useContext(StateGlobal)


  useEffect(() => {
    setInterval(() => {
      let numberItem = getRandomInt(0, 4);
      setImage(imageArray[numberItem]);
    }, 2000);
  }, []);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View>
        <Text style={styles.title}>Homepage</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  logout: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 132,
    marginTop: 450,
  },
});
export default Home;
