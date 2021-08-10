import moment from "moment";

const TodoReducer = (state =[],action) => {
        var today = moment().format('LL');
        var temporaryArrayOfTodos= [];
        var todolistPlacement,todoPlacement;
        
        //check if the object with the date exists

        const checkIfExists =() =>{
                for(let i =0; i<state.length;i++){
                        if( state[i].date === today){
                                return i;
                        }
                        else{
                                return null;
                        }
                }
        };

        //it gives me the todolist placement from the date
        const checkIfTodoExists =(theDate) =>{
                for(let i =0; i<state.length;i++){
                        if( state[i].date === theDate){
                                todolistPlacement = i;
                                 return [...state[i].todolist];
                        }       
                }
        }

        //it gives me the todo placement from the key
        const checkIfTheTodoExists =(array,key) =>{
                for(let i =0; i<array.length;i++){
                        if( array[i].key === key){
                                todoPlacement = i;
                        }       
                }
        }


        
        switch(action.type){          
                case "ADD_TODO":
                        let index = checkIfExists();
                        if(index != null){

                                temporaryArrayOfTodos = [...state[index].todolist,action.object];
                                state = [
                                        {
                                                date : today,
                                                todolist : temporaryArrayOfTodos
                                        }
                                ];
                                return state;
                        }
                        else{
                                temporaryArrayOfTodos= [action.object];
                                state = [
                                        {
                                                date : today,
                                                todolist : temporaryArrayOfTodos
                                        }
                                ];
                                return state;
                        }
       
                case "DELETE_TODO":
                        temporaryArrayOfTodos = checkIfTodoExists(action.theDate);
                        let newArray = temporaryArrayOfTodos.filter((todo) => todo.key !== action.id);
                        state = [
                                {
                                        date : today,
                                        todolist : newArray
                                }
                        ];

                        return state; 
                 
                case "STATUS_SWAP":
                        // find the index by the date and get the data
                        temporaryArrayOfTodos = checkIfTodoExists(action.theDate);
                        //find the index by the key
                        checkIfTheTodoExists(temporaryArrayOfTodos,action.key);
                        //swap the status
                        if(state[todolistPlacement].todolist[todoPlacement].status == "Completed"){
                                state[todolistPlacement].todolist[todoPlacement].status = "Uncompleted"; 
                        }
                        else{
                                state[todolistPlacement].todolist[todoPlacement].status = "Completed";
                        }
                               
                        return state; 

                default:
                       
                        return state
        }
    }
    
export default TodoReducer;




