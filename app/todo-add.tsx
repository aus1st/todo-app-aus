
"use client";

import { useRouter } from "next/navigation";




async function update(id, isDone,refresh) {
    await fetch(`http://localhost:3000/api/update`,    {
        method: 'POST',
        body: JSON.stringify({id,isDone})
    });
  refresh();
}

async function deleteToDo(id,refresh) {
    await fetch(`http://localhost:3000/api/delete?id=${id}`,{
        method:'DELETE'
    });
    refresh();
}

export default function Todo({todo}) {
    const router = useRouter();
return (
    <>
    <input  type="checkbox" onChange={(e)=> update(todo.id,e.target.checked,router.refresh)}
    ></input>
    <span style={{padding:"5px"}}>{todo.name} </span>    
     <button type="button" onClick={()=>deleteToDo(todo.id,router.refresh)}>Delete</button>
    </>
)
   
}