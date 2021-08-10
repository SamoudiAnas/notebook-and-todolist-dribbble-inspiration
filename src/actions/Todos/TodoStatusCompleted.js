export const TodoStatusCompleted = (theDate, key)=>{
        return{
                type : "STATUS_SWAP",
                theDate : theDate,
                key : key
        }
}