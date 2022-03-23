import React, { useState } from "react"
import {Button, Container,Paper,Typography, Grid, Menu, MenuItem, makeStyles} from "@mui/material"
import logo from "../img/logo_app.png"
import {red} from '@mui/material/colors'
import logo1 from '../img/logo_app.png'
import { useTheme } from "@emotion/react"

function Dashboard(){

    const [color, setColor]= useState(red[500]);
    return(
        <>
         <Container sx={{mt:"5rem"}}>
            <Typography variant="h5" sx={{my:"20px",}}>
                Appunti più cercati:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{
                        padding: '15px',
                        maxWidth: '1200px',
                        width: 'fit-content',
                        textAlign: 'center'
                        }}>
                        <img src={logo1} height="200px"/>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper elevation={2} style={{
                        padding: '15px',
                        maxWidth: '1200px',
                        width: 'fit-content',
                        textAlign: 'center'
                        }}>
                        <img src={logo1} height="200px"/>
                    </Paper>
                </Grid>
            </Grid>
          
        </Container>
        <Container sx={{mt:"3rem", textAlign:"center"}}>
            <Button variant="outlined" color="error" sx={{mx:"1rem"}}>
                Cerca
            </Button>
            <Button variant="contained">
                Scrivi
            </Button>
        </Container>
        </>
       
    )
}

export default Dashboard;