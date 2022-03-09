import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from '../JS/action/action'
import { useState } from 'react'
const AddTask = () => {

  const [text,setText]=useState('')
  const dispatch = useDispatch();
  const handleChange=(e)=>{e.preventDefault();
  if(text.trim()){
    dispatch(addTask({id:Math.random(),text:text, isDone:false}))
    setText('')
  }else{
    alert("can not add an emty task")
  }
  }
  return (
    <div >
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleChange}>
    <Form.Label>Add Task</Form.Label>
    <Form.Control type="texte" placeholder="Inter Your Task" onChange={(e)=>setText(e.target.value)} name="texte"  value={text} />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={handleChange}>
    ADD
  </Button>
</Form>
    </div>
  )
}

export default AddTask