import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';

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
        source={require('../../assets/image/logo.png')}
      />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login', {name: 'Login'});
          }}
          style={styles.Node}>
          <Text style={styles.textNode}>Continue </Text>
          {/* <Icon
              style={styles.icon}
              name= "navigate-next"
              size={16}
              color={'#fff'}></Icon>         */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
  textNode: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: 40,
    borderRadius: 100
  },
  icon: {
    // margin: 12
  },
});
export default Launch;
