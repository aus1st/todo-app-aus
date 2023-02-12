import { addToDo } from "../api/todos";
import type { NextApiRequest, NextApiResponse } from 'next'
//import {todo} from '../api/todo.model';



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method=== "POST") {
        let {name:todo} = JSON.parse(req.body);
        addToDo(todo);  
        res.status(200).json({ msg: "todo added" });
    } else {
        res.status(400).json({ msg: "error occured!" });
    }
  }