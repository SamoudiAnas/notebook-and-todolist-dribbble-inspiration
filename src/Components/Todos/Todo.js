import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTodo } from "../../actions/Todos/DeleteTodo";
import { TodoStatusCompleted } from "../../actions/Todos/TodoStatusCompleted";
import { TodoDecrement } from "../../actions/Todos/TodoDecrement";
import  './Todos.css';
import moment from "moment";


export const TodoContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #f8f8f8;
    display: flex;
    padding: 1rem 1.5rem;
    position: relative;
    margin-bottom: 2vh;
`;

export const Rectangle = styled.div`
    position: absolute;
    top: 0;
    left :0;
    width: 5px;
    height: 100%;
    background-color: #266dd3;
    
`;
export const TodoSettings = styled.div`
position: absolute;
    top: 0;
    right: 0;
    display: flex;
`;
export const Done = styled.a`
    color: white;
    background-color: #09BC8A;
    padding: 1rem ;
    
    &:hover{
        cursor: pointer;
    }
`;

export const Delete = styled.a`
    color: white;
    background-color: #D7263D;
    padding: 1rem ;

    &:hover{
        cursor: pointer;
    }
`;
export const P = styled.p`
`;





const Todo = ({ todo }) => {
    const [doneButton, setDoneButton] = useState(false);
    const dispatch = useDispatch();

    const done = (key) =>{
        if(doneButton == false){
            setDoneButton(true); 
            dispatch(TodoStatusCompleted(moment().format('LL'), key));
        }
        if(doneButton == true){
            setDoneButton(false);
            dispatch(TodoStatusCompleted(moment().format('LL'), key));
        }
    }


    //this function deletes todo from the list
    const deleteTodo = (key) =>{
        dispatch(DeleteTodo(key));
        dispatch(TodoDecrement());
    }
   

    const checkIfCompleted=()=>{
        if(todo.status === "Completed"){
            return true;
        }
    }



    return (


        <TodoContainer>
            <Rectangle />
            <p className={` ${checkIfCompleted() ? 'invalid':""}`}>{todo.todo}</p>
            <TodoSettings>
                <Done onClick={()=> done(todo.key)}><FontAwesomeIcon icon={faCheck} /></Done>
                <Delete onClick={ () => deleteTodo(todo.key) }><FontAwesomeIcon icon={faTrashAlt} /></Delete>
            </TodoSettings>
        </TodoContainer>
    );
}

export default Todo;