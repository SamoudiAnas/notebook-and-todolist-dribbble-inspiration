import styled from "styled-components";

export const NoteOptionsContainer = styled.div`
    width: 100%;
    height: 25vh;
    background-color: #2D3047;
    
    padding-top: 2rem;
    padding-left: 3rem;
`;

export const Date = styled.h3`
    
    color: white;
    font-size: 2rem;
    font-weight: 400;
`;
export const FlexContainer = styled.div`
    display: flex;
`;

export const Button = styled.button`
    margin-top:3%;
    padding:.8rem 2.5rem;
    color: white;
    font-family: 'Poppins',sans-serif;
    font-size: 1rem;
    background-color :#266DD3 ;
    border: transparent;
    border-radius: 5px;

`;

export const P = styled.p`
margin-top:3%;
color: #bbb;
`;


const NoteOptions =({setPreviewState})=>{
    const BringAddNote=()=> {
        setPreviewState("Add note");
    }
    
    return(
        <NoteOptionsContainer>
            <Date>10 Jully 2021</Date>
            <P>Lorem ispum dolor</P>
            <Button onClick={BringAddNote}>Add Note</Button>
        </NoteOptionsContainer>
    );
}
export default NoteOptions;