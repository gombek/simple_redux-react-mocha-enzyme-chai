import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './Stores/configureStore';
import * as Actions from './Actions';
import App from './Components/App.jsx';
import Home from './Components/Home.jsx';
import SubPage from './Components/SubPage.jsx';


// Create redux store.
const store = configureStore();
store.dispatch(Actions.Simple.set({
    value: 1
}));

const history = syncHistoryWithStore(browserHistory, store);

// Render app to dom.
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/subpage" component={SubPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);