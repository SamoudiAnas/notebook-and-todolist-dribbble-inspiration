
import './App.css';
import Bar from './Components/Bar';
import  AddNote  from './Components/Notes/AddNote';
import Sidebar from './Components/Sidebar';

function App() {
  return (<>
    <Sidebar />
    <Bar></Bar>
    <AddNote></AddNote>
 </> );
}

export default App;
