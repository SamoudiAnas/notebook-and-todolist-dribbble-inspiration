import React,{useState, useEffect} from 'react';
import './App.css';
import NoteBar from './Components/NoteBar';
import  AddNote  from './Components/Notes/AddNote';
import Sidebar from './Components/Sidebar';
import PreviewNote from './Components/Preview/PreviewNote';
import { useSelector } from 'react-redux';
import TodoBar from './Components/Todos/TodoBar';
import Todos from './Components/Todos/Todos';
function App() {
  /*
    ###########################################################################################
    ######################                    useState                   ######################
    ###########################################################################################

  */
    var preview, globalView;

    const globalViewState = useSelector(state => state.GlobalViewState);
  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");
  
  
  const [previewState, setPreviewState] = useState("Add note");
  const [selectedNote, setSelectedNote] = useState();
  
  const [notes, setNotes] = useState([]);
  
  const [todoText, setTodoText] = useState("");
  

   /* useEffect(() => {
      setPreviewState(previewState);
      
    }, [previewState]);
  
*/


const changeView=()=>{
  if(previewState =="Selected"){
    preview=
          <PreviewNote selectedNote={selectedNote} />
      ;
      return preview;}
   else if(previewState == "Add note"){
    preview=
    <AddNote 
      noteName={noteName} setNoteName={setNoteName}
      noteText={noteText} setNoteText={setNoteText} 
      notes={notes} setNotes={setNotes}>
  </AddNote>;
  return preview;
   }   
  
  
 
};


const changeGlobalView=()=>{
  
  if(globalViewState =="SHOW_NOTE_VIEW"){
    globalView=
          <PreviewNote selectedNote={selectedNote} />
      ;
      return preview;}
   else if(previewState == "Add note"){
    preview=
    <AddNote 
      noteName={noteName} setNoteName={setNoteName}
      noteText={noteText} setNoteText={setNoteText} 
      notes={notes} setNotes={setNotes}>
  </AddNote>;
  return preview;
   }   

};







/*
    ###########################################################################################
    ######################                    useEffect                   ######################
    ###########################################################################################
    EACH TIME WE CHANGE FROM ADD NOTE TO PREVIEW NOTE THIS WILL BE CALLED
  */

useEffect(() => {
  changeView();
}, [previewState]);
useEffect(() => {
  changeGlobalView();
}, [previewState]);

/*
    ###########################################################################################
    ######################                    render                   ########################
    ###########################################################################################

  */

    /*
      TEST TO SEE WHICH PREVIEW MODE TO USE
          THERE IS TWO PREVIEW MODES
                1- ADD NOTE
                2- PREVIEW A CLICKED/SELECTED NOTE
*/
  preview=<AddNote 
  noteName={noteName} setNoteName={setNoteName}
  noteText={noteText} setNoteText={setNoteText} 
  notes={notes} setNotes={setNotes}>
</AddNote>;
  return (<>
    <Sidebar />
    {/*<NoteBar notes={notes} previewState={previewState} selectedNote={selectedNote} setSelectedNote={setSelectedNote} setPreviewState={setPreviewState}/>*/}
    <TodoBar todoText={todoText} setTodoText={setTodoText}></TodoBar>
    {
      /*changeView()*/
    }
    <Todos todoText={todoText} setTodoText={setTodoText}></Todos>
 </> );
}

export default App;
