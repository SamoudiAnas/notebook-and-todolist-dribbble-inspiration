import styled from "styled-components";
import Note from "./Notes/Note";
import NoteOptions from "./Notes/NoteOptions";
import React from "react";
export const BarContainer = styled.div`
    position: absolute;
    left: 300px;
    width: 50vh;
    
    height: 100vh;
    max-height: 100vh;
`;
export const NotesContainer = styled.div`
    position: absolute;
    top: 25vh;
    width: 50vh;
    height: 75vh;
    max-height: 75vh;
    overflow-x: hidden;
    background-color: #022b3a;
`;

const Bar=({notes,previewState, setPreviewState,selectedNote,setSelectedNote})=>{
    

    return(
        <BarContainer>
            <NoteOptions setPreviewState={setPreviewState}/>
            
            <NotesContainer>
                {
                    notes.map((note)=>(
                        <Note
                            key={note.id}
                            name={note.name}
                            text={note.text}
                            date={note.date}
                            selectedNote={selectedNote}
                            setSelectedNote={setSelectedNote}
                            previewState={previewState}
                            setPreviewState={setPreviewState}
                        />

                    ))
                }
            
            </NotesContainer>

        </BarContainer>
    );
}
export default Bar; 