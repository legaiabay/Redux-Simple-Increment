import { createStore, combineReducers } from 'redux';
import { countdownReducer } from '../reducers/reducer_countdown';

export const countdownStore = () => {
    
    const store = createStore(
        combineReducers({
            countdown: countdownReducer,
        })
    )

    return store;
};