import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import Swiper from 'react-native-swiper';

import LoginNode from '../../../Components/LoginNode';
import ButtonAdd from '../../../Components/ButtonAdd';
import ListContents from '../../../Components/ListContents';
import BottomSheetUpdateImage from '../../../Components/BottomSheetUpdateImage';
import {TYPES as TYPES1} from '../../../redux/actions/Action';
import { TYPES } from '../../../redux/actions/ActionFetchList';

import {UploadImageApi} from '../../../api/UploadImageApi';
import {AddFoodApi} from '../../../api/AddFoodApi';
import {GetListFoodApi} from '../../../api/GetListFoodApi'
import { NavigationContainer } from '@react-navigation/native';

const AddCookRecipe = ({navigation}) => {
  const [nameFood, setNameFood] = useState('');
  const [content, setContent] = useState(['', '']);
  const [making, setMaking] = useState(['', '']);
  const [isValid, setIsValid] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [image, setImage] = useState(['']);
  const [upload, setUpload] = useState(false);
  const User = useSelector(state => state.auth.user.infor)
  console.log(User.id)
  const dispatch = useDispatch();

  console.log('images', image);

  const checkContent = () => {
    var check = false;
    for (var i = 0; i < content.length; i++) {
      if (content[i] != '') {
        check = true;
        break;
      }
    }
    return check;
  };
  const checkMaking = () => {
    var check = false;
    for (var i = 0; i < making.length; i++) {
      if (making[i] != '') {
        check = true;
        break;
      }
    }
    return check;
  };

  useEffect(() => {
    if (nameFood != '' && checkContent() && checkMaking() && image[0]) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (nameFood != '' || checkContent() || checkMaking()) {
      setIsClear(true);
    } else setIsClear(false);
  }, [content[0], making, nameFood]);

  const onPressAddContent = () => {
    let arr = content;
    arr.push('');
    setContent([...arr]);
  };

  const onPressAddMaking = () => {
    let arr = making;
    arr.push('');
    setMaking([...arr]);
  };

  const changeContent = (index, value) => {
    const arr_new = [...content];
    arr_new[index] = value;
    setContent(arr_new);
  };

  const changeMaking = (index, value) => {
    const arr_new = [...making];
    arr_new[index] = value;
    setMaking(arr_new);
  };
  const clear = () => {
    let images = ['']
    let nameF = '';
    let content = ['', ''];
    let making = ['', ''];
    setNameFood(nameF);
    setContent([...content]);
    setMaking([...making]);
    setImage([...images])
  };
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);

  const UploadReacipe = async () => {
    try {
      if (isValid) {
        dispatch({
          type: TYPES1.LOADING,
        });
        console.log(image);
        const formData = new FormData();
        image.forEach ( element => {
          formData.append('files', {
              uri: element,
              name: 'file',
              type: 'image/jpg'
            });
        });
        const res = await UploadImageApi(formData)
        console.log(res);
        let ids = res.data.map(e => { return e.id }) 
        console.log(ids);
        let images = ids.map(e=>{
          return {
            id: e
          }
        })
        let recipe = making.map((e, index)=>{
          return {
            order: index,
            making: e
          }
        })
        let ingredients = content.map((e, index)=>{
          return {
            order: index,
            content: e
          }
        })
        const params = {
          idUser: User.id,
          name: nameFood,
          image: images,
          recipe: recipe,
          ingredients: ingredients
        }
        const response = await AddFoodApi(params)
        const params1 = {
          idUser: User.id,
        };
        dispatch({
          type: TYPES.FETCH_MYFOODLIST_REQUEST,
          params: params1,
        });
        console.log(response)
        clear()
        navigation.navigate('AddCookSuccess', {food: response})
        dispatch({
          type: TYPES1.LOADED,
        });
        
      }
    } catch (e) {
      dispatch({
        type: TYPES1.LOADED,
      });
      console.log('add recipe failted: ', e);
    }
  }

  return (
    <View style={{flex: 1}}>
      <BottomSheetUpdateImage
        fall={fall}
        bs={sheetRef}
        note="Đăng tải hình đại diện món ăn"
        title="Đăng ảnh"
        setImage={setImage}
        multiple={true}
      />
      <Animated.View
        style={{
          backgroundColor: '#F6F5F1',
          flex: 1,
          alignItems: 'center',
          opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),
        }}>
        <View style={styles.headers}>
          <LoginNode
            nameNode="Lên sóng"
            isValid={isValid}
            onPress={() => {
              UploadReacipe()
            }}
          />
          <ButtonAdd
            nameNode="Xóa"
            isValid={isClear}
            border={false}
            onPress={clear}
          />
        </View>
        <ScrollView style={{flex: 1, width: '100%'}}>
          <View style={styles.image}>
            <TouchableOpacity
              style={styles.buttonImage}
              onPress={() => sheetRef.current.snapTo(0)}>
              {image[0] != '' ? (
                <Swiper showsButtons={true}>
                  {image.map((e, index) => {
                    return (
                      <View>
                        <ImageBackground
                          style={styles.image}
                          source={{uri: e}}></ImageBackground>
                      </View>
                    );
                  })}
                </Swiper>
              ) : (
                <View style={styles.buttonImage}>
                  <Image
                    style={styles.logoCamera}
                    source={require('../../../assets/image/logoCamera.png')}
                  />
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: '#898989'}}>
                    Đăng tải hình đại diện món ăn
                  </Text>
                  <Text style={{fontSize: 14, color: '#898989'}}>
                    Hãy truyền cảm hứng này đến mọi người!
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <TextInput
              style={styles.textInputName}
              onChangeText={setNameFood}
              value={nameFood}
              placeholder="Tên món: Bánh bột mì"
              placeholderTextColor="#C2C2C2"
              underlineColorAndroid="white"
              onEndEditing={() => {}}
            />
          </View>
          <ListContents
            name="Nguyên liệu"
            array={content}
            onchange={changeContent}
            onPressAdd={onPressAddContent}
          />
          <ListContents
            name="Cách làm"
            array={making}
            onPressAdd={onPressAddMaking}
            onchange={changeMaking}
          />
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contrainer: {
    backgroundColor: '#F6F5F1',
    flex: 1,
    alignItems: 'center',
  },
  headers: {
    flexDirection: 'row-reverse',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    flex: 0.05,
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonImage: {
    height: 240,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCamera: {
    height: 120,
    width: 150,
  },
  textInputName: {
    height: 50,
    width: '92%',
    fontSize: 20,
    padding: 5,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#EC7E5D',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
});

export default AddCookRecipe;
