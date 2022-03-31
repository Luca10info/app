import { AppBar, IconButton } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Logo from "../img/logo_app.png"
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@emotion/react";



const useStyle = makeStyles( (theme)=>({
    img: {
        margin: "10px",
        width: "50px"
    },
    navBar: {
        backgroundColor: "#f44336!important",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    navBarIcon: {
        display: "flex",
        color: "white!important",
      /*  [theme.breakpoints.up('sm')]:{
            width:"40%"
        }*/
        
    },
    navBarContent: {
        color: "white!important"
    }

}));

export default function NavBar({ funcSetIsOpen }) {

    const classes = useStyle();

    return (
        <AppBar>
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