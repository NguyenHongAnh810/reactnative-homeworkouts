import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const Launch = ({navigation}) => {
  return (
    <ImageBackground
    source={require('./../../assets/image/backgroundLaunch.jpg')}
    resizeMode="cover"
    style={styles.image}>
    <View style={styles.contrain}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.title}>MyCooking-MyLife</Text>
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/image/logo1.png')}
      />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login', {name: 'Login'});
          }}
          style={styles.Node}>
          <Text style={styles.textNode}>Continue</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contrain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 24
  },
  Node: {
    marginTop: 150,
  },
  textNode: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
    marginTop: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 40
  },
});
export default Launch;
