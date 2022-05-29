import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomHeader from './components/CustomHeader';
import {BASE_URL} from '../../../api/Common';

export default function PersonalPage({navigation, route}) {
  const {user} = route.params;
  return (
    <View>
      <CustomHeader navigation={navigation} />
      <ScrollView>
        <Image
          source={{uri: BASE_URL + user.avata?.url}}
          style={styles.coverAvatar}
        />
        <View style={styles.content}>
          <View style={styles.viewInfor}>
            <Image
              style={styles.avata}
              source={{
                uri: BASE_URL + user.avata?.url,
              }}></Image>
            <View
              style={{
                marginLeft: 10,
                height: 50,
                justifyContent: 'space-between',
                paddingVertical: 6,
              }}>
              <Text style={styles.names}>{user.username}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  coverAvatar: {
    width: '100%',
    height: 200,
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  names: {
    fontWeight: 'bold',
  },
  viewInfor: {
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
