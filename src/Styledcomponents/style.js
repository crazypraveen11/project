import { Button, styled } from "@mui/material"




export var Createstyle = () => {

    var Info = styled(Button)(
        {
           backgroundColor:'silver',
           color:'royalblue', 
           "&:hover":{
            backgroundcolor:'yellow',
            color:'red'
           }
        }
    )



    return(
        <>
        <Info>Hii</Info>
        </>
    )
}