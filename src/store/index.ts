import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, (applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;