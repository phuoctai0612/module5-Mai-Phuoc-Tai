import { GetListUser } from "./components/GetListUser";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetListUser />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
