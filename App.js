// author - Tushar Jain
// contact - 9354527144
// email - tusharlock10@gmail.com
import React from 'react';
import {View, StatusBar} from 'react-native';
import Main from './src/main';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* changing status bar color to match with white background */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Main />
    </View>
  );
};

export default App;
