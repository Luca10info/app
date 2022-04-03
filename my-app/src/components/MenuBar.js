import { Drawer, Hidden, Icon, List, ListItemIcon, ListItemText, ListItem, Divider, Avatar, Typography, ListItemAvatar, Toolbar } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";
import Profile from "./Profile";
import { useState } from "react";
import {Link} from 'react-router-dom';
const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        color: "white"

    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerList: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }
}))


export default function MenuBar({ isOpen, funcSetIsOpen, menuItems }) {

    const [profile, setProfile] = useState(false);
    const classes = useStyle();


    const drawer = (
        <div>
            <Toolbar />
            <div style={{ padding: "12px" }}>
                <Profile
                    name="Luca"
                />
            </div>
            <Divider />

            <List className={classes.drawerList}>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        component={Link}
                        key={item.text}
                        to={item.path}
                    >
                        <ListItemIcon >{item.logo}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (

        <div>
            <nav>
                {
                    <Hidden smDown implementation='css'>
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            open
                            anchor="left"
                            classes={{ paper: classes.drawerPaper }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                }

                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    open={isOpen}
                    onClick={funcSetIsOpen}
                    anchor="left"
                    classes={{ paper: classes.drawerPaper }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>


    )


}