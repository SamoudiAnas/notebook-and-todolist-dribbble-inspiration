import styled from "styled-components";


export const AddNoteContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: calc(100% - 50vh - 300px);
    left: calc(50vh + 300px);
    padding: 3rem;
    
`;

            
export const NoteNameContainer = styled.div`
position: relative;
overflow: hidden;

`;          

export const AddNoteText = styled.h3`
    color:#022b3a;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15%;
`;
export const Label = styled.label`
    position: absolute;
    bottom: 0;
    left: 0;
    height:30%;
    width: 100%;
    pointer-events: none;
    border-bottom: 1px solid #022b3a;

    &::after{
        content: "";
        position: absolute;
        bottom:-2px;
        left: 0;
        height:30%;
        width: 100%;
        border-bottom: 3px solid #266DD3;
        transform: translateX(-100%);
        transition: all 0.3s ease;
    }


   
`;

export const Span = styled.span`
    position: absolute;
    bottom: 5px;
    left: 0;
    font-size: 1rem;
    transition: all 0.3s ease;
`;
export const NoteName = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #022B3A;
    outline: 0;
    padding-top: 20px;
    font-size: 1.3rem;
    color: #022B3A;
    background: transparent;
    
    
    &::placeholder {
        color: transparent;
    }

    &:focus {
        
    }

    &:focus +  Label Span,
    &:valid + Label Span{
        color: #266DD3;
        transform: translateY(-130%);
        font-size: 1.3rem;

    }
    &:focus +  Label::after,
    &:valid + Label::after{
        transform: translateX(0%);

    }
    
`;




const AddNote = ()=>{
    return(
        <AddNoteContainer>
            <NoteNameContainer>
                <AddNoteText>New Note</AddNoteText>
                <NoteName  type="text" required/>
                <Label>
                    <Span>Note Name</Span>
                </Label>
            </NoteNameContainer>
        </AddNoteContainer>
    );
}

export default AddNote;