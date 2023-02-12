"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";



async function AddNewTodo(name, refresh) {
  await fetch('http://localhost:3000/api/add',{
    method:'POST',
    body: JSON.stringify({name})
  });
  refresh();
}


export function AddToDo() {
  const router = useRouter();
  let [name, setName] = useState("");
    return (
        <div >
        <input type="text" style={{height:30}} onChange={(e)=>setName(e.target.value) } value={name}></input> &nbsp;
        <button type="button" style={{height:30}} 
        onClick={
          async()=> {await AddNewTodo(name, router.refresh);
          setName("") }}>
            Add </button>
      </div>

    )
}