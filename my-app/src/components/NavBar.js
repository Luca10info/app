import { AppBar, IconButton } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Logo from "../img/logo_app.png"
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@emotion/react";
import zIndex from "@mui/material/styles/zIndex";
import { palette } from "@mui/system";



const useStyle = makeStyles((theme) => ({
    img: {
        width: "50px",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    navBar: {

    },
    navBarIcon: {
        display: "flex",
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('sm')]: {
            width: "40%"
        }

    },
    navBarContent: {
        color: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            display: "none !important"
        }
    }

}));

export default function NavBar({ funcSetIsOpen }) {

    const classes = useStyle();

    return (
        <AppBar posittion="fixed" sx={{ zIndex: zIndex.drawer + 1 }}>
            <Toolbar sx={{
                backgroundColor: 'primary.main',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }} >
                <div sx={{
                    backgroundColor: "primary.main",
                }}>
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