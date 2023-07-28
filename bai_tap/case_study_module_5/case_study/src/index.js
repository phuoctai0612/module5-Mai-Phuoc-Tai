import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerManagement from './components/CustomerManagement';
import ServiceManagement from './components/ServiceManagement';
import ConTractManagement from './components/ConTractManagement';
import CreateCustomer from './components/CreateCustomer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditCustomer from './components/EditCustomer';
import Service from './components/Service';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<App />}></Route>
        <Route path='/services' element={<Service />}></Route>
        <Route path='/services-management' element={<ServiceManagement />}></Route>

        <Route path='/customers' element={<CustomerManagement />}></Route>

        <Route path='/contracts' element={<ConTractManagement />}></Route>
        <Route path='/services-create' ></Route>
        <Route path='/services-edit/:id'></Route>
        <Route path='/customer-create' element={<CreateCustomer />}></Route>
        <Route path='/customers-edit/:id' element={<EditCustomer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>



    {/* <ServiceManagement /> */}

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
