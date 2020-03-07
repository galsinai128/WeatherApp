import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Weather from './components/Weather'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Weather></Weather>
      </SafeAreaView>
    </>
  );
};


export default App;
