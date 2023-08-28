import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import style from '../Components/common/styles/style';
import PropTypes from 'prop-types';
import MyText from './common/Assignments/Section4';
export default function Card(props) {
  useEffect(() => {
    console.log('props --- ', props);
  }, []);

  const handleAddress = () => {
    alert('The text was pressed');
  };

  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          width: 300,
          borderRadius: 2.5,
          margin: 2,
          padding: 5,
          alignItems: 'flex-start',
        },
      ]}>
      <Text onPress={() => handleAddress()} style={style.text}>
        Address: {props?.card?.address}
      </Text>
      <Text>Price: {props?.card?.price}</Text>
      <Text>Rating: {props?.card?.rating}/5</Text>
      <Text>Description: {props?.card?.description}</Text>
      <MyText text={`id : ${props?.id}`} />
    </View>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
