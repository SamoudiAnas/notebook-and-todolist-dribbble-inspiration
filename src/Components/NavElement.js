import styled from "styled-components";


export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    margin-left: 3.5rem;
    position: relative;
    
`;

export const NavIcon = styled.img`
    width: 25px;
    height: 30px;
    margin-right: 1rem;
`;

export const NavName = styled.h4`
    color: #a9a9a9;

`;
const checkCountOpacity=({count})=>{
    if(count === 0){
        return 0;
    }else{
        return 1;
    }
}
export const NavCount = styled.h5`
    opacity:${checkCountOpacity};
    position: absolute;
    right: 3rem;
    
    background-color: #183A37;
    width:25px;
    height: 25px;
    color: white;
    border-radius: 50%;
    padding: 4px;
    text-align: center;
    
    font-size: .7em;

`;

const NavElement =({image,name,count})=>{
    return(
        <FlexContainer>
            <NavIcon src={image}/>
            <NavName>{name}</NavName>
            <NavCount count={count}>{count}</NavCount>
        </FlexContainer>
    );
}
export default NavElement;