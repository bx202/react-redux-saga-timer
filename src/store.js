import { createStore, combineReducers, applyMiddleware } from 'redux';
import timerReducer from './Reducers/timerReducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootSaga from './Sagas/sagas';
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        timerReducer
    }),
    {},
    applyMiddleware(
        logger,
        thunk,
		sagaMiddleware,
        promise()
    )
);

sagaMiddleware.run(rootSaga);

