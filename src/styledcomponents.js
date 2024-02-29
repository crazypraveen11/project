import {   Button, styled } from "@mui/material"


export var Styled = () =>{

    const Hi = styled(Button)(
        {
            backgroundColor:'red',
            color:'whitesmoke',
            "&:hover":{
                backgroundColor:'whitesmoke',
                color:'red',
            }
        }
    )

    const ABS = styled(Button)((theme)=>({
        colors: 'theme.palette.primary.main',
        "&:hover":{
            backgroundcolor:'pink',
            color:'red'
        }
    }))

    return(
        <>
        <ABS> Click me..! </ABS>
        <br/><br/>
        <Hi>Show me..!</Hi>
        </>
    )
}