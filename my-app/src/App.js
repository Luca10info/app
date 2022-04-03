import { Container, CssBaseline, Switch, Typography } from "@mui/material";
import logo from "./img/noteLogo.png"
import Dashboard from "./components/Dashboard.js";
import Layout from "./components/Layout.js";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { BrowserRouter, Route } from "react-router-dom";
import Appunti from "./pages/appunti";
const customtheme = createTheme({
  palette: {
    primary: {
      main: "#f44336"
    },
    secondary: {
      main: "#fcfcfc"
    }
  }
});

const menuItems = [
  {
    text: "Appunti",
    logo: <DriveFileRenameOutlineTwoToneIcon />,
    path: "/appunti"
  },
  {
    text: "Ricerca",
    logo: <SearchTwoToneIcon />,
    path: "/create"
  }
]

function App() {


  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customtheme}>
        <BrowserRouter>
          <Layout menuItems={menuItems}>
            <Switch>
              <Route exact path="/" >
                <Dashboard />
              </Route>
              <Route path="/appunti" >
                <Appunti />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>

    </>

  );
}

export default App;
