import { AppBar, IconButton } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Logo from "../img/logo_app.png"
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@emotion/react";



const useStyle = makeStyles( (theme)=>({
    img: {
        width: "50px",
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    },
    appBar:{
        zIndex: theme.zIndex.drawer +1 +"!important",
    },
    navBar: {
        backgroundColor: "#f44336!important",
        display: "flex",
        alignItems: "center",
        justifyContent:"left"
    },
    navBarIcon: {
        display: "flex",
        color: "white!important",
        [theme.breakpoints.up('sm')]:{
            width:"40%"
        }
        
    },
    navBarContent: {
        color: "white!important",
        [theme.breakpoints.up('sm')]:{
            display:"none !important"
        }
    }

}));

export default function NavBar({ funcSetIsOpen }) {

    const classes = useStyle();

    return (
        <AppBar posittion="fixed" className={classes.appBar} >
            <Toolbar className={classes.navBar} >
                <div className={classes.navBarIcon}>
                    <IconButton className={classes.navBarContent}
                        onClick={funcSetIsOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <img src={Logo} className={classes.img}></img>
                <Typography variant="h5">NoteShare</Typography>

            </Toolbar>
        </AppBar>
    );
}