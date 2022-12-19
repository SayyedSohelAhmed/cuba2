import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { Button } from '@mui/material';
import Button from "../../custumComponent/Button"
import "./ButtonSelector.css"

const ButtonSelector = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value );
    };

    return (
        <>
                <Button className='export_btn' >Export</Button>
            <Box sx={{  minWidth: 120 }}>
                <FormControl>
                    {/* <InputLabel id="demo-simple-select-label">10</InputLabel> */}
                    <Select 
                        sx={{width: 60,borderRadius:'13px', height: 35,marginLeft:'1.5rem'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        // label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem sx={{borderRadius:'1rem' }} value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}
export default ButtonSelector;