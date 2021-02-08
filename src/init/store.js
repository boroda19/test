// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';

const store = createStore(
    rootReducer,
);

export { store };
