import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleWare = createSagaMiddleware();
const initialState = {}
// const store = compose(
//     applyMiddleware(sagaMiddleWare),
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer);

const store = createStore(rootReducer,initialState, compose(composeWithDevTools(applyMiddleware(sagaMiddleWare))))

sagaMiddleWare.run(rootSaga);

export default store;