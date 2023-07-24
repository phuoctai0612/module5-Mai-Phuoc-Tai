
import { createBook } from "../service/BookService";
import {useNavigate} from "react-router"
export function CreateBook(){

const nativegate=useNavigate();
const handleCreate=()=>{
      const title = document.getElementById("title").value;
      const quantity = document.getElementById("quantity").value;
      const obj={
        title : title,
        quantity:quantity
      }
     createBook(obj);
     nativegate("/")
 }


    return(
        <div>
        <p>Title</p>
        <input placeholder="title" id="title" type="text"/>
        <p>Quantity</p>       
        <input placeholder="quantity" id="quantity" type="text"/>
        <button type="button" onClick={handleCreate}>Create</button>
</div>
    
    )
}