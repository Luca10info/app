import { Container, CssBaseline, Switch, Typography } from "@mui/material";
import Navbar from "./components/navbar.js"
import logo from "./img/noteLogo.png"
import Dashboard from "./components/dashboard.js";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Container>
        <div>
          <Link to="/homepage">Homepage</Link>
        </div>
        <div> 
          <Link to="/about-us">About us</Link>
        </div>
        <Outlet/>
      </Container>
    </>
    
  );
}

export default App;
