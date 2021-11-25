import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BASE_URL} from '../api/Common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GetMeApi} from '../api/GetMeApi';

export default function Comment({food, User, comment, setComment}) {
  return (
    <View style={styles.borderTitle}>
      <Text style={styles.title}>Bình luận</Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 32, height: 32, borderRadius: 100}}
          source={{
            uri: BASE_URL + User.avata.url,
          }}></Image>
        <View style={styles.headerInput}>
          <TextInput
            style={styles.textInput}
            onChangeText={setComment}
            value={comment}
            placeholder="Thêm bình luận"
            underlineColorAndroid="#00000000"
            onEndEditing={() => {}}
            numberOfLines={2}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}
          onPress={{}}>
          <FontAwesome name="send" size={22} color={'#EC7E5D'}></FontAwesome>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 40,
          borderTopWidth: 1,
          borderTopColor: '#B7B7B7',
          // alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
        }}>
        {food.comment.map(e => {
          const [user, setuser] = useState({
            avata: {
              url: ''
            },
            username: ''
          })
          const fetch = async () => {
            let params = {
              id: e.userId,
            };
            const UserComemt = await GetMeApi(params);
            console.log(`usercomemt`, UserComemt)
            setuser(UserComemt[0])
          };
           fetch()
           console.log('user', user)
          return (
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                borderBottomWidth: 0.3,
                paddingBottom: 10,
              }}>
              <Image
                style={{width: 32, height: 32, borderRadius: 100}}
                source={{
                  uri: BASE_URL + user.avata?.url,
                }}></Image>
              <View style={{marginHorizontal: 10, marginRight: 20}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {user.username}
                </Text>
                <Text style={{fontSize: 14}}>{e.content}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderTitle: {
    borderTopWidth: 1,
    marginHorizontal: 24,
    marginTop: 20,
    borderTopColor: '#B7B7B7',
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    // marginLeft: 24,
    marginVertical: 20,
    marginTop: 32,
    fontWeight: '600',
  },
  textInput: {
    height: 40,
    width: '92%',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '600',
  },
  headerInput: {
    width: '82%',
    height: 32,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#707070',
    alignItems: 'center',
    marginLeft: 10,
  },
});
