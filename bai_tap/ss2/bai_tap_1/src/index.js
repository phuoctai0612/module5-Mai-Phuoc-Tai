import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<h1>Taif</h1>
const students = [
  { id:1,
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    id:2,
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    id:3,
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    id:4,
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    id:5,
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    id:6,
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]
const a = 
<table>
  <h2>Students</h2>
  <thead>
  <tr>
    <th>Compani</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  </thead>
  <tbody>
{students.map(student => (
  <tr key={student.id}>
    <td>{student.company}</td>
    <td>{student.contact}</td>
    <td>{student.country}</td>
  </tr>
))}; 
 </tbody>
</table>
root.render(a)

