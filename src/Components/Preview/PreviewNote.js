import React from 'react';
import styled from 'styled-components';


export const PreviewContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: calc(100% - 50vh - 300px);
    left: calc(50vh + 300px);
    padding: 3rem;
    overflow: hidden;
`;
export const NoteDate = styled.h5`
    margin-bottom: 3vh;
`;
export const NoteName = styled.h3`
    margin-bottom: 15vh;
`;
export const NoteText = styled.p`
    word-wrap:break-word;
    overflow: hidden;
`;
const cons=(p)=>{
    console.log(p);
}
const PreviewNote =({selectedNote})=>{
    cons(selectedNote); 
    return(
        <PreviewContainer >
            <NoteDate>{selectedNote.noteDate}</NoteDate>
            <NoteName>{selectedNote.noteName}</NoteName>
            <NoteText>{selectedNote.noteText}</NoteText>
        </PreviewContainer>
        
    );
}   

export default PreviewNote;