import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './Paginas/Inicio'
import Productos from './Paginas/Productos'
import Preguntas from './Paginas/Preguntas'
import Header from './Componentes/Header'
import Login from "./Paginas/Login"
import'./App.css'

  function App(){

  return (
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/preguntas" element={<Preguntas/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
