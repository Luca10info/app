import React from "react";
import { Drawer, Icon } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoReverso from "../img/logo_app_reverso.png"

const drawerWidth = 240;

const useStyle = makeStyles({

    root:{
        display:"flex"
    },
    page:{
        backgroundColor: "#f9f9f9",
        width:"100%"
    },
    drawer: {
        width: drawerWidth,
        backgroundColor: "#f44336"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f44336!important"
    }
});

export default function Layout({children}){

    const classes = useStyle();

    return (
        <div className={classes.root}>
    
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5">
                        NoteShare
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )

}