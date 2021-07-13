import React from 'react';
import styled from 'styled-components';


export const PreviewContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: calc(100% - 50vh - 300px);
    left: calc(50vh + 300px);
    padding: 3rem;
`;
export const NoteDate = styled.h5`

`;
export const NoteName = styled.h3`

`;
export const NoteText = styled.p`

`;

const PreviewNote =({noteText,noteName, noteDate})=>{
    
    return(
        <PreviewContainer>
            <NoteDate>{noteDate}</NoteDate>
            <NoteName>{noteName}</NoteName>
            <NoteText>{noteText}</NoteText>
        </PreviewContainer>
    );
}   

export default PreviewNote;