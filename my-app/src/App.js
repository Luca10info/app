import { Container, CssBaseline, Switch, Typography } from "@mui/material";
import logo from "./img/noteLogo.png"
import Dashboard from "./components/dashboard.js";
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
