import NoteReducer from './NoteReducer';
import NoteCounterReducer from './NoteCounterReducer';
import GlobalView from './GlobalView';
import TodoCounterReducer from './TodoCounterReducer';
import TodoReducer from './TodoReducer';
import TodoFilterHandler from './Todo/TodoFilterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    NoteReducer:NoteReducer,
    NoteCounterReducer:NoteCounterReducer,
    TodoCounterReducer : TodoCounterReducer,
    TodoReducer : TodoReducer,
    TodoFilterHandler: TodoFilterHandler,
    GlobalView : GlobalView
})

export default allReducers;