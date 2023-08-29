/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, Text, useColorScheme, View } from 'react-native';

import Home from './src/Screen/Home';
import { ThemeContext } from './src/Components/common/Context/ThemeContext';
import useToggle from './src/Components/common/CustomHooks/UseToggle';

function App() {
  const [isDarkMode,setIsDarkMode] = useToggle(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black': 'white',
  };

  const toggleTheme = () =>{
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={isDarkMode}>
    <SafeAreaView style={{ 
      backgroundColor: backgroundStyle,
      height: '100%' }}>
         <View style={{
           margin:3,
           borderRadius:5,
           backgroundColor:isDarkMode?'black':'gold',
           color:isDarkMode?'gold':'black'
         }}>
         <Button color={isDarkMode?'gold':'black'}
          title='Toggle Color' onPress={toggleTheme} backgroundColor={isDarkMode?'black':'gold'}/>
         </View>
      <Home />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

export default App;
