import { legacy_createStore } from 'redux';
import { createStore } from 'redux'
import rootReducers from "./reducer";


const store = createStore(rootReducers);


export default store;