import { Container, Typography } from '@mui/material'
import React from 'react'
import errorImg from "../img/error404.gif"
export default function ErrorPage() {
  return (
    <Container>
        
        <Typography 
        display="inline"
        variant="h2" 
        sx={{fontWeight:800, color:"error.main", fontSize:"4rem"}}
        >
            Error 
        </Typography>
        <Typography 
        display="inline"
        variant="h2" 
        sx={{fontWeight:800, color:"red", fontSize:"5rem"}}
        >
            404! 
        </Typography>
        <Typography 

        variant="h2" 
        sx={{fontWeight:800, color:"error.main", fontSize:"4rem"}}
        >
            Page not found! 
        </Typography>
        <img src={errorImg} alt="error404"/>
    </Container>
  )
}
