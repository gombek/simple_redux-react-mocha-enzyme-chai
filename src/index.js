import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './Stores/configureStore';
import * as Actions from './Actions';
import App from './Components/App.jsx';

const store = configureStore();
store.dispatch(Actions.Simple.set({
    value: 1
}));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);