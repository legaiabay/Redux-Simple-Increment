import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import store_countdown from 'js/stores/store_countdown';
import countdownIncrement from 'js/actions/action_countdown';

const countdownStore = store_countdown();

countdownStore.subscribe(() => {
  console.log(countdownStore.getState())
})

export default class App extends React.Component {
   render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Countdown : {countdownStore.getState().count}</Text>
        <CountdownIncrementButton />
        <CountdownResetButton />
      </View>
    );
  }
}

class CountdownIncrementButton extends React.Component {
  CountdownIncrement = (add) => {
    countdownStore.dispatch(countdownIncrement(add));
  }

  render(){
    return (
      <Button title='INCREMENT' onPress={() => this.CountdownIncrement(4)} />
    )
  }
}

class CountdownResetButton extends React.Component{
  CountdownReset = () => {
    countdownStore.dispatch({
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
