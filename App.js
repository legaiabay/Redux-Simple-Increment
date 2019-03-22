import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStore } from 'redux';

const countdownStore = createStore((state = { count : 0 }, action) => {
  switch(action.type){
    case 'INCREMENT' :
      return {
        count : state.count + action.payload
      }
    case 'RESET' : 
      return {
        count : 0
      }
  }

  console.log(state);
  return state;
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
    countdownStore.dispatch({
      type: 'INCREMENT',
      payload: add,
    })

    console.log(countdownStore.getState())
  }

  loggg = () => {
    
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
