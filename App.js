/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar,} from 'react-native';
import Router from './src/navigation/Router'
import DestinationSearch from './src/screens/DestinationSearch'
import HomeScreen from './src/screens/Home';
// 어레이 형식이기에 인덱스 형식으로 불러오기
const App: () => React$Node = () => {
return (
  <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
