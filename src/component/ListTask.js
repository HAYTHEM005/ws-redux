import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
import { Button } from 'react-bootstrap'

const ListTask = () => {
    const listtask = useSelector((state)=>state.task.listTask)
     const [status, setStatus]= useState("all");
    return (
    <div style={{margin:"20px"}}>
      <Button style={{margin:"20px"}} variant='primary'onClick={()=>setStatus("all")}  >
        All
        </Button>
        <Button style={{margin:"20px"}} variant='primary' onClick={()=>setStatus("done")}>
        Done
        </Button> 
        <Button style={{margin:"20px"}} variant='primary'onClick={()=>setStatus("undone")}>
        unDone
        </Button>
        {status==="done" ? listtask.filter((el)=>el.isdone=== true) 
        .map((el)=> <Task task={el} key={el.id}/>):
        status==="undone" ? listtask.filter((el)=>el.isdone=== false) 
        .map((el)=> <Task task={el} key={el.id}/>):
        listtask.map((el)=>< Task task={el} key={el.id}/>)
      }

    </div>
  )
}

export default ListTask