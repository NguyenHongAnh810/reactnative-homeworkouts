import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef} from 'react';
  import CustomHeader from './components/CustomHeader';
  import {BASE_URL} from '../../../api/Common';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import TabViewPersonalProfile from '../../../navigator/TabViewPersonalProfile';
  const listItem = [
    {
      icon: <FontAwesome5 name="user-friends" size={20} />,
      name: '302 bạn',
    },
    {
      icon: <Ionicons name="person-add" size={20} />,
      name: 'Kết bạn',
    },
    {
      icon: <MaterialCommunityIcons name="message-processing" size={20} />,
      name: 'Nhắn tin',
    },
  ];
  
  export default function EditProfile({navigation, route}) {
    const {user} = route.params;
    // const ref = useRef()
    return (
      <View style={{flex: 1}}>
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
                <Text style={styles.mail}>{user.email}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreInfo} onPress = {()=>{
              ref.current.openModal(123)
            }}>
              <Entypo name="dots-three-horizontal" size={16} color="gray" />
              <Text style={{color: 'gray', fontSize: 12, marginLeft: 6}}>
                Xem thêm thông tin
              </Text>
            </TouchableOpacity>
            <View style={styles.friend}>
              {listItem.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginHorizontal: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'lightgray',
                        borderRadius: 100,
                        height: 40,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {item.icon}
                    </View>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={{height: 500}}>
            <TabViewPersonalProfile navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    content: {
      backgroundColor: 'white',
      justifyContent: 'space-between',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      marginTop: -20,
      paddingTop: 10,
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
      paddingLeft: 10,
    },
    friend: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    mail: {
      color: 'gray',
      fontSize: 12,
    },
    moreInfo: {
      flexDirection: 'row',
      paddingLeft: 12,
      marginTop: 12,
      alignItems: 'center',
    },
  });
  