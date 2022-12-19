import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import "./ProfileModal.css"
import { Divider } from '@mui/material';
import { profileData } from './staticData';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  borderRadius:'1rem',
  boxShadow: 24,
  p: 4,
};



const ProfileModal=({modal,setModal})=> {

  const handleClose = () => setModal(false);

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='profile_heading_container' >
          <Typography id="modal-modal-title" variant="h6" component="h2">User’s Profile</Typography>
          <CancelIcon sx={{fontSize:50}} onClick={handleClose} color='error'/>
        </div>
        <Divider />
          <div className='profile_main_container' >
          <div className="profile_left_side" >
            {profileData.map((profile,index)=>{
                return(
                    <div  key={index} className='profile_left_side_item' >
                        <li className='profile_icons'>{profile.profileIcons}</li> 
                        <Typography sx={{fontWeight:'bold'}} >{profile.profileItemName}</Typography>
            </div>
                )
            })}
          </div>

          <Divider orientation="vertical" flexItem />
          
          <div className="profile_right_side" >
            right side
          </div>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default ProfileModal