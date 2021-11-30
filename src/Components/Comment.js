import React, {useEffect, useState} from 'react';
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
import { UpdateFoodApi } from '../api/UpdateFoodApi';

export default function Comment({food, User, comment, setComment}) {

  const [listComment, setListComment] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let listComments = await Promise.all(food.comment.map(async e =>{
      let params = {
        id: e.userId,
      };
      const UserComemt = await GetMeApi(params);
      return {
        content: e.content,
        user:UserComemt[0] 
      }
    })
    )
    setListComment(listComments)
    
  };

  const AddComemt = async() => {
    try{
    if(comment){
      let aComment = {
        userId: User.id,
        content: comment
      }
      console.log(aComment)
      let listComments = food.comment;
      listComments.push(aComment)
      const params = {
        "comment" : listComments
      }
      console.log('params fetch cmt', listComments)
      const response = await UpdateFoodApi(params, food.id)
      console.log(`add comment success`, response)
      
      let listCommentConvert = listComment;
      listCommentConvert.push({
        content: comment,
        user: User
      })
      setListComment(listCommentConvert)
      setComment('')
    }} catch (e) {
      console.log(`add comment failted`, e)
    }
  }
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
            justifyContent: 'center',
            marginLeft: 10,
            width: 100,
          }}
          onPress={AddComemt}>
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
        {listComment.map(e => {
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
                  uri: BASE_URL + e?.user?.avata?.url,
                }}></Image>
              <View style={{marginHorizontal: 10, marginRight: 30}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {e?.user?.username}
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
