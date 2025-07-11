import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      
    </>
  )
}

export default App
