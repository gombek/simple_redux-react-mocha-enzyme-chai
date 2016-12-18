import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './Stores/configureStore';
import * as Actions from './Actions';
import App from './Components/App.jsx';

const store = configureStore();
store.dispatch(Actions.Simple.set(1));

ReactDOM.render(
    <App />,
    document.getElementById('app')
);