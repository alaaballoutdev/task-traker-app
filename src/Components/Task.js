import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"


const Task = ({Task}) => {
  const {deleteTask}=useContext(GlobalContext);
  return (
    <div className='task-item right-decoration'>
        <li >
            
            <div className="text-wrapper">
                <p className="text">{Task.text}</p>
                <p className="date">{Task.time}</p>
                
             </div>
             <button className="delete-btn" onClick={()=>deleteTask(Task.id)}>x</button>   
        
    </li>
    </div>
  )
}

export default Task
