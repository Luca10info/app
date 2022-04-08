import { Avatar, Typography } from "@mui/material";

export default function Profile({ name }) {
    return (
        <>
                <Avatar sx={{ width: '56px', height: '56px' }}>
                    {name.substring(0, 1)}
                </Avatar>
                <Typography variant="subtitle1" style={{marginTop:"0.4rem"}}>
                    {name}
                </Typography>
        </>



    )
}