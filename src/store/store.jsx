import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import  myReducer  from './reducers';

export const  myStore = createStore(myReducer,applyMiddleware(thunk,logger));