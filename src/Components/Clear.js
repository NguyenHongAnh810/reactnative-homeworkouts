import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';

export default function Clear({onPressClear}) {
    return (
        <View>
           <TouchableOpacity
              style={styles.clear}
              onPress={onPressClear}>
              {/* <Feather name="x" size={12} color="white" /> */}
              <Text>Xóa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    clear: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // height: 16,
        // width: 16,
        // marginVertical: 10,
        backgroundColor: 'white',
      },
  });
