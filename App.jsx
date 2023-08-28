/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './src/Screen/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#1a1a1a', height: '100%' }}>
      {/* <View style={{ display: 'flex', alignItems: 'center', padding: '5%' }}> */}
      <Home />
      {/* <Text>Simple</Text> */}
      {/* </View> */}
    </SafeAreaView>
  );
}

export default App;
