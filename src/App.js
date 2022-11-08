import './App.css';
import AddTask from './Components/AddTask';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
    <TaskList/>
    <hr className="h-divider"/>
    <AddTask/>
    </div>
    </GlobalProvider>
  );
}

export default App;
