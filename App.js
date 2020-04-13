import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import MainScreenNavigator from './App/Config/router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#191919" barStyle="light-content" />
        <MainScreenNavigator />
      </View>
    );
  }
}

export default App;
