import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function AddMaking({value, index, onchange }) {
  return (
    <View>
      <View style={{
        flexDirection: 'row', 
      // alignItems: 'center',
       marginTop: 12}}>
        <View style={styles.viewIndex}>
          <Text style={styles.index}>{index + 1}</Text>
        </View>
        <TextInput
          multiline={true}
          style={styles.textInputContent}
          onChangeText={txt => onchange(index, txt)}
          value={value}
          placeholder="Trộn bột với nước đến khi đặc lại"
          underlineColorAndroid="white"
          onEndEditing={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContent: {
    // height: 40,
    width: '83%',
    fontSize: 16,
    padding: 5,
    marginLeft: 10,
    borderBottomWidth: 0.3,
    // marginRight: 20
  },
  include: {
    fontSize: 12,
    marginLeft: 8,
    marginVertical: 12,
  },
  //   include1: {
  //     fontSize: 12,
  //     marginLeft: 4,
  //     marginVertical: 8,
  //   },
  index: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
  viewIndex: {
    borderRadius: 10,
    backgroundColor: '#363636',
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10
  },
});
