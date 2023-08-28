import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import style from '../Components/common/styles/style';
import PropTypes from 'prop-types';
import MyText from './common/Assignments/Section4';
export default function Card({card}) {
  useEffect(() => {
    console.log('props --- ', card);
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
        Address: {card?.address}
      </Text>
      <Text>Price: {card?.price}</Text>
      <Text>Rating: {card?.rating}/5</Text>
      <Text>Description: {card?.description}</Text>
      <MyText text={'id :'} />
    </View>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
