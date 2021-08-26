import {combineReducers, createStore} from "redux";
import {userComponentReducer} from "./UserComponentReducer";

let reducers = combineReducers({userComponent:userComponentReducer})

let store = createStore(reducers);

export default store;