import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {TYPES} from '../../../../redux/actions/Action';
import {TYPES as TYPESGETLIST} from '../../../../redux/actions/ActionFetchList';
import {CreateRateApi, getListRateApi} from '../../../../api/Rate';
import BottomSheetRate from './BottomSheetRate';

export default function Evaluates({food, changeRate = () => {}, sheetRef}) {
  const [showCreateEva, setShowCreateEva] = useState(false);
  const [content, setContent] = useState();
  const [listRate, setListRate] = useState([]);
  const [rateMe, setRateMe] = useState(0);
  const user = useSelector(state => state.auth.user.infor);
  const newFood = useSelector(state => state.product.newFood);
  const dispatch = useDispatch();
  const numberRate = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(food.rate ?? 0);
  const index = newFood.findIndex(item => {
    return item.id == food.id;
  });

  const resetData = () => {
    setShowCreateEva(false);
    setContent(null);
    setRateMe(0);
  };

  const getListRate = async () => {
    const params = {
      idFood: food.id,
    };
    const response = await getListRateApi(params);
    setListRate(response);
  };

  const createRate = async () => {
    try {
      dispatch({
        type: TYPES.LOADING,
      });
      const params = {
        idFood: food.id,
        idUser: user.id,
        comment: content,
        rate: rateMe,
      };
      await CreateRateApi(params);
      setTimeout(() => {
        dispatch({
          type: TYPES.LOADED,
        });
      }, 1000);
      resetData();
      getListRate();
    } catch (e) {
      console.log('e', e);
      dispatch({
        type: TYPES.LOADED,
      });
    }
  };

  const countRate = () => {
    let sum = 0;
    if (listRate.length > 0) {
      listRate.map(item => {
        sum = sum + item.rate;
      });
      const count = sum / listRate.length;
      setRate(count.toFixed(1));
      if (changeRate) {
        changeRate(count.toFixed(1));
      }
      dispatch({
        type: TYPESGETLIST.ADD_RATE_LIST_FOOD,
        params: {
          index: index,
          rate: count,
        },
      });
    }
  };

  useEffect(() => {
    countRate();
  }, [listRate]);

  useEffect(() => {
    getListRate();
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={{}}
        onPress={() => {
          sheetRef.current.snapTo(0);
        }}>
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
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.caret}
        onPress={() => {
          setShowCreateEva(!showCreateEva);
        }}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            fontWeight: '700',
            color: 'black',
          }}>
          Đánh giá
        </Text>
        <FontAwesome
          name={showCreateEva ? 'caret-down' : 'caret-right'}
          color={'black'}
          size={18}
          style={{marginLeft: 5}}
        />
      </TouchableOpacity>
      {showCreateEva && (
        <View style={styles.containerCreate}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {numberRate.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setRateMe(item);
                  }}>
                  <FontAwesome
                    name={
                      rateMe >= item
                        ? 'star'
                        : rateMe > item - 1
                        ? 'star-half-empty'
                        : 'star-o'
                    }
                    color={'darkorange'}
                    size={22}
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              );
            })}
            <Text
              style={{color: 'darkorange', fontSize: 18, fontWeight: '700'}}>
              {rateMe}
            </Text>
          </View>
          <TextInput
            value={content}
            onChangeText={setContent}
            placeholder="Viết cảm nhận của bạn về món ăn này ..."
            multiline={true}
            style={{marginHorizontal: 20, minHeight: 80}}
          />
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity
              style={styles.buttonSend}
              onPress={() => {
                if (rateMe) {
                  createRate();
                }
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                gửi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  caret: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  containerCreate: {
    borderWidth: 1,
    borderColor: 'darkorange',
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonSend: {
    backgroundColor: 'darkorange',
    width: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingVertical: 3,
    marginRight: 10,
  },
});
