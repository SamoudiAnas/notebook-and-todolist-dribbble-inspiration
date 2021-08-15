const GlobalView = (state ="SHOW_NOTE_VIEW",action) => {
    switch(action.type){
        case "SHOW_NOTE_VIEW":
            return "SHOW_NOTE_VIEW"

        case "SHOW_TODO_VIEW":
            return "SHOW_TODO_VIEW"

        default:
            return ""
    }
}

export default GlobalView;