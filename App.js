// import React from 'react'
// import { View, Text } from 'react-native'
// import AuthStack from './navigator/AuthStack'
// import MainStack from './navigator/MainStack'

//  const App = () => {
//   return (
//     <View style={{flex: 1}}>
//     <MainStack/>
//     </View>
//   )
// }

// export default App;
import React from 'react';
import store from './src/redux/Store'
import { Provider} from 'react-redux'
import ControlStack from './navigator/ControlStack'
import MainStack from './navigator/MainStack';




const App = () => {
  return(
    <Provider store ={store}>
      <MainStack/>
    </Provider>
    )
}

export default App
