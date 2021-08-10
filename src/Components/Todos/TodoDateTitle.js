import styled from "styled-components";


export const TodoContainer = styled.div`
    width: 100%;
    height: 10vh;
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

export const TodoDate = styled.h3`
    margin-left: 1rem;
    color: white;
    font-weight: 700;
    padding: 1rem ;
    font-size: 1.1rem;
`;


const TodoDateTitle=({date}) =>{

    return(
        <TodoContainer>
            <TodoDate>{date}</TodoDate>
        </TodoContainer>
    );
}   

export default TodoDateTitle;