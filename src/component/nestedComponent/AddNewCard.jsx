import React from 'react'
import "../nestedComponent/AddNewCard.css"
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
const AddNewCard = ({handleOpen}) => {
  return (
    <div onClick={handleOpen} className='addNewCard_container'>
        <Typography sx={{fontSize:'5rem',color:'grey'}}>+</Typography>
        <Typography sx={{fontSize:'2.5rem',color:'grey'}}>Add New</Typography>
    </div>
  )
}

export default AddNewCard