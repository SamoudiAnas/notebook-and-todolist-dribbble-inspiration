import { useDispatch } from "react-redux";
import { NoteCounterIncrementAction } from "../actions/NoteCounterIncrementAction";

var notes = [];
const NoteReducer = (state = notes,action)=>{
    
    switch(action.type){
        case 'ADD_NOTE':
            
            console.log(action.object);
            //Increment();
            return [
                ...state,
                action.object
              ]
              
        default:
            return state     
    }
}
const Increment = ()=>{
    const dispatch = useDispatch();
    dispatch(NoteCounterIncrementAction());
  } 
export default NoteReducer;