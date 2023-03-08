import { useContext,useState } from "react"
import { GlobalContext } from "../Context/GlobalState";

const AddTask = () => {
  const [text,setText]=useState("");
  const [time,setTime]=useState("");
  const [textValidation,setTextValidation]=useState("");
  const [timeValidation,setTimeValidation]=useState("");
  const {addTask,tasks} = useContext(GlobalContext);
  function onSubmit(e){
    e.preventDefault();
    var valid=true;
    if(text===""){
      valid=false;
      setTextValidation("Please enter a task");
    }
    if(time===""){
      valid=false;
      setTimeValidation("Please enter the time");
    }
    if(!valid)return;
    setTextValidation("");
    setTimeValidation("");
    tasks.forEach(t=>{
      if(t.text===text&&t.time===time){
        setTimeValidation("This task already exist!");
        valid=false;
      }
    });
    if(!valid)return ;
    const task={id:Math.floor(Math.random()*1000000),
                text:text,
                time:time
                
                };
                
    setText("");
    setTime("");
   addTask(task);
  }
  return (
    <>
    <h2>Add Task</h2>
    <div className="form-center">
      <form onSubmit={onSubmit}>
        
        <label htmlFor="text">Task</label>
        <input className="input-control" value={text} onChange={(e)=>setText(e.target.value)} type="text" id="text" />
        <span className="validation">{textValidation}</span>
        <label htmlFor="date">Time</label>
        <input  className="input-control" value={time} onChange={(e)=>setTime(e.target.value)}type="time" id="date" />
        <span className="validation">{timeValidation}</span>
        <button className="btn">Add Task</button>


      </form>
    </div>
    </>
  )
}

export default AddTask
