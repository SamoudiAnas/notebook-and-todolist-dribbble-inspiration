import styled from "styled-components";


export const NoteContainer = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #2D3047;
    border-top: 1px solid #1F7A8C;
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        z-index: 999;
        background-color: white;
    }
`;

export const NoteName = styled.h3`
    margin-left: 1rem;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
`;

export const NoteText= styled.p`
    margin-top: 1%;
    margin-left: 1rem;
    color: #bbb;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    word-wrap:break-word;
    text-overflow: ellipsis;
    font-weight: 400;
`;
export const NoteDate= styled.p`
position: absolute;
top: 0;
left: 0;


transform: rotate(-90deg) translate(-80%,-50%) ;
color: #bbb;
font-weight: 400;
font-size: 0.9rem;
`;

const Note =({name,text,date,previewState,setPreviewState,selectedNote, setSelectedNote}) =>{

    const NoteSelected=(e)=>{
        let note={
            noteName:name,
            noteText:text,
            noteDate:date
        }
        setSelectedNote(note);
        setPreviewState("Selected");
        
        

    }


    return(
        <NoteContainer onClick={NoteSelected}>
            <NoteName>{name}</NoteName>
            <NoteDate>{date}</NoteDate>
            <NoteText>{text}</NoteText>
           
        </NoteContainer>
    );
}   

export default Note;