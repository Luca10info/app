import React, { useState } from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoReverso from "../img/logo_app_reverso.png"
import Logo from "../img/logo_app.png"


import NavBar from "./NavBar";
import MenuBar from "./MenuBar";
import { ThemeContext } from "@emotion/react";


const useStyle = makeStyles(theme => ({

    root: {
        display: "flex"
    },
    img: {
        margin: "10px",
        width: "50px"
    },
    page: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '54px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px'
        },
    }
}));

export default function Layout({ children, menuItems }) {

    const classes = useStyle();
    const [isOpen, setIsOpen] = useState(false);

    const funcSetIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={classes.root}>
            <NavBar funcSetIsOpen={funcSetIsOpen}/>
            <MenuBar isOpen={isOpen} menuItems={menuItems} funcSetIsOpen={funcSetIsOpen} />
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )

}