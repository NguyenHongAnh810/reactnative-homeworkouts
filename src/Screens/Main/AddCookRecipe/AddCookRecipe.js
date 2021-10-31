import React, {useState, useEffect,  useCallback, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';


import LoginNode from '../../../Components/LoginNode';
import ButtonAdd from '../../../Components/ButtonAdd';
import ListContents from '../../../Components/ListContents';





const AddCookRecipe = () => {
  const [nameFood, setNameFood] = useState('');
  const [content, setContent] = useState(['','']);
  const [making, setMaking] = useState(['','']);
  const [isValid, setIsValid] = useState(false);
  const [isClear, setIsClear] = useState(false);

  const checkContent = () => {
    var check = false;
    for (var i = 0; i < content.length; i++) {
      if (content[i] != '') {
        check = true;
        console.log(content[i] + check);
        break;
      }
    }
    return check;
  };
  const checkMaking = () => {
    var check = false;
    for (var i = 0; i < making.length; i++) {
      if (content[i] != '') {
        check = true;
        break;
      }
    }
    return check;
  };

  useEffect(() => {
    if (nameFood != '' && checkContent()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (nameFood != '') {
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
    const arr_new = [...content]
    arr_new[index] = value
    setContent(arr_new)
  }

  const changeMaking = (index, value) => {
    const arr_new = [...making]
    arr_new[index] = value
    setMaking(arr_new)
  }

  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1)

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Đăng ảnh</Text>
        <Text style={styles.panelSubtitle}>Đăng tải hình đại diện món ăn</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => sheetRef.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  </View>
  );
  
  const takePhotoFromCamera = () => {
    alert("open camera")
  }
  const choosePhotoFromLibrary = () => {
    alert("open library")
  }

  return (
    
    <View style={styles.contrainer}>
       <BottomSheet
        ref={sheetRef}
        snapPoints={[330, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        renderHeader={renderHeader}
      />
      <View style={styles.headers}>
        <LoginNode nameNode="Lên sóng" isValid={isValid} onPress={() => {
          console.log("content", content, making)
        }} />
        <ButtonAdd
          nameNode="Xóa"
          isValid={isClear}
          border={false}
          //   marginEnd={'50%'}
        />
      </View>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.buttonImage} onPress={() => sheetRef.current.snapTo(0)}>
            <Image
              style={styles.logoCamera}
              source={require('../../../assets/image/logoCamera.png')}
            />
            <Text style={{fontSize: 20, fontWeight: '700', color: '#898989'}}>
              Đăng tải hình đại diện món ăn
            </Text>
            <Text style={{fontSize: 14, color: '#898989'}}>
              Hãy truyền cảm hứng này đến mọi người!
            </Text>
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
    flex: 1,
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
    marginHorizontal: 16
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },panel: {
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
