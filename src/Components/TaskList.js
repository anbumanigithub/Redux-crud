import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask'
import {useSelector,useDispatch} from 'react-redux'
 import { setselectedTask,removeFromList, getTastsFromServer} from '../Slices/tasksSlice';
 


const TaskList = () => {

 const {tasksList} =useSelector((state)=> state.tasks)
 const dispatch=useDispatch()


  
    const  updateTask=(task)=>{
        setModalShow(true)
        dispatch(setselectedTask(task))
    }


useEffect(()=>{


dispatch(getTastsFromServer())


},[dispatch])













    const deleteTask=(task)=>{
    dispatch(removeFromList(task))


  }
    const[modalShow,setModalShow]=useState(false)
  return (
    < >
      
      <Table striped bordered hover>
  <thead>
    <tr className='text-center'>
      <th>#</th>
      <th>Title</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>


       {
      tasksList&&tasksList.map((task,index)=>{
        return(

<tr className='text-center' key={task.id}>
      < td>{index + 1}</ td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td><Button variant="primary" className='mx-3' onClick={()=>updateTask(task)}><i class="bi bi-pencil-square"></i> </Button>
      <Button variant="primary" onClick={()=>deleteTask(task)}><i class="bi bi-trash3"></i> </Button></td>
    </tr>


        )
      })
      }
  
  </tbody>
</Table>
<MyVerticallyCenteredModal
       show ={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ >
  )
}

export default TaskList;
