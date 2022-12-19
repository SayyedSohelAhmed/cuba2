import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import Button from '../../custumComponent/Button'
import "./InviteCodes.css"
import Drawers from '../sideDrawer/Drawer';
import { useEffect } from 'react';
const InviteCodes = () => {
  const [data,setData]=useState([])
const [state,setState]=useState(false)
const [isEdit,setIsEdit]=useState(false)
const handleOpen = () => {
  setState(true)
   setIsEdit(true)
 }

  const sThead = {
    color: '#8457bf'
  }

  const sTdata = {
    fontWeight: 'bold'
  }

  const receivedMapData=(mapData)=>{
    setData(mapData)
    console.log("chek==>",data)
  }

  return (
    <>
      <div className='fab_container' >
        <Typography sx={{ fontWeight: 'bold' }} >Invite Codes</Typography>
        <Drawers receivedMapData={receivedMapData} state={state} setState={setState} isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
      <Divider />
      <TableContainer component={Paper}>
        <Table size='small' sx={{ width: 600 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "aliceblue", textAlign: 'center', fontWeight: 'bold', color: 'blueviolet' }}>
            <TableRow>
              <TableCell style={sThead} align="center">#</TableCell>
              <TableCell style={sThead} align="center">Invite Code </TableCell>
              <TableCell style={sThead} align="center">Max. Invites</TableCell>
              <TableCell style={sThead} align="center">Total Invites</TableCell>
              <TableCell style={sThead} align="center">Status</TableCell>
              <TableCell style={sThead} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody size='small' >
      {data.map((item,index)=>{
        console.log(item)
        return(
          <TableRow>
              <TableCell style={sTdata} align="center">{index+1}</TableCell>
              <TableCell style={sTdata} align="center">{item.user}</TableCell>
              <TableCell style={sTdata} align="center">{item.inviteCode}</TableCell>
              <TableCell style={sTdata} align="center">{item.maxInvites}</TableCell>
              <TableCell style={sTdata} align="center">503</TableCell>
              <TableCell style={sTdata} align="center"> <Button className='active_btn'>Active</Button> </TableCell>
              <TableCell style={sTdata} align="center"> <Button onClick={handleOpen} className='edit_btn'> @edit</Button> </TableCell>
            </TableRow>
          
         )
       })}
          </TableBody>
        </Table>
      </TableContainer >
    </>
  )
}

export default InviteCodes;