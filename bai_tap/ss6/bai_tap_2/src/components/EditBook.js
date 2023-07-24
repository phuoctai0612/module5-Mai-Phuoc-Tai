
import { editBook } from "../service/BookService";
import {useNavigate} from "react-router"
import { getBook } from "../service/BookService";
import { useState } from "react";
export function EditBook(){
    // console.log(id);
// const [book,setBook]=useState([])
const nativegate=useNavigate();
const handleCreate= async()=>{
    const bookOld=await getBook();
    // console.log(bookOld.id);
      const title = document.getElementById("title").value;
      const quantity = document.getElementById("quantity").value;
      const obj={
        
        title : title,
        quantity:quantity
      }
    
    //  nativegate("/")
 }


    return(
        <div>
        <p>Title</p>
        <input placeholder="title" id="title" type="text"/>
        <p>Quantity</p>       
        <input placeholder="quantity" id="quantity" type="text"/>
        <button type="button" onClick={handleCreate}>Edit</button>
</div>
    
    )
}