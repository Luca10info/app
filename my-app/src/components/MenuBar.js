import { Drawer, Hidden, Icon, List, ListItemIcon, ListItemText, ListItem, Divider, Avatar, Typography, ListItemAvatar } from "@mui/material";
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { makeStyles } from "@mui/styles";


const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        backgroundColor: "#f44336",
        color: "white"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f44336!important",
        paddingTop: "14px"
    },
    drawerList: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }
}))


export default function MenuBar({ isOpen }) {

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
    return (

        <div>
            <nav>
                {/*
                    <Hidden smDown implementation='css'>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        open
                        anchor="left"
                        classes={{paper: classes.drawerPaper}}
                    >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar/>
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1" align="left" >Profilo</Typography>
                            </ListItemText>
                           
                        </ListItem>

                        <Divider/>

                        <List className={classes.drawerList}>
                            {menuItems.map((item)=>(
                                <ListItem
                                    button
                                    key={item.text}>
                                <ListItemIcon >{item.logo}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                            ))}
                        </List>
                    
                    </Drawer>
                </Hidden>*/
                }

                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    open={isOpen}
                    anchor="left"
                    classes={{ paper: classes.drawerPaper }}
                >
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

                </Drawer>
            </nav>
        </div>


    )


}