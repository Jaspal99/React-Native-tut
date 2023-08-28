import {Text, View} from 'react-native';
import style from '../styles/style';
import PropTypes from 'prop-types';
export default function MyText({text}) {
  return (
    <View>
      <Text style={style.textRed}>{text}</Text>
    </View>
  );
}

MyText.propType = {
  text: PropTypes.string.isRequired,
};
