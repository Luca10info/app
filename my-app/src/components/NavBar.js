import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Logo from "../img/logo_app.png"
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    img:{
        margin: "10px",
        width: "50px"
    },
    navBar: {
        display: "flex",
        alignItems:"left",
        backgroundColor:"#f44336!important",
        marginLeft:"240px"
    }

});

export default function NavBar (){

    const classes = useStyle();

    return(
            <AppBar>
                <Toolbar className={classes.navBar} >
                    <img src={Logo} className={classes.img}></img>
                    <Typography variant="h5">NoteShare</Typography>
                </Toolbar>
            </AppBar>
    );
}