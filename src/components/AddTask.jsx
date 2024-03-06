import React from 'react'
import "./AddTask.css"
import { useState } from 'react'
import { useToDoContext } from '../contexts';

function AddTask() {
  const [taskName, setTaskName] = useState("") ;
  const {addTask} = useToDoContext() ;

  const add = (e)=>{
    e.preventDefault() ;

    if(!taskName) return ;
    
    addTask({taskName , isCompleted : false}) ;
    setTaskName("") ;
  }

  return (
    <form onSubmit={add} className='addtask'>
        <input type="text" placeholder='Add task' value={taskName} onChange={(e)=> setTaskName(e.target.value) }/>
        <button type='submit'>+</button>
    </form>
  )
}

export default AddTask