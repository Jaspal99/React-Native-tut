import {Text, View} from 'react-native';
import style from '../styles/style';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
export default function MyText({text}) {
  useEffect(() => {
    console.log(`initial value ${text}`);
  }, []);

  return (
    <View>
      <Text style={style.textRed}>{text}</Text>
    </View>
  );
}

MyText.propType = {
  text: PropTypes.string.isRequired,
};
