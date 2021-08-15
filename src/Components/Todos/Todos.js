import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { AddTodoAction } from "../../actions/Todos/AddTodoAction";
import { AllTodos } from "../../actions/Todos/TodoFilter/AllTodos";
import { CompletedTodos} from "../../actions/Todos/TodoFilter/CompletedTodos";
import { UncompletedTodos } from "../../actions/Todos/TodoFilter/UncompletedTodos";
import TodoFilterHandler from "../../reducers/Todo/TodoFilterReducer";
import { DefaultTodoFilter } from "../../actions/Todos/TodoFilter/DefaultTodoFilter";
import { TodoIncrement } from "../../actions/Todos/TodoIncrementAction";
import TodoReducer from "../../reducers/TodoReducer";








/*
###########################################################################################
######################                    Styling                   #######################
###########################################################################################

*/
export const AddNoteContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: calc(100%  - 300px);
  left: calc(300px);
  padding: 3rem;
`;

export const NoteNameContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const TodolistText = styled.h3`
  color: #022b3a;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5vh;
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
  font-size: 1rem;
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
    font-size: .8rem;
  }
  &:focus + Label::after,
  &:valid + Label::after {
    transform: translateX(0%);
  }
`;



export const Button = styled.button`
  margin-top: 0; 
  margin-bottom: 0;
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



export const FlexContainer = styled.div`

  display: flex;
 
  align-items: center;
  gap: 10px;
  margin-top: 2rem;
`;

export const Select = styled.select`
    padding: .9rem 1rem;
    border-radius: 5px;

`;
export const TodosContainer = styled.div`
  margin-top: 5vh;
`;



















/*
###########################################################################################
######################                    Main                      #######################
###########################################################################################

*/


 


const Todos = ({ todoText, setTodoText }) => {

        //Variables
        
        const [todosArray, setTodosArray] = useState([])
        const dispatch = useDispatch();
        
     
        //useState + useEffect
        const [filteredTodos,setFilteredTodos] = useState([]);
        const theArrayOfTodos = useSelector(state => state.TodoReducer);
        var completedTodos = [];
        var uncompletedTodos = [];
        //this is the array that is going to be changing whenever we hange the filter
        const [shownArray,setShownArray] = useState([]);

        //this sets the todo text from the input whenever we type something
        const todoTextHandler = (e) => {
                setTodoText(e.target.value);
        }



        //this function triggers the "Todo Reducer" to add a new value
        const addTodo = (e) => {
                e.preventDefault();
                let object = {
                        key: Math.random() * 100,
                        todo: todoText,
                        status: "Uncompleted"
                }
                dispatch(AddTodoAction(object));
                dispatch(TodoIncrement());
        }



        //this function update the todolist everytime we add/delete from it
        useEffect(() => {
                updateTodo();     
        }, [theArrayOfTodos])

        const updateTodo = () => {
                
                setShownArray([...theArrayOfTodos]);
                
                
                let index = 0;
                if(index == 0){
                        dispatch(DefaultTodoFilter(theArrayOfTodos));
                        index++;
                }
                console.log("updated");
        }


        //status filter handler
        const statusHandler = (e) =>{
                let array = [];
                switch(e.target.value){
                        case "Completed":
                                 array = [...theArrayOfTodos.filter((todo) => todo.status === "Completed")];
                                 console.log(array);
                                 completedTodos = [...array];
                                console.log(completedTodos);
                                setShownArray(completedTodos); 
                               
                                break;
                        case "Uncompleted":
                                array = [...theArrayOfTodos.filter((todo) => todo.status === "Uncompleted")];
                                uncompletedTodos = [...array];
                                setShownArray(uncompletedTodos); 
                                break;
                        default:
                                setShownArray([...theArrayOfTodos]); 
                                break;                
                }
               
               
        }








        //the view render
        return (
                <AddNoteContainer>
                        <NoteNameContainer>
                                <TodolistText>TodoList</TodolistText>
                                <NoteName
                                        onChange={todoTextHandler}
                                        type="text"
                                        required
                                />
                                <Label>
                                        <Span>Your Todo</Span>
                                </Label>
                        </NoteNameContainer>

                        <FlexContainer>

                                <Button onClick={addTodo}>Add</Button>

                                <Select onChange={statusHandler} name="cars" id="cars">
                                        <option value="All">All</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Uncompleted">Uncompleted</option>
                                </Select>

                        </FlexContainer>

                        <TodosContainer>
                                {
                                        shownArray.map((todo) => (
                                                <Todo todo={todo} />
                                        ))

                                }
                        </TodosContainer>

                </AddNoteContainer>
        );
};

export default Todos;
