import React from 'react'
 import {useSelector} from 'react-redux'


const Navbar = () => {

 const {tasksList,error} = useSelector((state)=> state.tasks)

  return (
    <div>
      <h1 className='text-center my-4 text-primary'>project management</h1>
      <p className='text-center lead'>{`currently ${tasksList.length}task(s) pending`}</p>


       {
        (error !== '') ? <h5 className="text-center text-danger">{error}</h5> : null
      }
      
    </div>

  )
}

export default Navbar;


 
 
 
