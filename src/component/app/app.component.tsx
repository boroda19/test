import * as React from 'react';
import { Provider } from 'react-redux';
import { Main } from '../Main/main.component';
import { store } from '../../init/store';

export const App: React.FC = () => {
    return (
        <Provider store = { store }>
            <Main />
        </Provider>
    );
};
