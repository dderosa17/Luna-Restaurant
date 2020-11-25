import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
import reducers from './reducer';


export const store = createStore(reducers, applyMiddleware(thunk));