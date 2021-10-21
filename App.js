import React from 'react';
import store from './src/redux/Store';
import {Provider} from 'react-redux';
import ControlStack from './src/navigator/ControlStack'



const App = () => {
  return (
    <Provider store={store}>
      <ControlStack />
    </Provider>
  );
};

export default App;
