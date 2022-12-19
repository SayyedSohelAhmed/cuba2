import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';
import Input from "../../custumComponent/Input"
import Button from "../../custumComponent/Button"

import "../nestedComponent/Users.css"
import { useState } from 'react';
import ProfileModal from './userNestedComponent/ProfileModal';
import ButtonSelector from './ButtonSelector';
const Users = () => {
  const [modal, setModal] = useState(false)

  const handleOpen = () => {
    setModal(true)
  }

  const sThead = {
    color: '#8457bf'
  }

  const sTdata = {
    fontWeight: 'bold',
    fontSize: 'small'
  }

  
  return (
    <>
      <Typography sx={{ fontSize: 'large', fontWeight: 'bold', margin: '10px', padding: '10px' }} >Members</Typography>
      <Divider />
      <div className='search_input_container' >
        <Input className='search_input' />
        <div className='waitingList_export_container' >
        <ButtonSelector/>
        </div>
      </div>
      <div>

        <Table size='small' sx={{ width: 1080 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "aliceblue", textAlign: 'center', fontWeight: 'bold', color: 'blueviolet' }}>
            <TableRow>
              <TableCell style={sThead} align="left">#</TableCell>
              <TableCell style={sThead} align="left">User</TableCell>
              <TableCell style={sThead} align="left">Mobile Number</TableCell>
              <TableCell style={sThead} align="left">Age</TableCell>
              <TableCell style={sThead} align="left">Gender</TableCell>
              <TableCell style={sThead} align="left">Occupation</TableCell>
              <TableCell style={sThead} align="left">Shopping Prefernce</TableCell>
              <TableCell style={sThead} align="left">Invite Code</TableCell>
              <TableCell style={sThead} align="left">P. Status</TableCell>
              <TableCell style={sThead} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody size='small' >
            <TableRow>
              <TableCell style={sTdata} align="left">1</TableCell>
              <TableCell style={sTdata} align="left">Faizal Saleem </TableCell>
              <TableCell style={sTdata} align="left">9818480407</TableCell>
              <TableCell style={sTdata} align="left">30</TableCell>
              <TableCell style={sTdata} align="left">Male</TableCell>
              <TableCell style={sTdata} align="left">Self-Employed</TableCell>
              <TableCell style={sTdata} align="left">Fashion, Home & Kitchen </TableCell>
              <TableCell style={sTdata} align="left">HAR001</TableCell>
              <TableCell style={sTdata} align="left">Completed</TableCell>
              <TableCell style={sTdata} align="left"><Button onClick={handleOpen} className='view_btn' >view</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    <ProfileModal setModal={setModal}  modal={modal} />
    </>
  )
}

export default Users;