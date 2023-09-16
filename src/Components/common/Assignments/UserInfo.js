import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import style from '../styles/style';
import {useState} from 'react';

export default function UserInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [finalName, setFinalName] = useState('');
  const [finalAge, setFinalAge] = useState('');

  const handleSubmit = () => {
    setFinalName(name);
    setFinalAge(age);
  };
  return (
    <SafeAreaView style={style.mainPageLayout}>
      <View style={style.headingView}>
        <Text style={style.heading}>User Information</Text>
      </View>
      <View style={style.inputView}>
        <TextInput
          style={style.inputField}
          placeholder="Please enter your name"
          placeholderTextColor={'black'}
          onChangeText={value => setName(value)}
          value={name}
        />
        <TextInput
          style={style.inputField}
          placeholder="Please enter your age"
          placeholderTextColor={'black'}
          onChangeText={value => setAge(value)}
          keyboardType="numeric"
          value={age}
        />
        <Pressable style={style.submitBtn} onPress={handleSubmit}>
          <Text style={style.submitBtnText}>Submit</Text>
        </Pressable>
      </View>
      <View style={style.inputDisplayView}>
        <Text style={style.displayValue}>Name: {finalName}</Text>
        <Text style={style.displayValue}>Age: {finalAge}</Text>
      </View>
    </SafeAreaView>
  );
}
