const TodoFilterHandler = (state =[], action) => {
        switch (action.type) {
                case "COMPLETED_TODO":
                        state  = action.object.filter((todo) => todo.status === "Completed");
                        return state;

                case "UNCOMPLETED_TODO":
                        state  = action.object.filter((todo) => todo.status === "Uncompleted");
                        return state;

                case "DEFAULT_TODO":
                        state  = [...action.object]; 
                        return state;    

                default:
                        
                        return state;
                        //
                        
        }
      };

export default TodoFilterHandler;