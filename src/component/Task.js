import React from 'react'
import Edit from './Edit'

const Task = ({task}) => {
  return (
    <div style={{display:"flex"}}>
        
        <h3>{task.text} </h3>
        <Edit task={task}/>
    </div>
  )
}

export default Task