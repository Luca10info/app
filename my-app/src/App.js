import { Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/navbar.js"
import logo from "./img/noteLogo.png"

function App() {
  return (
    <>
      <CssBaseline/>
      <Navbar/>
      <Container sx={{mt:"5rem", textAlign:"center"}}>
        <Typography variant="h3" sx={{mb:"1rem",}}>
          NoteShare
        </Typography>
        <Typography variant="subtitle1" sx={{mb:"2rem"}} component="div">Benvenuto in NoteShare qui puoi scrivere e condividere i tuoi appunti con amici, compagni o colleghi!</Typography>
        <img src={logo} xs={{height:"200px"}} height="300px"/>
      </Container>
    </>
    
  );
}

export default App;
