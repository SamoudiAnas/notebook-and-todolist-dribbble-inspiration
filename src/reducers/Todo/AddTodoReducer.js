import moment from "moment";
var todoMap = new Map();
const AddTodoReducer = (state =todoMap,action) => {
        var today = moment().format('LL');
        switch(action.type){
            
                case "ADD_TODO":
                        if(todoMap.has(today)){
                                var temporaryArrayOfTodos = [...todoMap(today) ,action.object];
                                todoMap.delete(today);
                                todoMap.set(today,temporaryArrayOfTodos);                                
                                return;
                        }
                        else{
                                todoMap.set(today,temporaryArrayOfTodos);
                        }
                        return "SHOW_TODO_VIEW"
    
                default:
                return "SHOW_NOTE_VIEW"
        }
    }
    
export default AddTodoReducer;