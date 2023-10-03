import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Pnf from "./Components/Pnf";

function App(props){
  return(
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App





