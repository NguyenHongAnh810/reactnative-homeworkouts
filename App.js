import React, {useEffect} from 'react';
import store from './src/redux/store/Store';
import {Provider} from 'react-redux';
import ControlStack from './src/navigator/ControlStack';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <ControlStack />
      </Provider>
    </PaperProvider>
  );
};

export default App;
