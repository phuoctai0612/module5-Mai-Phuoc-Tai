import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentComponent from './components/StudentComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const students = [{
    id: 1,
    name: "Tai",
    age: 21,
    address: "Binh An"
}, {
    id: 2,
    name: "T",
    age: 21,
    address: "Binh An"
},
{
    id: 3,
    name: "a",
    age: 22,
    address: "Binh An"
}]



root.render(<StudentComponent students={students} />)