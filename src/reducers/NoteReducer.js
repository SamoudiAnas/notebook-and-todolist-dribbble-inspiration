
const NoteReducer = (state = [],action)=>{
    switch(action.type){
        case 'ADD_NOTE':
            //Increment();
            return [
                ...state,
                action.object
              ]
              
        default:
            return state     
    }
}

export default NoteReducer;