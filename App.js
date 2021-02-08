/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults'
import Post from './src/components/Post';



import Entype from 'react-native-vector-icons/Entypo';
import feed from './assets/data/feed';


const post1 = feed[0];
const post2 = feed[1];
// 어레이 형식이기에 인덱스 형식으로 불러오기
const App: () => React$Node = () => {
return (
  <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post2}/> */}
        <SearchResultsScreen/>
          
      </SafeAreaView>
    </>
  );
};

export default App;
