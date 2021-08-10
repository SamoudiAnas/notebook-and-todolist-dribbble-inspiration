import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTodo } from "../../actions/Todos/DeleteTodo";
import { TodoStatusCompleted } from "../../actions/Todos/TodoStatusCompleted";
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
    text-decoration: ${props => props.lineThrought};
    opacity: ${props => props.opacity};
`;





const Todo = ({ todo }) => {
    const [doneButton, setDoneButton] = useState(false);
    const [lineThrought, setLineThrought] = useState("none");
    const [opacity, setOpacity] = useState("1");
    const dispatch = useDispatch();

    const done = (key) =>{
        if(doneButton == false){
            setDoneButton(true);
             setLineThrought("line-through"); 
             setOpacity("0.6");
             console.log("true")
             dispatch(TodoStatusCompleted("August 10, 2021", key));
        }
        if(doneButton == true){
            setDoneButton(false);
            setLineThrought("none"); 
            setOpacity("1"); 
             console.log("false")
             dispatch(TodoStatusCompleted("August 10, 2021", key));
        }
    }


    const deleteTodo = (theDate, key) =>{
        console.log("delete clicked!")
        dispatch(DeleteTodo(theDate,key));
    }
   





    return (


        <TodoContainer>
            <Rectangle />
            <P lineThrought={lineThrought} opacity={opacity}>{todo.todo}</P>
            <TodoSettings>
                <Done onClick={()=> done(todo.key)}><FontAwesomeIcon icon={faCheck} /></Done>
                <Delete onClick={ () => deleteTodo("August 10, 2021",todo.key) }><FontAwesomeIcon icon={faTrashAlt} /></Delete>
            </TodoSettings>
        </TodoContainer>
    );
}

export default Todo;