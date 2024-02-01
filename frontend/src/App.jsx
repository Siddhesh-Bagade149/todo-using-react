import { useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
//render for backen deploy free
//vercel for frontend free

function App() {
  const [todos, setTodos] = useState([])

  fetch('http://localhost:3000/todos')
    .then(async (res)=>{
      const data=await res.json();
      setTodos(data.todos);
    })

  return (
    <div>
    <CreateTodo />
    <Todos todos={todos}></Todos>
    </div>

  )
}

export default App
