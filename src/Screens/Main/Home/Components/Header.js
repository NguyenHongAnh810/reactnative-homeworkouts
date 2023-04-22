import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../../assets/color';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cook</Text>
      <View style={styles.viewIcon}>
        {/* <TouchableOpacity style={styles.viewOneIcon} onPress={()=>{
          navigation.navigate("Chat")
        }}>
          <MaterialCommunityIcons
            name="message-text-outline"
            size={20}
            color="black"
          />
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.viewOneIcon}>
          <FontAwesome name="bell" size={20} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  viewIcon: {
    flexDirection: 'row',
  },
  viewOneIcon: {
    backgroundColor: 'silver',
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 5,
  },
  title: {
    color: Color.orange,
    fontSize: 20,
    fontWeight: '700',
  },
});
