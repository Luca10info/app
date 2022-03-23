import React from "react"
import { Container, Typography } from "@mui/material"
import Dashboard from "../components/dashboard"
import {Link, Outlet} from "react-router-dom"
function HomePage(){


    return(

        <Container>
            <Typography component="div" variant="h1">
                Questo è l' HomePage del sito
            </Typography>
                <Link to="/homepage/appunti">Appunti</Link>
                <Link to="/homepage/ricerca">Ricerca</Link>
            <Dashboard/>
            <Outlet/>
        </Container>
    )

}

export default HomePage;