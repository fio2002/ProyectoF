import {BrowserRouter , Routes, Route} from 'react-router-dom'
import React from 'react';
import CompLogin from './Componentes/CompLogin'
import CompPrincipal from "./Componentes/CompPrincipal"
import './App.css';
import CompRegistroForm from './Componentes/CompRegistroForm';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<CompLogin/>} ></Route>
      <Route path="/login" element={<CompLogin/>} ></Route>
      <Route path="/registrar" element={<CompRegistroForm/>} ></Route>
      <Route path="/home" element={<CompPrincipal/>} ></Route>
   </Routes>
      
   </BrowserRouter>

    
  );
}

export default App;
