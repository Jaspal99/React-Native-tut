import {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
export default ImageComponent = () => {
  const [textVal, setTextVal] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <View>
      {/* <Image
        source={require('../../../../assets/logo.jpg')}
        style={{width: 100, height: 100}}
        // resizeMode="center"
      /> */}
      <TextInput
        value={textVal}
        onChangeText={value => {
          setTextVal(value);
        }}
        autoFocus={true}
        placeholder="Please enter your name"
        style={{borderWidth: 1, padding: 2, borderRadius: 5}}
      />
      <View style={{width: '100%', backgroundColor: 'blue'}}>
        <Text>Keep me logged In</Text>
        <Switch
          value={loggedIn}
          onValueChange={value => {
            setLoggedIn(value);
          }}
        />
      </View>
      <Pressable
        style={{
          backgroundColor: 'black',
          width: '50%',
          // height: 200,
          margin: 2,
          borderRadius: 5,
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          // flex: 1,
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
        <Text style={{color: 'white'}}>Click here</Text>
      </Pressable>
    </View>
  );
};
