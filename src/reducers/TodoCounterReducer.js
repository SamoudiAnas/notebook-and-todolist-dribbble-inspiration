const TodoCounterReducer =(state = 0,action) =>{
    switch (action.type) {
        case "TODO_INCREMENT":
            return state + 1
            
        case "TODO_DECREMENT":
            return state - 1

        default:
            return state
    }
}
export default TodoCounterReducer;