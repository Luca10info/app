import React from "react";
import { Drawer, Icon, List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoReverso from "../img/logo_app_reverso.png"
import Logo from "../img/logo_app.png"
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


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
        backgroundColor: "#f44336",
        color: "white"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f44336!important"
    },
    img:{
        margin: "10px",
        width: "50px"
    },
    drawerTitle: {
        display: "flex",
        alignItems:"center",
        backgroundColor:"grey"
    }

});

export default function Layout({children}){

    const classes = useStyle();
    const menuItems = [
        {
            text: "Appunti",
            logo: <DriveFileRenameOutlineTwoToneIcon/>,
            path: "/appunti"
        },
        {
            text: "Ricerca",
            logo: <SearchTwoToneIcon/>,
            path:"/create"
        }
    ]
    return (
        <div className={classes.root}>
    
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerTitle}>
                    <img src={Logo} className={classes.img}></img>
                    <Typography variant="h5" color="white">
                            NoteShare
                    </Typography>

                </div>

                <List>
                    {menuItems.map((item)=>(
                         <ListItem 
                            
                         key={item.text}>
                         <ListItemIcon >{item.logo}</ListItemIcon>
                         <ListItemText primary={item.text}/>
                     </ListItem>
                    ))}
                </List>
               
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )

}