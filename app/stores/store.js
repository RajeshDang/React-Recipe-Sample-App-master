/**
 * Created by Mohan Rathour on 12/09/17.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import listReducer from "../reducers/listReducer";

/**
 * Create the store and attach the reducer and middleware to the redux store.
 */
export default createStore(
    listReducer,
    applyMiddleware(thunk)
);
