import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { motion,useAnimation } from "framer-motion";



const Task = ({Task}) => {
  const {deleteTask}=useContext(GlobalContext);
  const controls = useAnimation()
  async function handleDragEnd(event, info) {
    const offset = info.offset.x
    const velocity = info.velocity.x
  
    if (offset > 10 || velocity > 500) {
        await controls.start({ x: "100%", transition: { duration: 0.6 } ,opacity:0})
        deleteTask(Task.id)
    } else {
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } })
    }
  }
  
  
  return (
    <motion.div 
    drag="x"
      onDragEnd={handleDragEnd}
      animate={controls}
      whileHover={{scale:1.2}}
      className='task-item right-decoration'>
        <li >
            
            <div className="text-wrapper">
                <p className="text">{Task.text}</p>
                <p className="date">{Task.time}</p>
                
             </div>
             <button className="delete-btn" onClick={()=>deleteTask(Task.id)}>x</button>   
        
    </li>
    </motion.div>
  )
}

export default Task
