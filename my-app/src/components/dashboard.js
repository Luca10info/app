import {Button, Container,Typography} from "@mui/material"
import logo from "../img/noteLogo.png"
function Dashboard(){


    return(
        <>
         <Container sx={{mt:"5rem", textAlign:"center"}}>
            <Typography variant="h3" sx={{mb:"1rem",}}>
                NoteShare
            </Typography>
            <Typography variant="subtitle1" sx={{mb:"2rem"}} >Benvenuto in NoteShare qui puoi scrivere, condividere e cercare appunti!</Typography>
            <img src={logo} xs={{height:"200px"}} height="300px"/>
        </Container>
        <Container sx={{mt:"3rem", textAlign:"center"}}>
            <Button variant="outlined">
                Cerca
            </Button>
        </Container>
        </>
       
    )
}

export default Dashboard;