import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function AddContent({index, value, onchange, onEndEditing}) {
  return (
    <View style={styles.contrainer}>
      <TextInput
        style={styles.textInputContent}
        onChangeText={txt => onchange(index, txt)}
        value={value}
        placeholder="250g bột"
        underlineColorAndroid="white"
        onEndEditing={onEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    alignItems: 'center',
    marginTop: 12,
    borderBottomWidth: 0.3,
    marginHorizontal: 20,
  },
  textInputContent: {
    height: 40,
    width: '92%',
    fontSize: 16,
    padding: 5,
    marginLeft: 0,
  },
});
