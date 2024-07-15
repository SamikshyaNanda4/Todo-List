import  { useEffect, useState } from'react'
import Create from "./assets/Create"
import axios from 'axios'
function Home() {

    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3009/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    })


    const handleEdit = () => {
       axios.put('http://localhost:3009/update'+id)
       .then(result=>{
        location.reload
       })
       .catch(err=>console.log(err))
    }

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3009/delete/'+id)
        .then(result=>{
            location.reload(result)
        })
       .catch(err=>console.log(err))
    }
  return (
    <div className="home">
        <h1>Todo List</h1>
        <Create/>
        <br />
            {todos.length===0
            ? 
            <div><h2>No todos yet</h2></div> 
            :
            todos.map((todo, index) => (
                <div className='task' key={index}>
                    <div className='checkbox' onClick={()=>handleEdit(todo.id)}>
                        {todo.done? 
                        <BsFillCheckCircleFIll className='icon'></BsFillCheckCircleFIll>
                        : <BsCircleFill className='icon'/>}
                    <BsCircleFill className="icon"/>
                    <p className={todo.done?
                        "line_through"
                        :
                        "line"
                    } >{todo.task}</p>
                     </div>
                     <div>
                        <span><BsFillTrashFill className='icon' 
                        onClick={()=>handleDelete(todo.id)}/> </span>
                     </div>
                     </div>
                     
            ))} 
        
    </div>
  )
}

export default Home