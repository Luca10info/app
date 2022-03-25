import { Container, CssBaseline, Switch, Typography } from "@mui/material";
import logo from "./img/noteLogo.png"
import Dashboard from "./components/Dashboard.js";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Layout from "./components/layout.js";



function App() {
  return (
    <>
      <CssBaseline/>

      <Layout>
        <Dashboard/>
      </Layout>

    </>
    
  );
}

export default App;
