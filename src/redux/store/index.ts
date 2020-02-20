import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';
import { loadState, saveState } from "./localStorage"

const sagaMiddleware = createSagaMiddleware();
const initialState = loadState();

const store = createStore(
  rootReducer, initialState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

store.subscribe(() => {
  saveState(store.getState());
}); 

sagaMiddleware.run(rootSaga)

export default store;
