// Core
import { combineReducers } from 'redux';

// Instruments
import { apiReducer as swapi } from '../bus/reducer';

export const rootReducer = combineReducers({
    swapi,
});
