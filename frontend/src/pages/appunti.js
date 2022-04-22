import { Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function Appunti (){
    return(
        <Container>
            <Typography sx={{marginLeft:"300px", marginTop:"300px"}} variant="h1" component="div">
                Appunti
            </Typography>
        <Outlet/>
        </Container>
        
    );
}

export default Appunti;