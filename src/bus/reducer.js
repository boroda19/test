// Instruments
import { types } from './types';

const initialState = {
    complete:    [],
    progress: []
};

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_COMPLETE: {
            return {
                ...state,
                complete: action.payload,
            };
        }
        case types.FILL_PROGRESS: {
            return {
                ...state,
                progress: action.payload,
            };
        }
        default:
            return state;
    }
};
