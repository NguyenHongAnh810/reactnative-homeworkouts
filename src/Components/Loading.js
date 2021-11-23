import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

// export default function Loading() {
//   const isLoading = useSelector(state => state.auth.loading);
//   return isLoading ? (
//     <View style={[styles.container, styles.horizontal]}>
//       <ActivityIndicator size="large" />
//     </View>
//   ) : null;
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFill,
//     zIndex: 9999,
//     justifyContent: 'center',
//     backgroundColor: '#00000044'
//     // backgroundColor: 'white'
//   },
//   horizontal: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
// });


import LottieView from 'lottie-react-native';

export default function Loading () {
  const isLoading = useSelector(state => state.auth.loading);
  return isLoading ? 
    
    <LottieView style= {{ backgroundColor: 'white' }}source={require('../assets/86212-cooking-foods.json')} autoPlay loop />
     
  : null;
}