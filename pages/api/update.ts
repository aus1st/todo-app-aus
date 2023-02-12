import { updateTodo } from "../api/todos";
import type { NextApiRequest, NextApiResponse } from 'next'
//import {todo} from '../api/todo.model';



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method=== "POST") {
        let {id,name,isDone} = JSON.parse(req.body);
        updateTodo({id, isDone: Boolean(isDone)});  
        res.status(200).json({ msg: "todo Updated" });
    } else {
        res.status(400).json({ msg: "error occured!" });
    }
  }