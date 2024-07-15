import { useState } from'react'
import axios from 'axios'

function Create() {

    const [task, setTask] = useState()   

    const clickHandler = () => {
        axios.post('http://localhost:3009/add',
            {task:task}
            .then(result=>{
                location.reload(result)
            })
            .catch(err=>console.log(err))
        )
    }
  return (
    <div className='create_form'>
     Title  <input  type="text" placeholder="Create a new todo" 
     onChange={(event)=>{
        setTask(event.target.value)
     }}  
     />
              <button type='button' style={{margin:8, justifyContent:'right', borderRadius: "20px"}}
              onClick={clickHandler}>
            
              
              Add</button>
    </div>
  )
}

export default Create