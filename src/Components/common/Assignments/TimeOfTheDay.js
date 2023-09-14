import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import style from '../styles/style';
const TimeOfTheDay = () => {
  const nowT = new Date();
  const h = nowT.getHours();
  const [timeOfDay, setTimeOfDay] = useState('');
  const getMessage = hour => {
    if (hour >= 5 && hour < 12) {
      return 'Good morning!';
    } else if (hour >= 12 && hour < 17) {
      return 'Good afternoon!';
    } else if (hour >= 17 && hour < 21) {
      return 'Good evening!';
    } else {
      return 'Good night!';
    }
  };
  useEffect(() => {
    const currHourMsg = getMessage(h);
    setTimeOfDay(currHourMsg);
  }, []);
  return (
    <View style={style.MsgView}>
      <Text style={style.MsgText}>{timeOfDay}</Text>
    </View>
  );
};
export default TimeOfTheDay;
