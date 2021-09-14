/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

// var initialState = {
//     count : 0
//   }
  
  
//   var myReducer = (state = initialState, action) => {
//     if (action.type === 'UP') {
//         // let newState = {...state}
//         initialState.count= initialState.count+1;
//         return initialState.count;
//     }
//     if (action.type === 'DOWN') {
//         // let newState = {...state}
//         initialState.count= initialState.count-1;
//         return initialState.count;
//     }
    
//     return state;
//   }
  
//   const store = createStore(myReducer); 
  

// export default index = () => {
//   <Provider store={store}>
//     <App />
//   </Provider>;
// };

AppRegistry.registerComponent(appName, () => App);
