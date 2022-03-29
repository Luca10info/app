import React, { useState } from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoReverso from "../img/logo_app_reverso.png"
import Logo from "../img/logo_app.png"


import NavBar from "./navBar";
import MenuBar from "./menuBar";
import { ThemeContext } from "@emotion/react";


const useStyle = makeStyles( theme =>({

    root:{
        display:"flex"
    },
    img:{
        margin: "10px",
        width: "50px"
    },
    page:{
        backgroundColor:"#f9f9f9",
        width: "100%"
    }
}));

export default function Layout({children}){

    const classes = useStyle();
    const [isMobile, setIsMobile] = useState(false);

    const funcSetIsMobile = () => {
        setIsMobile(!isMobile);
    }
    return (
        <div className={classes.root}>
            <MenuBar isMobile={isMobile}/>
            <NavBar/>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )

}