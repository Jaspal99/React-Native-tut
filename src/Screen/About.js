import {Text, View} from 'react-native';
import React, {Component} from 'react';
// const {Component} = require('react');

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          onPress={() => {
            this.setState({name: 'Jaspal'});
          }}>
          This is about page of, {this?.state?.name}
        </Text>
      </View>
    );
  }
}
export default About;
