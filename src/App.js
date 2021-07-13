import React,{useState, useEffect} from 'react';
import './App.css';
import Bar from './Components/Bar';
import  AddNote  from './Components/Notes/AddNote';
import Sidebar from './Components/Sidebar';
import PreviewNote from './Components/Preview/PreviewNote';

function App() {
  /*
    ###########################################################################################
    ######################                    useState                   ######################
    ###########################################################################################

  */
    var preview;


  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");
  
  
  const [previewState, setPreviewState] = useState("Add note");
  const [selectedNote, setSelectedNote] = useState();
  
  const [notes, setNotes] = useState([]);
  
  const [view, setView] = useState();
  

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

/*
    ###########################################################################################
    ######################                    useEffect                   ######################
    ###########################################################################################
    EACH TIME WE CHANGE FROM ADD NOTE TO PREVIEW NOTE THIS WILL BE CALLED
  */

useEffect(() => {
  changeView();
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
    <Bar notes={notes} previewState={previewState} selectedNote={selectedNote} setSelectedNote={setSelectedNote} setPreviewState={setPreviewState}/>
    {
      changeView()
    }
 </> );
}

export default App;
