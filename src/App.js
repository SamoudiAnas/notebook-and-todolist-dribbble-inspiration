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
  const [notes, setNotes] = useState([]);
  const [previewState, setpreviewState] = useState("Add note");

  const [preview, setPreview] = useState("");



  /*
    ###########################################################################################
    ######################                    useEffect                   ######################
    ###########################################################################################

  */
    useEffect(() => {
      setPreview(previewState);
      
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
    
    if(previewState === "Add note"){
        {
            preview =<AddNote 
                            noteName={noteName} setNoteName={setNoteName}
                            noteText={noteText} setNoteText={setNoteText} 
                            notes={notes} setNotes={setNotes}>
                         </AddNote>;}
    }/*else if(previewState === "Preview note"){
          preview=<PreviewNote
                          note
                          
                          ></PreviewNote>
    }*/

  return (<>
    <Sidebar />
    <Bar notes={notes}/>
    {
      preview
    }
    
 </> );
}

export default App;
