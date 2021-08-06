import NoteReducer from './NoteReducer';
import NoteCounterReducer from './NoteCounterReducer';
import GlobalView from './GlobalView';
import TodoCounterReducer from './TodoCounterReducer';
import TodoReducer from './TodoReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    NoteReducer:NoteReducer,
    NoteCounterReducer:NoteCounterReducer,
    TodoCounterReducer : TodoCounterReducer,
    TodoReducer : TodoReducer,
    GlobalView : GlobalView
})

export default allReducers;