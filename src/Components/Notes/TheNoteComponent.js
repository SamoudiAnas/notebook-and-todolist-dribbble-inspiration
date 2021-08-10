import NoteBar from "../NoteBar";
import AddNote from "./AddNote";
import PreviewNote from "../Preview/PreviewNote";
import { useState,useEffect } from "react";

const TheNoteComponent = () => {

        var preview;

        // useState
        const [noteName, setNoteName] = useState("");
        const [noteText, setNoteText] = useState("");
        const [previewState, setPreviewState] = useState("Add note");
        const [selectedNote, setSelectedNote] = useState();
        const [notes, setNotes] = useState([]);


        //EACH TIME WE CHANGE FROM ADD NOTE TO PREVIEW NOTE THIS WILL BE CALLED
        useEffect(() => {
                changeView();
        }, [previewState]);


        //default preview
        preview = <AddNote
                noteName={noteName} setNoteName={setNoteName}
                noteText={noteText} setNoteText={setNoteText}
                notes={notes} setNotes={setNotes}>
        </AddNote>;




        //this function change the preview variable according to the situation
        const changeView = () => {
                if (previewState == "Selected") {
                        preview =
                                <PreviewNote selectedNote={selectedNote} />
                                ;
                        return preview;
                }
                else if (previewState == "Add note") {
                        preview =
                                <AddNote
                                        noteName={noteName} setNoteName={setNoteName}
                                        noteText={noteText} setNoteText={setNoteText}
                                        notes={notes} setNotes={setNotes}>
                                </AddNote>;
                        return preview;
                }



        };
















        return (<>
                        <NoteBar 
                                notes={notes} 
                                previewState={previewState} 
                                selectedNote={selectedNote} 
                                setSelectedNote={setSelectedNote} 
                                setPreviewState={setPreviewState} />
                         
                        {
                                changeView()
                        }       
        
        
        </>

        )
}

export default TheNoteComponent;