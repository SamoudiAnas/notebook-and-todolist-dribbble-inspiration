import styled from "styled-components";
import Todo from "./TodoDateTitle";
import NoteOptions from "../Notes/NoteOptions";
import React from "react";
import { useSelector } from "react-redux";
import TodoDateTitle from "./TodoDateTitle";
import { useEffect } from "react";
import moment from "moment";
export const BarContainer = styled.div`
    position: absolute;
    left: 300px;
    width: 50vh;
    
    height: 100vh;
    max-height: 100vh;
`;
export const TodosContainer = styled.div`
    position: absolute;
    top: 25vh;
    width: 50vh;
    height: 75vh;
    max-height: 75vh;
    overflow-x: hidden;
    background-color: #022b3a;
`;

const TodoBar=()=>{
    const todos = useSelector(state => state.TodoReducer);
    
    var todosDate ;
    var theDate ="";
    const checkIfExists =() =>{
        for(let i =0; i<todos.length;i++){
                if( todos[i].date === moment().format("LL")){
                       todosDate =i;
                       theDate = todos[todosDate].date;
                }
        }
        console.log("im inside check if");
        console.log(todos[todosDate]);
        
        
        console.log(theDate);
    };
    useEffect(() => {
        checkIfExists();
      }, [todos])
    return(
        <BarContainer>
            <NoteOptions /> 
            <TodosContainer>
                <TodoDateTitle  date={theDate}/>
   
            </TodosContainer>
            
        </BarContainer>
    );
}
export default TodoBar; 