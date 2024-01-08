import React, { useState } from 'react'
import { addTaskToList } from '../Slices/tasksSlice'
import {useDispatch} from 'react-redux'
const AddTask = () => {

 const dispatch=useDispatch()
const[title,setTitle]=useState("")
const[description,setDescription]=useState("")




const addTasks=(e)=>{
    e.preventDefault()
    console.log({title,description});
    dispatch(addTaskToList({title,description}))
    setTitle("")
    setDescription("")
 }


  return (
    < section className='my-5'>
      <form>
  <div class="mb-3">
    <label for="tasktitle" class="form-label">task title </label>
    <input type="tasktitle" class="form-control" id="tasktitle"  value={title} onChange={(e)=>{
setTitle(e.target.value)
    }}/>
 
  </div>
  <div class="mb-3">
    <label for="taskdescription" class="form-label">task description</label>
    <input type="taskdescription" class="form-control" id="taskdescription" value={description} onChange={(e)=>
setDescription(e.target.value)
    } />
  </div>
  <div className='text-end'>

  <button type="Add Task" class="btn btn-primary" onClick={(e)=>addTasks(e)}>Add Task</button>
  </div>
    
 
</form>
    </section>
  )
}


export default AddTask
