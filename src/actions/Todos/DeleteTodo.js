export const DeleteTodo = (theDate, id) =>{
        console.log("delete action clicked");
        return{
                type : "DELETE_TODO",
                theDate : theDate,
                id : id
        }
}