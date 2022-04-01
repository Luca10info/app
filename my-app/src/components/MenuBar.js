import { Drawer, Hidden, Icon, List, ListItemIcon, ListItemText, ListItem, Divider, Avatar, Typography, ListItemAvatar, Toolbar } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";
import Profile from "./Profile";
import { useState } from "react";
import { spacing } from '@mui/system';

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


export default function MenuBar({ isOpen, funcSetIsOpen }) {

    const [profile, setProfile] = useState(false);
    const classes = useStyle();
    const menuItems = [
        {
            text: "Appunti",
            logo: <DriveFileRenameOutlineTwoToneIcon />,
            path: "/appunti"
        },
        {
            text: "Ricerca",
            logo: <SearchTwoToneIcon />,
            path: "/create"
        }
    ]

    const drawer = (
        <div>
            <div sx={{ p: "12px"}}>
                <Toolbar />
                <Profile
                    name="luca"
                />

                <Divider />

                <List className={classes.drawerList}>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}>
                            <ListItemIcon >{item.logo}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </div>
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