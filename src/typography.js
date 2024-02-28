// import {Typography} from '@mui/material' 
// slow
import Typography from '@mui/material/Typography'
// fast
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Send from '@mui/icons-material/Send'

export var Typo = () =>{
    return(
        <>
        <Typography 
        variant='h2'
        component='h1'
        sx={{
            bgcolor:'pink',
            color:'blue'
        }}
        align='center'
        gutterBottom={true}
        noWrap={true}
        
        >
            Hello Google, this is a good scenary.Sequence is a database object to generate a unique numbers. 
        </Typography><br/><br/>
        <Typography align='center' sx={{bgcolor:'blue',color:'white'}} > Hii </Typography><br/><br/>
        
        
        <Typography align='center'>
           
            <SendRoundedIcon color='primary' />
            
            <Button
            variant='contained'
            disableElevation
            color='inherit'
            align='center'
            size='large'
            sx={{"&:hover":{
                bgcolor:'greenyellow',
                color:'red'
            }}}
        >CLICK ME..!
        </Button>
        </Typography>
        
        <br/><br/><br/>
             <ButtonGroup>
                <Button 
                variant='outlined' 
                color='success' >Hii</Button>
                <Button 
                variant='text'
                color='info' >Hello</Button>
                <Button variant='contained' color='secondary'>Good</Button>
             </ButtonGroup><br/><br/>

             <Typography align='center'>
            <Button
            variant='contained'
            sx={{
                bgcolor:'gray',
                color:'yellowgreen',
                "&:hover":{
                bgcolor:'yellowgreen',
                color:'gray'}
            }}
        >CLICK ME..!
        </Button>
        </Typography>
        <br/>
        <Button variant='contained' color='info' startIcon={<Send />} >SEND </Button>
        <Button variant='contained' color='info' endIcon={<Send />} > SEND </Button>
        </>
    )
}