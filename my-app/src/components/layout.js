import React from "react";
import { Drawer, Icon, List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoReverso from "../img/logo_app_reverso.png"
import Logo from "../img/logo_app.png"
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

const useStyle = makeStyles({

    root:{
        display:"flex"
    },
    page:{
        backgroundColor: "#f9f9f9",
        width:"100%"
    },
    img:{
        margin: "10px",
        width: "50px"
    },
    appBar: {
        display: "flex",
        alignItems:"center",
        backgroundColor:"#f44336!important",
        
    },
    drawerList:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
    }

});

export default function Layout({children}){

    const classes = useStyle();
    
    return (
        <div className={classes.root}>
    
            <AppBar className={classes.appBar}>
                <Toolbar >
                    <img src={Logo} className={classes.img}></img>
                    <Typography variant="h5">NoteShare</Typography>
                </Toolbar>
            </AppBar>
            
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )

}