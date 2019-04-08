import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { countdownIncrement } from './js/actions/action_countdown';
import { countdownStore } from './js/stores/store_countdown';

const store = countdownStore();

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentCountdown: 0,
    }

  }

   render() {
    store.subscribe(() => {
      console.log(store.getState())
      this.setState({
        currentCountdown: store.getState().countdown.count,
      })
    })

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Countdown : {this.state.currentCountdown}</Text>
        <CountdownIncrementButton />
        <CountdownResetButton />
      </View>
    );
  }
}

class CountdownIncrementButton extends React.Component {
  CountdownIncrement = (add) => {
    store.dispatch(countdownIncrement(add));
  }

  render(){
    return (
      <Button title='INCREMENT' onPress={() => this.CountdownIncrement(4)} />
    )
  }
}

class CountdownResetButton extends React.Component{
  CountdownReset = () => {
    store.dispatch({
      type: 'RESET'
    })
  }

  render(){
    return (
      <Button title='RESET' onPress={() => this.CountdownReset()}>
        <Text>RESET</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
