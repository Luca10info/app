import { Container, CssBaseline, Switch, Typography } from "@mui/material";
import logo from "./img/noteLogo.png"
import Dashboard from "./components/Dashboard.js";
import Layout from "./components/Layout.js";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {


  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout>
          <Dashboard />
        </Layout>
      </ThemeProvider>

    </>

  );
}

export default App;
