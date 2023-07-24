import { createTodo } from "./service/TodoService";
import { useState, useEffect } from "react";
import { getListTodo } from "./service/TodoService";
function App() {
  const [todo, setTodo] = useState([]);
  const [todo1, setTodo1] = useState([]);
  const handleChange = (event) => {
    const box = event.target.value;
    setTodo(() => box)
  }
  const handleAddItem =async () => {
   const obj = { name: todo }
      createTodo(obj);

  }

  useEffect(() => {
    (async () => {
      const a = await getListTodo();
      setTodo1(a);
    }
    )();
  },[])
  return (
    <div >
      <h1 >Todo List</h1>

      <form >
        <input placeholder="todo task" onChange={handleChange} />
        <button onClick={handleAddItem}>Submit</button>
      </form>

      {todo1.map((item, index) => <ul key={`td` + index}>
        <li >{item.name}</li>
      </ul>)}

    </div>
  );
}

export default App;
