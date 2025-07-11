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
     <button></button>
    </>
}