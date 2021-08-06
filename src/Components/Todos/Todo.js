import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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

const Todo =({text})=>{
    
    return(

        <TodoContainer>
            <Rectangle />
            <p>{text}</p>
            <TodoSettings>
                <Done><FontAwesomeIcon icon={faCheck} /></Done>
                <Delete><FontAwesomeIcon icon={faTrashAlt} /></Delete>
            </TodoSettings>
        </TodoContainer>
    );
}   

export default Todo;