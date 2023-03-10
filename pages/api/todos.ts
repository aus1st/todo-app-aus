// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from "uuid";



let todos = [
    {
        id: uuidv4(),
        name: "Learn Next.js",
        isDone: false,
    },
    {
        id: uuidv4(),
        name: "Learn HTML",
        isDone: false,
    },
    {
        id: uuidv4(),
        name: "Start new sideproject",
        isDone: false,
    }
]


export const addToDo  = (name)=> {
    let newTodo = {
        id: uuidv4(),
        name,
        isDone: false
    }
    todos.push(newTodo);
}


export const updateTodo = ({id, isDone}) => {
    let newTodos=[];
    todos.map((obj)=>{
        let newTodo = {...obj};
        if(obj.id == id) {
            newTodo = {
                id,
                name: obj.name,
                isDone  
            };
        }
        newTodos.push(newTodo);
    });

    todos = newTodos;
}

export const deleteTodo = (id)=>{
    todos = todos.filter((obj)=>{
        return obj.id !== id;
    });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ todos })
}
 