import react, { useState } from "react"
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "../sideDrawer/Drawers.css"
import { Box } from "@mui/system";
import DrawerForm from "./DrawerForm";
const Drawers = ({state,setState,isEdit,setIsEdit,receivedMapData}) => {
  // const [state, setState] = useState(false)


  const handleOpen = () => {
    setState(true)
  }

  const handleClose = () => {
    setState(false)
  }



  return (
    <div>
      <Fab onClick={handleOpen} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Drawer open={state} anchor='right' onClose={handleClose} >
        <div className="main_drawer_container">
          <div className="drawer_heading" >
            <Typography sx={{ fontWeight: 'bold', padding: 2 }} variant="h5">{isEdit?'Update Invite Code':'Add Invite Code'}</Typography>
            <Typography onClick={handleClose}>X</Typography>
          </div>
          <Divider />
          <Box p={2} width='300px' role='presentation'>
            <DrawerForm receivedMapData={receivedMapData} isEdit={isEdit} setIsEdit={setIsEdit} handleClose={handleClose} setState={setState}/>
          </Box>
        </div>
      </Drawer>
    </div>
  )
}

export default Drawers