import {TYPES} from './../actions/Action';
import { Alert } from 'react-native';

export const initalState = {
  user: {
    isLogin: false,
    infor: {},
  },
  loading: false,
};

function myReducer(state = initalState, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      console.log("reducer login success", action.response)
      state.user.isLogin = true;
      state.user.infor = action.response;
      return {...state};
    case TYPES.LOGOUT_SUCCESS:
      state.user.isLogin = false;
      return {...state};
    case TYPES.LOADING:
      state.loading = true;
      return {...state};
    case TYPES.LOADED:
      state.loading = false;
      return {...state};
    case TYPES.REGISTER_SUCCESS:
      console.log('register successfully: ', action.response);
      Alert.alert("Thông báo", "Đăng kí tài khoản thành công",[
        {
          text: "Đăng nhập",
          onPress: () =>  action.navigation.navigate({name: 'Login'}),
        },
        { text: "Thoát"}
      ]
        )
      return {...state};
    default:
      return {...state};
  }
}

export default myReducer;
