import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {HomeReducer} from './reducers/Home';

import rootSaga from './sagas';

const RootReducer = combineReducers({
    Home: HomeReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
