import React, { useState,useEffect } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
 import {useSelector} from 'react-redux'
 import {useDispatch} from 'react-redux';
import { updateTaskInList } from '../Slices/tasksSlice';
const MyVerticallyCenteredModal = (props) => {
 
const { selectedTask } = useSelector((state) => state.tasks);
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
 
const [id, setId] = useState(0);
const dispatch = useDispatch()

    const updateTask=()=>{

        props.onHide()
        dispatch(updateTaskInList({id,title,description}))
    }



    useEffect(() => {
      if (Object.keys(selectedTask).length !== 0) {
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
        setId(selectedTask.id);
      }
    }, [selectedTask]);
  


  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           update task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
  <div class="mb-3">
    <label for="tasktitle" class="form-label">task title </label>
    <input type="tasktitle" class="form-control" id=" "  value={title} onChange={(e)=>{
setTitle(e.target.value)
    }}/>

  </div>
  <div class="mb-3">
    <label for="taskdescription" class="form-label">task description</label>
    <input type="taskdescription" class="form-control" id="taskdescription" value={description} onChange={(e)=>
setDescription(e.target.value)
    } />
  </div>
</form>
         
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <div className='text-end'>
        <button type="Add Task" class="btn btn-primary" onClick={(e)=>updateTask(e)}> update Task</button>
        </div>
      </Modal.Footer>
      
    </Modal>
    </div>
  )
}

export default MyVerticallyCenteredModal
