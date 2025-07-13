import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
function App() {
  const [todos, setTodos] = useState([])
   fetch('http://localhost:3000')
   .then(async function(res){
      const collect=await res.json();
      setTodos(collect.space)
   })
   .catch(function(err){
    console.log(err);
    
   })
  return (
    <>
      <CreateTodo/>
      {todos.length===0?<p>loading .......</p>:<Todo todos={todos} />
}
    </>
  )
}

export default App
