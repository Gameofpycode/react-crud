import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Pnf from "./Components/Pnf";
import ProtectedRoute from "./PrivateRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import Create from "./Components/Create";
import Update from "./Components/Update";
import './App.css'

function App(props){
  return(
    <BrowserRouter>
      <Header/>
      <ToastContainer/> 
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/create`} element={<Create/>}/>
          <Route path={`/update/:bookId`} element={<Update/>}/>

        </Route>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App





