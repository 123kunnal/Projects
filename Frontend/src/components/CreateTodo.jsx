import { useState } from "react"
import { use } from "react"

export function CreateTodo(){
  const [title,setTitle]=useState([])
  const [description,setDescription]=useState([])
    return <>
     <input type="text" onChange={function(e){
        const result=e.target.value;
        setTitle(result);
     }} />

     <input type="text" onChange={function(e){
        const dash=e.target.value;
        setDescription(dash);
     }} />
     <button onClick={
      fetch("http://localhost:3000/submit",{
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body:JSON.stringify({
            title:title,
            description:description
         })
         })
         .then(function(){
            alert('Todo added')
         })
     }>ADD TODO</button>
    </>
}