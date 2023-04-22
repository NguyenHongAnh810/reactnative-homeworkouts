import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  NativeModules,
  ActivityIndicator,
  Image,
} from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Color} from '../../../../assets/color';
import LottieView from 'lottie-react-native';
import {getListRateApi} from '../../../../api/Rate';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';
import {GetMeApi} from '../../../../api/GetMeApi';
import {BASE_URL} from '../../../../api/Common';
import { ScrollView } from 'react-native-gesture-handler';

export default function BottomSheetRate({bs, food}) {
  const focus = useIsFocused();
  const [listRate, setListRate] = useState([]);
  const numberRate = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(food.rate ?? 0);
  const [loading, setLoading] = useState(false);

  const getListRate = async () => {
    setLoading(true);
    const params = {
      idFood: food.id,
    };
    const response = await getListRateApi(params);
    setListRate(response);
    setTimeout(() => setLoading(false), 2000);
  };

  const countRate = () => {
    let sum = 0;
    if (listRate.length > 0) {
      listRate.map(item => {
        sum = sum + item.rate;
      });
      const count = sum / listRate.length;
      setRate(count.toFixed(1));
    }
  };

  useEffect(() => {
    countRate();
  }, [listRate]);

  const RateItem = ({item, index}) => {
    const [user, setUser] = useState();
    console.log('item', item);
    const getUserInfo = async () => {
      const params = {
        id: item.idUser,
      };
      const response = await GetMeApi(params);
      setUser(response[0]);
    };

    useEffect(() => {
      getUserInfo();
    }, [item]);

    return (
      <View>
        <View style={styles.viewInfor}>
          <Image
            style={styles.avata}
            source={{
              uri: BASE_URL + user?.avata?.url,
            }}
          />
          <View
            style={{
              marginLeft: 10,
              height: 50,
              justifyContent: 'space-between',
              paddingVertical: 6,
            }}>
            <Text style={styles.names}>{user?.username}</Text>
            <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginRight: 10,
              }}>
            {numberRate.map((itemRate, index) => {
              return (
                <FontAwesome
                  name={
                    item?.rate >= itemRate
                      ? 'star'
                      : 'star-o'
                  }
                  color={'darkorange'}
                  size={14}
                  style={{marginRight: 10}}
                />
              );
            })}
          </View>
              <Text style={styles.mail}>{item.comment}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={styles.contentPanel}>
        <TouchableOpacity
          style={styles.panelButton}
          onPress={() => bs.current.snapTo(1)}>
          <Text style={styles.panelButtonTitle}>Hủy</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={{height: 300, width: 200, marginTop: -150}}>
            <LottieView
              style={{backgroundColor: 'transparent'}}
              source={require('../../../../assets/89850-cooking.json')}
              autoPlay
              loop
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginRight: 10,
              }}>
              <Text style={{color: 'darkorange'}}>{rate}</Text>
              <Text style={{color: 'darkorange', fontSize: 12}}>
                ({listRate.length})
              </Text>
            </View>
            {numberRate.map((item, index) => {
              return (
                <FontAwesome
                  name={
                    rate >= item
                      ? 'star'
                      : rate > item - 1
                      ? 'star-half-empty'
                      : 'star-o'
                  }
                  color={'darkorange'}
                  size={20}
                  style={{marginRight: 10}}
                />
              );
            })}
          </View>
          {loading ? (
            <ActivityIndicator
              size={'small'}
              style={{height: 200}}
              color="gray"
            />
          ) : (
            <View style = {{width: "100%", height: 420, marginTop: 0, zIndex: 1}}>
            <ScrollView style = {{width: "100%", paddingTop: 10, paddingLeft: 20, paddingBottom: 20, zIndex: 10}} >
              {listRate.map((item, index) => {
                return <RateItem item={item} index={index} />;
              })}
            </ScrollView>
            </View>
          )}
        </View>
      </View>
    </View>
  );
  return (
    <BottomSheet
      ref={bs}
      snapPoints={[700, 0]}
      renderContent={renderInner}
      //   renderHeader={renderHeader}
      initialSnap={1}
      //   callbackNode={fall}
      enabledGestureInteraction={true}
      enableOverDrag={true}
      onOpenStart={() => {
        getListRate();
      }}
    />
  );
}

const styles = StyleSheet.create({
  panel: {
    // padding: 20,
    backgroundColor: 'white',
    // paddingTop: 20,
    height: 300,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    marginLeft: '82%',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  contentPanel: {
    backgroundColor: Color.orange,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    backgroundColor: 'white',
    marginTop: 100,
    height: 600,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
    // justifyContent: 'center'
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
    marginVertical: 12,
    // alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: "red",
    width: "100%",
    marginBottom: 30
  },
  mail: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
});
