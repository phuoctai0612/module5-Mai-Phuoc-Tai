import axios from "axios";
import { useEffect, useState } from "react";
import { getListTodo } from "../service/TodoService";

export default function ListTodo(){
 
    const [todo,setTodo] =useState([]);
    useEffect(()=>{
    (async ()=>{
            setTodo(await getListTodo());
        })();
    })
}   