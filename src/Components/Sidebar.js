import styled from "styled-components";
//images and icons
import anas from '../images/image.jpg';
import anasLogo from '../images/Anas_Sam_Black.png';
import todoIcon from '../images/to-do-list.svg';
import notesIcon from '../images/writing.svg';
import settingsIcon from '../images/settings.svg';

//components
import NavElement from "./NavElement";

//use selector
import { useSelector } from "react-redux";
import { ShowNoteView } from "../actions/SwitchView/ShowNoteView";
import { ShowTodoView } from "../actions/SwitchView/ShowTodoView";
import { useDispatch } from "react-redux";

export const SideBarContainer= styled.div`
    position: absolute;
    width: 300px;
    height: 100vh;
    background-color: #fff;
    

`;

export const ProfilePic= styled.img`
    width: 100%;
    height: 25vh;
    object-fit: cover;
`;

export const AnasLogo= styled.img`
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2%;
    opacity: .2;
    width: 50px;
    height: 50px;
   
`;
export const Name= styled.h3`
    color: #151515;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 2rem 4rem 4rem 4rem;
`;

//functions



const Sidebar =()=>{
    const dispatch = useDispatch();
    const switchToNoteView = () =>{
        dispatch(ShowNoteView());
    }
    const switchToTodoView = () =>{
        dispatch(ShowTodoView());
    }
    const noteCounter = useSelector(state => state.NoteCounterReducer);
    const globalViewState = useSelector(state => state.GlobalView);
    
    const Navs=[
        {
            key:1,
            icon:notesIcon,
            name:"NoteBook",
            count:noteCounter,
            func : switchToNoteView
        },
        {
            key:2,
            icon:todoIcon,
            name:"To Do List",
            count:10,
            func : switchToTodoView
        },
        {
            key: 3,
            icon: settingsIcon,
            name:globalViewState,
            count:0
        }
    ];
    return(
        <SideBarContainer>
            <ProfilePic src={anas}/>
            <AnasLogo src={anasLogo} />
            <Name>John Doe</Name>
          
            {
                Navs.map((Nav)=>(
                    <NavElement
                        onClick={Nav.func}
                        image={Nav.icon}
                        name={Nav.name}
                        count={Nav.count} />
                ))
            }
            <AnasLogo src={anasLogo}/>
        </SideBarContainer>
    );
};
export default Sidebar;
