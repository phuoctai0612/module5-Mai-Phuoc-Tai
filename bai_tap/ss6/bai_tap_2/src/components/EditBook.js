
import { useNavigate } from "react-router"
import { editBook, getBook } from "../service/BookService";
import { useState, useEffect } from 'react'

export function EditBook() {
    const nativegate = useNavigate();
    const urlParams = window.location.href;
    const query = urlParams.split("/");
    const index = query[query.length - 1];
    const [book, setBook] = useState({})

    useEffect(() => {
        (async () => {
            setBook(await getBook(index))
        })();
    }, [])
  

    return (
        <div>
            <p>Title</p>
            <input placeholder="title" id="title" type="text" />
            <p>Quantity</p>
            <input placeholder="quantity" id="quantity" type="text" />
            <button type="button" onClick={async () => {
                const title = document.getElementById("title").value;
                const quantity = document.getElementById("quantity").value;
                const obj = {
                    id: book.id,
                    title: title,
                    quantity: quantity
                }
                editBook(obj);
                nativegate("/")
            }}>Edit</button>
        </div>

    )
}
