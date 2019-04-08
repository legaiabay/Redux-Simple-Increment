const countdownReducerDefaultState = {
    count: 0,
}

export const countdownReducer = (state = countdownReducerDefaultState, action) => {
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
  
    return state;
  }