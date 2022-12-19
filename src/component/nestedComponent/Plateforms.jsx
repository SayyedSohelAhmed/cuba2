import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';
import Input from "../../custumComponent/Input"
import "../nestedComponent/WaitingList.css"
import ButtonSelector from './ButtonSelector';
const Plateforms = () => {
  const sThead = {
    color: '#8457bf'
  }

  const sTdata = {
    fontWeight: 'bold'
  }



  return (
    <>
      <Typography sx={{ fontSize: 'large', fontWeight: 'bold', margin: '10px', padding: '10px'}}>Shoping Platforms</Typography>
      <Divider />
      <div className='search_input_container' >
        <Input className='search_input' placeholder='Search...'/>
        <div className='waitingList_export_container' >
         <ButtonSelector/>
        </div>
      </div>
      <div>

        <Table size='small' sx={{ width: 800 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "aliceblue", textAlign: 'center', fontWeight: 'bold', color: 'blueviolet' }}>
            <TableRow>
              <TableCell style={sThead} align="left">#</TableCell>
              <TableCell style={sThead} align="left">Logo</TableCell>
              <TableCell style={sThead} align="left">Plateform</TableCell>
              <TableCell style={sThead} align="left">Description</TableCell>
              <div>
              <TableCell style={sThead} align="left">Action</TableCell>
              </div>
    
            </TableRow>
          </TableHead>
          <TableBody size='small' >
            <TableRow>
              <TableCell style={sTdata} align="left"></TableCell>
              <TableCell style={sTdata} align="left"></TableCell>
              <TableCell style={sTdata} align="left"></TableCell>
              <TableCell style={sTdata} align="left"></TableCell>
              <TableCell style={sTdata} align="left"></TableCell>
              <TableCell style={sTdata} align="left"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default Plateforms