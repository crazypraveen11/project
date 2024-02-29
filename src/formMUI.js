import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"




export var Form =() =>{

    return(
        <>
    <Typography sx={{backgroundColor:'wheat'}}>

          <Typography variant="h3" align="center" color='error' sx={{textDecoration:'underline'}} >
               FORM
          </Typography><br/><br/>

        
         <Typography align="center">
            <TextField variant="outlined" label='Name' color="warning" helperText='Enter Your Name' required  /><br/><br/>
            <TextField variant="outlined" label='Age' color="warning" helperText='Enter Your Age' required /><br/><br/>

            <Typography variant="label">Gender :
               <FormControl>
                  <RadioGroup sx={{margin:2}}>
                        <FormControlLabel value='male' label='Male' control={<Radio color="error"/>} />
                        <FormControlLabel value='female' label='Female' control={<Radio color="warning"/>} />
                        <FormControlLabel value='other' label='Other' control={<Radio color="success" />} />
                  </RadioGroup>
               </FormControl>
            </Typography><br/>

           <TextField variant="outlined" label='Address' color="warning" helperText='Enter Your Address' required  /><br/><br/>

           <FormControl variant="standard" sx={{ minWidth: 180}}>
            <InputLabel>Interested Subject</InputLabel>
                <Select >
                    <MenuItem value='Tamil'>Tamil</MenuItem>
                    <MenuItem value='Maths'>Maths</MenuItem>
                    <MenuItem value='Science'>Science</MenuItem>
                    <MenuItem value='English'>English</MenuItem>
                </Select>
            </FormControl><br/><br/>

             <Typography variant="label"> Hobbies :
                <FormControl sx={{margin:3}} >
                    <FormControlLabel label='Reading' control={< Checkbox  color="warning" />}  />
                    <FormControlLabel label='Playing' control={< Checkbox defaultChecked color="success" />}  />
                    <FormControlLabel label='Singing' control={< Checkbox  color="info"/>}  />
                    <FormControlLabel label='TV' control={< Checkbox defaultChecked color="error"/>}  />
                    <FormControlLabel label='Dance' control={< Checkbox color="primary"/>}  />
                </FormControl> 
             </Typography><br/>


             <Button 
                variant='contained'
                color='error'
                align='center'
                size='large'
                sx={
                    {"&:hover":{
                    bgcolor:'white',
                    color:'red',
                }}}
                >Submit
             </Button>
              <br/><br/>

        </Typography>
   </Typography>
        </>
    )
}