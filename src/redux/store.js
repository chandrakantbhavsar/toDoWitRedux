import { createStore, applyMiddleware } from 'redux';
import toDoReducer from './toDoReducer';
import {thunk} from 'redux-thunk';

export default createStore(
    toDoReducer,
    applyMiddleware(thunk),
  );