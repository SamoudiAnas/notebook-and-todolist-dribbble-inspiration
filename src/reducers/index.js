import NoteReducer from './NoteReducer';
import NoteCounterReducer from './NoteCounterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    NoteReducer:NoteReducer,
    NoteCounterReducer:NoteCounterReducer
})

export default allReducers;