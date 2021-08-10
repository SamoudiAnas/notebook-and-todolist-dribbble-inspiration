import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import TheNoteComponent from './Components/Notes/TheNoteComponent';
import { useSelector } from 'react-redux';

import Todos from './Components/Todos/Todos';






function App() {
 
  var globalView;

  const globalViewState = useSelector(state => state.GlobalView);
  const [todoText, setTodoText] = useState("");
  
  
  globalView = <TheNoteComponent />;



  //EACH TIME WE CHANGE FROM ADD NOTE TO PREVIEW NOTE THIS WILL BE CALLED
  useEffect(() => {
    changeGlobalView();
    console.log("Global view changed");
  }, [globalViewState]);

  
  const changeGlobalView = () => {

    if (globalViewState == "SHOW_NOTE_VIEW") {
      globalView = <TheNoteComponent />;
      
      return globalView;
    }
    else  {
      globalView = <Todos todoText={todoText} setTodoText={setTodoText}></Todos>
        
      return globalView;
    }

  };





  return (<>
    <Sidebar />
    

    
      
    
    {
      changeGlobalView()
    }
  </>)
}

export default App;
