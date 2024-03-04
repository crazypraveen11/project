import  { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export let Navigation =() =>{

    return(
        <>
        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant='h6' sx={{flexGrow : 1,marginLeft: 2}}>HOME</Typography>
                <Typography variant='h6' sx={{flexGrow : 20}}>ABOUT</Typography>
                <Button variant='outlined' color='error'>Login</Button>
            </Toolbar>
        </AppBar>
        </>
    )
    
}