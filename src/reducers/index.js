import { combineReducers } from 'redux';

//reducer import
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  news : newsReducer,
  
})

export default rootReducer;