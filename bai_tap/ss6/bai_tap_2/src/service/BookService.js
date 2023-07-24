     import axios from 'axios';

     export async function getListBook(){
       return (await axios.get('http://localhost:8080/books')).data
     }
     export async function getBook(id){
       (await axios.get('http://localhost:8080/books/'+id))
     }

     
     export async function createBook(book){
      await axios.post('http://localhost:8080/books',book);
     }

     export async function deleteBook(id){
      await axios.delete('http://localhost:8080/books/'+id);
     }

     export async function editBook(book){
      await axios.post('http://localhost:8080/books',book);
     }

