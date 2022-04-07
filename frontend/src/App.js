import { CssBaseline, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard.js";
import Layout from "./components/Layout.js";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import Appunti from "./pages/appunti";


const customtheme = createTheme({
  palette: {
    primary: {
      main: "#f44336"
    },
    secondary: {
      main: "#fff"
    },
    error:{
      main:"#000"
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
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/appunti" element={<Appunti/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>

    </>

  );
}

export default App;
