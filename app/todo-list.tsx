
// async function getToDos() {
//   let todos = await fetch("http://localhost:3001/api/todos");
//   return todos.json();
// }

import Todo from "./todo-add";

const getToDos = async ()=>{
  let todos = await fetch("http://localhost:3000/api/todos");
  return todos.json();
}

export default async function TodoList() {
  const {todos}= await getToDos();  
  
  return (
        
      <div>
       
      <ul style={{listStyleType:"none", padding:0}}>
        {todos.map((t:any) => {
          return(
          <li key={t.id} style={{padding: "5px 0"}}>
           <Todo todo={t} />
          </li>
          );
        })}
      </ul>
    </div>
    )
}