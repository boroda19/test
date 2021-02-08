// Types
import { types } from './types';

export const apiActions = {
    fillComplete: (data) => ({
        type:    types.FILL_COMPLETE,
        payload: data,
    }),
    fillProgress: (data) => ({
        type:    types.FILL_PROGRESS,
        payload: data,
    }),
};
