import{ createContext,useReducer } from "react";
import AppReducer from "./AppReducer"


const initialState={
    tasks:[]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children})=>{
   const [state,dispatch]=useReducer(AppReducer,initialState);
   
   // implement functions
   function deleteTask(id){
        dispatch({
            type:'DELETE_TASK',
            payload:id
        });

   } 
   function addTask(task){
        dispatch({
            type:'ADD_TASK',
            payload:task
        });
        
    }
    
return (

<GlobalContext.Provider value={{
    tasks:state.tasks,
    addTask,
    deleteTask
}}>



{children}



</GlobalContext.Provider>
);



}