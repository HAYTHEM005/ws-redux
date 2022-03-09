import React from 'react'
import Edit from './Edit'
import { useDispatch } from 'react-redux'
import { doneTask } from '../JS/action/action'
import { Button } from 'react-bootstrap'
const Task = ({task}) => {
  const dispatch= useDispatch()
  return (
    <div style={{display:"flex", justifyContent: 'space-between'}} >
        
        <h3 className={task.isdone ? "done": null}>{task.text} </h3>
        <Edit task={task}/>
        <Button style={{margin:"20px"}} variant="danger" onClick={()=>dispatch(doneTask(task.id))}>
          {task.isDone ? "unDone": "Done"}</Button>  
    </div>
  )
}

export default Task