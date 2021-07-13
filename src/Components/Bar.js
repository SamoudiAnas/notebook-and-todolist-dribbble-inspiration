import styled from "styled-components";
import Note from "./Notes/Note";
import NoteOptions from "./Notes/NoteOptions";

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
`;

const Bar=()=>{
    const notes=[
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        },
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        },
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        },
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        },
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        },
        {
            id:Math.random()*1000,
            name:"Hello",
            noteText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget feugiat velit, in sagittis enim. Nulla tincidunt nibh vitae est luctus, eget lacinia velit dignissim."
        }
    ];

    return(
        <BarContainer>
            <NoteOptions />
            
            <NotesContainer>
                {
                    notes.map((note)=>(
                        <Note
                            key={note.id}
                            name={note.name}
                            noteText={note.noteText}
                        />

                    ))
                }
            
            </NotesContainer>

        </BarContainer>
    );
}
export default Bar; 