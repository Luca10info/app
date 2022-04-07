import { Container, Typography } from '@mui/material'
import React from 'react'
import errorImg from "../img/error404.gif"
export default function ErrorPage() {
  return (
    <Container sx={{ textAlign: "center" }}>

      <Typography
        display="inline"
        variant="h2"
        sx={{ fontWeight: 500, color: "error.main", fontSize: "4rem" }}
      >
        Error
      </Typography>
      <Typography
        display="inline"
        variant="h2"
        sx={{ fontWeight: 600, color: "primary.main", fontSize: "5rem", textShadow: "2px 2px rgba(255, 0, 255, 0.2), 5px 5px 2px rgba(0, 0, 0, 0.5)" }}
      >
        &nbsp; 404!
      </Typography>
      <Typography
        gutterBottom
        variant="h2"
        sx={{ fontWeight: 500, color: "error.main", fontSize: "4rem" }}
      >
        Page not found!
      </Typography>
      <img src={errorImg} alt="error404" />
    </Container>
  )
}
