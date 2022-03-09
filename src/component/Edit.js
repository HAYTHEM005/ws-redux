import React , {useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { editTask } from '../JS/action/action'
const Edit=({task})=> {
    
    const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [newText,setNewText]= useState(task.texte)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleEdit=()=>{dispatch(editTask(task.id,newText));
                      handleClose()
}
  return (
    <>
      <Button style={{margin:"20px"}} variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TITLE</Modal.Title>
        </Modal.Header>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>EDIT</Form.Label>
    <Form.Control type="texte" placeholder="Inter Your Task" onChange={(e)=>setNewText(e.target.value)} name="texte"  value={newText} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  

</Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Edit