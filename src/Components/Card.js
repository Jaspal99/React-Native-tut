import React, {useContext, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import style from '../Components/common/styles/style';
import PropTypes from 'prop-types';
import MyText from './common/Assignments/Section4';
import {ThemeContext} from './common/Context/ThemeContext';
export default function Card(props) {
  useEffect(() => {
    console.log('props --- ', props);
  }, []);

  const handleAddress = () => {
    alert('The text was pressed');
  };

  const isDarkMode = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
          width: 300,
          borderRadius: 2.5,
          margin: 2,
          padding: 5,
          alignItems: 'flex-start',
        },
      ]}>
      <Text
        onPress={() => handleAddress()}
        style={isDarkMode ? style.whiteText : style.blackText}>
        Address: {props?.card?.address}
      </Text>
      <Text style={isDarkMode ? style.whiteText : style.blackText}>
        Price: {props?.card?.price}
      </Text>
      <Text style={isDarkMode ? style.whiteText : style.blackText}>
        Rating: {props?.card?.rating}/5
      </Text>
      <Text style={isDarkMode ? style.whiteText : style.blackText}>
        Description: {props?.card?.description}
      </Text>
      <MyText text={`id : ${props?.id + 1}`} />
    </View>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
