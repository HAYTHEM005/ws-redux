//import { type } from "@testing-library/user-event/dist/type"
//import ListTask from "../component/ListTask";
import { ADD_TASK,EDIT_TASK,DONE_TASK } from "../constant/actionType";
const initialState = {
    listTask : [
        {id:1, text:"ahmed", isdone: false},
        {id:2, text:"samir", isdone:true},
        {id:3, text:"dante", isdone:true}
    ]
}

const TaskReducer =(state= initialState,{type,payload})=>{
switch (type) {
    case ADD_TASK :
        return {...state,listTask:[...state.listTask,payload]};
        
        
        case EDIT_TASK :
            return {...state,listTask:state.listTask.map((el)=>el.id === payload.id ?{...el,text:payload.newTask}:el)};
        
        case  DONE_TASK :
            return {
                ...state,
                listTask:state.listTask.map((el)=>
                el.id=== payload? {...el, isdone:!el.isdone}: el) 
        }   
         default :
             return state;
}
};


export default TaskReducer