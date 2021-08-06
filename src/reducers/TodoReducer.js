import moment from "moment";

const TodoReducer = (state =[],action) => {

        /*
        check if the objectwith the date exists
        */
        
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





        var today = moment().format('LL');
        var temporaryArrayOfTodos= [];
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
                                console.log("if\n" );
                                console.log(state);
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
                                console.log("else\n");
                                console.log(state);
                                return state;
                        }
       
    
                default:
                    console.log("default");
                return state
        }
    }
    
export default TodoReducer;




