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

import HomeTabNavigator from './src/navigation/HomeTabNavigator'
import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';


import feed from './assets/data/feed';


const post1 = feed[0];
const post2 = feed[1];
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
