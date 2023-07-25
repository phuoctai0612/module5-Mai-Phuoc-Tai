
import { useNavigate } from "react-router"
import { editBook, getBook } from "../service/BookService";
import { useState, useEffect } from 'react'
import {Field, Form, Formik} from "formik"
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
            <Formik initialValues={{ title1: book.title ,  quantity1:book.quantity}}>
            <Form>
            <Field id="title" type="text" name="title1" />
            <p>Quantity</p>
            <Field id="quantity" type="text" name="quantity1" />
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
            </Form>
            </Formik>
        </div>

    )
}
