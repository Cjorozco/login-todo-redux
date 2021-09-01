import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './tasksReducer';

const mainReducer = combineReducers({ 
  tasks: tasksReducer 
});

export default createStore(mainReducer, applyMiddleware(thunk));