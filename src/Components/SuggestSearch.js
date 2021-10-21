import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, wigth} = Dimensions.get('window');

const SuggestSearch = ({foodSuggest, onPress}) => {
  return (
    <View style = {styles.contrain}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <ImageBackground
          style={styles.imageBackground}
          source={foodSuggest.image}
          blurRadius={4}
          imageStyle={{borderRadius: 4}}
          >
          <Text style = {styles.textName}>{foodSuggest.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    
  },
  imageBackground: {
    height: 70,
    width: 160, 
  },
  button: {
    height: 70,
    width: 160,
    margin: 4,
    // marginVertical: 5,
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 50,
    marginLeft: 10
  }
});

export default SuggestSearch;
