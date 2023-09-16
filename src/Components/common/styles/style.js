import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  text: {
    color: 'blue',
  },
  textGold: {
    color: '#ffa115',
  },
  sideBySide: {
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#ffa115 !important',
    color: 'black !important',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  MsgView: {
    padding: 5,
    backgroundColor: 'black !important',
    borderRadius: 2,
    textAlign: 'center',
    height: 100,
  },
  MsgText: {
    color: '#ffa115',
    backgroundColor: 'black !important',
  },
  heading: {
    fontSize: 25,
    color: '#998029',
  },
  headingView: {
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  inputView: {
    flex: 5,
    backgroundColor: 'gray',
  },
  inputDisplayView: {
    flex: 5,
    backgroundColor: 'lightgray',
  },
  mainPageLayout: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius: 4,
  },
  displayValue: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    padding: 5,
  },
  submitBtn: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 7,
    padding: 10,
    margin: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
  },
});
export default style;
