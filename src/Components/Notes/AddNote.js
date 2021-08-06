import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { AddNoteAction } from "../../actions/Notes/AddNoteActions";
import { NoteDate } from "./Note";
import { useDispatch } from "react-redux";
import { NoteCounterIncrementAction } from "../../actions/Notes/NoteCounterIncrementAction";
/*
###########################################################################################
######################                    Styling                   #######################
###########################################################################################

*/
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
  color: #022b3a;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15%;
`;

export const AddNoteText2 = styled.h3`
  opacity: 0;
  color: #022b3a;
  font-size: .3rem;
  font-weight: 700;
  margin-bottom: 5v;
`;
export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  width: 100%;
  pointer-events: none;
  border-bottom: 1px solid #022b3a;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 30%;
    width: 100%;
    border-bottom: 3px solid #266dd3;
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0;
  font-size: 1rem;
  transition: all 0.5s ease;
`;
export const NoteName = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #022b3a;
  outline: 0;
  padding-top: 20px;
  font-size: 1.3rem;
  color: #022b3a;
  background: transparent;

  &::placeholder {
    color: transparent;
  }

  &:focus {
  }

  &:focus + Label Span,
  &:valid + Label Span {
    color: #266dd3;
    transform: translateY(-130%);
    font-size: 1.3rem;
  }
  &:focus + Label::after,
  &:valid + Label::after {
    transform: translateX(0%);
  }
`;
//YOUR NOTE STYLING
export const NoteContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
export const NoteTextLabel = styled.label`
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 30%;
  width: 100%;
  pointer-events: none;
  border-bottom: 1px solid #022b3a;

  &::after {
    content: "";
    position: absolute;
    bottom: 9px;
    left: 0;
    height: 30%;
    width: 100%;
    border-bottom: 3px solid #266dd3;
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }
`;

export const NoteTextSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  transform: translateY(-1150%);
  transition: transform 0.3s ease;
`;

export const YourNote = styled.textarea`
  width: 100%;
  border: 0;
  border-bottom: 2px solid #022b3a;
  outline: 0;
  margin-top: 10vh;
  font-size: 1.3rem;
  color: #022b3a;
  background: transparent;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus {
  }

  &:focus + Label Span,
  &:valid + Label Span {
    color: #266dd3;

    font-size: 1.3rem;
  }
  &:focus + Label::after,
  &:valid + Label::after {
    transform: translateX(0%);
  }
`;
//note setings
export const Button = styled.button`
  margin-top: 3%;
  padding: 0.8rem 2.5rem;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background-color: #266dd3;
  border: transparent;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #022b3a;
  }
`;
export const Button2 = styled.button`
  margin-top: 3%;
  padding: 0.8rem 2.5rem;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background-color: #d00000;
  border: transparent;
  border-radius: 5px;
  margin-left: 3vh;
  &:hover {
    cursor: pointer;
    background-color: #022b3a;
  }
`;














const AddNote = ({noteName,setNoteName,noteText,setNoteText,notes,setNotes}) => {
  /*
################################################################
####    TO SAVE CHANGE TO A NOTE NAME 
################################################################
THIS FUNCTION UPDATES THE VALUE OF THE NOTE NAME
*/
  const noteNameHandler = (e) => {
    setNoteName(e.target.value);
    
  };

  /*
################################################################
####    TO SAVE CHANGE TO A NOTE TEXT 
################################################################
THIS FUNCTION UPDATES THE VALUE OF THE NOTE TEXT
*/
  const noteTextHandler = (e) => {
    setNoteText(e.target.value);
    console.log(e.target.value);
  };
  /*
################################################################
####    TO SAVE A NOTE
################################################################
*/
  const saveNote = (e) => {
    //THIS FUNCTION PREVENT REACT FROM REFRESHING THE PAGE EACH TIME WE CLICLK SUBMIT
    e.preventDefault();
    //THIS FUNCTION UPDATES THE VALUE OF THE NOTE AND SEND IT BACK FOR US TO RETRIEVE DATA
    setNotes([
      ...notes,
      {
        id: Math.random() * 1000,
        name: noteName,
        text: noteText, 
        date:"10 Mar 2021"
      },
    ]);

    //redux trial
    const object = {
      id: Math.random() * 1000,
      name: noteName,
      text: noteText, 
      date:"10 Mar 2021"
    };
    addNoteWithRedux(object);
    

    //THIS FUNCTION SET VALUES BACK TO EMPTY
    cancelNote();
    
  };




 /*
################################################################
####    TO cancel A NOTE
################################################################
*/
//THIS FUNCTION SET VALUES BACK TO EMPTY

const cancelNote = (e) => {
    setNoteName("");
    setNoteText("");
  };
  const dispath = useDispatch();

/* REDUX ADD NOTE */
const addNoteWithRedux = (object)=>{
  dispath(AddNoteAction(object));
  dispath(NoteCounterIncrementAction());
} 







  return (
    <AddNoteContainer>
      <NoteNameContainer>
        <AddNoteText>New Note</AddNoteText>
        <NoteName
          value={noteName}
          onChange={noteNameHandler}
          type="text"
          required
        />
        <Label>
          <Span>Note Name</Span>
        </Label>
      </NoteNameContainer>
      <NoteContainer>
        <AddNoteText2>New Note</AddNoteText2>
        <YourNote
          value={noteText}
          onChange={noteTextHandler}
          rows="15"
          type="text"
          required
        />
        <NoteTextLabel>
          <NoteTextSpan>Your Note</NoteTextSpan>
        </NoteTextLabel>
      </NoteContainer>
      <Button onClick={saveNote}>Save</Button>
      <Button2 onClick={cancelNote}>Cancel</Button2>
    </AddNoteContainer>
  );
};

export default AddNote;
