import { Checkbox, Fab, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Rating, Select, TextField } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite'

export var Muiform = () =>{
    return(
        <>
        <Checkbox defaultChecked disabled />
        <FormControl>
            <FormControlLabel label='Male' control={<Checkbox />} required />
            <FormControlLabel label='Female' control={<Checkbox defaultChecked />}  />
        </FormControl>

        {/* Floating Action button */}
        <Fab color="error" size="">
            <FavoriteIcon></FavoriteIcon>
        </Fab>

        {/* Textfield */}

        <TextField variant="filled" size="small" color="error" label="Name" helperText='Enter Your Name' />
        <TextField variant="outlined" color="secondary" label="Class" />
        <TextField variant="standard" color="warning" label="Class" />

        <TextField 
        label='Name'
        required
        defaultValue='Praveen'  ></TextField>

         {/* Rating */}

         <Rating defaultValue={1.5} max={10} precision={0.5}></Rating>
         <br/>
         <br/>

         {/* Radio group */}
         <FormControl>
            <RadioGroup defaultValue='male'>
                <FormControlLabel value='male' control={<Radio />} label='Male' />
                <FormControlLabel value='female' control={<Radio />} label='Female' />
            </RadioGroup>
         </FormControl>

        {/* Select */}

        
            <FormControl variant="filled" sx={{ minWidth: 180}}>
            <InputLabel>Web Technologies</InputLabel>
                <Select label='age'>
                    <MenuItem value='HTML'>HTML</MenuItem>
                    <MenuItem value='CSS'>CSS</MenuItem>
                    <MenuItem value='BOOTSTRAP'>BOOTSTRAP</MenuItem>
                </Select>
            </FormControl>
            
        </>
    )
}