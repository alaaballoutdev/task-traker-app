const AppReducer= (state,action) =>{
    switch(action.type){
        case 'ADD_TASK':
            state= {...state,tasks:[action.payload,...state.tasks]};
            state.tasks.sort((t1,t2)=>{
                const date1 = new Date('2020-01-01 ' + t1.time);
                const date2 = new Date('2020-01-01 ' + t2.time);
                
                return date1-date2});
            return state;
        case 'DELETE_TASK':
            return {...state,tasks:state.tasks.filter(task=>task.id!==action.payload)};    
        default:
            return state;
    }




}
export default AppReducer