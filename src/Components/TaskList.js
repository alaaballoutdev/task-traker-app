import {useContext} from 'react'
import Task from './Task'
import {GlobalContext} from '../Context/GlobalState'
const TaskList = () => {
  const {tasks}=useContext(GlobalContext);
  
 
  return (
    <>
      <h2>My Tasks</h2>
      <p>{tasks.length===0?"Here we go, there is no new tasks for today!!":""}</p>
      <ul>
        {tasks.map(task=> <Task Task={task} key={task.id}/>)}
   
        
      </ul>
    </>
  )
}

export default TaskList
