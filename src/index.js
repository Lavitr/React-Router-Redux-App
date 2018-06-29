import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/city:*" component={App} />
        <Route path="/*" component={() => <h1 style={{color:'red'}}>NOT FOUND!!!</h1>} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

