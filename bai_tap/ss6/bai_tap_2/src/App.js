
import { getBook, getListBook } from "./service/BookService";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { deleteBook } from "./service/BookService";
import {useNavigate} from "react-router"


function App() {
  const [books, setBooks] = useState([]);
 const natigate=useNavigate();
  useEffect(() => {
    (async () => {
      setBooks(await getListBook())
    })();
  }, [])



  return (
    <div >
      <h1>Library</h1>
      <Link to={`/book/create`}> Add a new book</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quanlity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) =>
            <tr key={`b_` + index}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>
                <Link to={`/book/edit/` + item.id}>  <button>Edit</button></Link>
                <button onClick={async () => {
                  deleteBook(item.id)
                  const check = await getListBook()
                  setBooks(check)
                  natigate("/")
                }} type="submit">Delete</button></td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default App;
