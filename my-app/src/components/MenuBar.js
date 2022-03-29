import { Drawer, Hidden, makeStyles } from "@mui/material";


const useStyle = makeStyles({
    drawer: {
        width: drawerWidth,
        backgroundColor: "#f44336",
        color: "white"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#f44336!important",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column"
    }
})


export default function MenuBar(isMobile){

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
    return(

        <div>
            <nav>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        anchor="left"
                        classes={{paper: classes.drawerPaper}}
                    >
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
                </Hidden>
            </nav>
        </div>


    )


}