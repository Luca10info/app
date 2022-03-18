import { Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/navbar.js"
import logo from "./img/noteLogo.png"
import Dashboard from "./components/dashboard.js";
function App() {
  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Dashboard/>
    </>
    
  );
}

export default App;
