import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const {height, wigth} = Dimensions.get('window');

const SuggestSearch = ({foodSuggest, onPress}) => {
  const [image, setImage] = useState()
  useEffect(() => {
    switch(foodSuggest){
      case 'Cơm': setImage(require('../assets/image/riceIcon.png'))
      break;
      case 'Cháo': setImage(require('../assets/image/chaoIcon.png'))
      break;
      case 'Phở': setImage(require('../assets/image/phoIcon.png'))
      break;
      case 'Bánh mì': setImage(require('../assets/image/banhmiIcon.png'))
      break;
      case 'Ốc xào': setImage(require('../assets/image/ocIcon.png'))
      break;
      case 'Trà sữa': setImage(require('../assets/image/trasuaIcon.png'))
      break;
      case 'Bít tết': setImage(require('../assets/image/bittetIcon.png'))
      break;
      case 'Sushi': setImage(require('../assets/image/sushiIcon.png'))
      break;
    }
  }, [])
  
  return (
    <View style = {styles.contrain}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source = {image} style={styles.tinyLogo}/>
          <Text style = {styles.textName}>{foodSuggest}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    
  },
  button: {
    height: 90,
    width:  90,
    margin: 4,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  }
});

export default SuggestSearch;
