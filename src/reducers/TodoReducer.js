const TodoReducer = (state =[],action) => {
        var temporaryArrayOfTodos= [];
        var todoPlacement;
        
      

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
                        state = [...state,action.object];
                        return state;
       

                case "DELETE_TODO": 
                        let newArray = state.filter((todo) => todo.key !== action.key);
                        console.log(action.key)
                        state = [...newArray];
                        return state; 
                 

                case "STATUS_SWAP":
                        //find the index by the key
                        //when we find the key it is set in "todoPlacement" variable
                        checkIfTheTodoExists(state,action.key);

                        //swap the status
                        if(state[todoPlacement].status === "Completed"){
                                state[todoPlacement].status = "Uncompleted"; 
                        }
                        else{
                                state[todoPlacement].status= "Completed";
                        }
                        return state; 

                default:
                        return state
        }
}
    
export default TodoReducer;




