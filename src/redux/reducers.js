import { combineReducers } from "redux";
import {ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE} from "./actions";

const initialState = {todos: [], filter: 'ALL'};
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;





