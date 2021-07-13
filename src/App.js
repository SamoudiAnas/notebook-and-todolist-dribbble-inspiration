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
    


  const [noteName, setNoteName] = useState("");
  const [noteText, setNoteText] = useState("");
  
  
  const [previewState, setPreviewState] = useState("Add note");
  const [selectedNote, setSelectedNote] = useState();
  
  const [notes, setNotes] = useState([]);
  
  const [view, setView] = useState();
  /*
    ###########################################################################################
    ######################                    useEffect                   ######################
    ###########################################################################################

  */


   /* useEffect(() => {
      setPreviewState(previewState);
      
    }, [previewState]);
  
*/
const firstView=()=>{
  if(previewState === "Add note"){
    {
        setView(<AddNote 
          noteName={noteName} setNoteName={setNoteName}
          noteText={noteText} setNoteText={setNoteText} 
          notes={notes} setNotes={setNotes}>
      </AddNote>);
                     }
}
}

useEffect(() => {
 firstView();
}, []);



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
      
      
    /*else if(previewState === "Preview note"){
          preview=<PreviewNote
                          note
                          
                          ></PreviewNote>
    }*/

  return (<>
    <Sidebar />
    <Bar notes={notes} previewState={previewState} setPreviewState={setPreviewState}/>
    {
      view
    }
 </> );
}

export default App;
