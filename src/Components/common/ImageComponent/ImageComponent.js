import {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

export default ImageComponent = () => {
  const [textVal, setTextVal] = useState('');
  return (
    <ScrollView>
      <Image
        source={require('../../../../assets/logo.jpg')}
        style={{width: '100%', height: '100%'}}
        resizeMode="center"
      />
      <TextInput
        value={textVal}
        onChangeText={value => {
          setTextVal(value);
        }}
        autoFocus={true}
        placeholder="Please enter your name"
        style={{borderWidth: 1, padding: 2, borderRadius: 5}}
      />
      <Pressable style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Click here</Text>
      </Pressable>
    </ScrollView>
  );
};
