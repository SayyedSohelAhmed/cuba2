import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';
import Input from "../../custumComponent/Input"
import Button from '../../custumComponent/Button';
import "../nestedComponent/WaitingList.css"
import ButtonSelector from '../nestedComponent/ButtonSelector'
const WaitingLists = () => {
  const sThead = {
    color: '#8457bf'
  }

  const sTdata = {
    fontWeight: 'bold'
  }



  return (
    <>
      <Typography sx={{ fontSize: 'large', fontWeight: 'bold', margin: '10px', padding: '10px' }} >Waiting User List</Typography>
      <Divider />
      <div className='search_input_container' >
        <Input className='search_input' placeholder='Search...'/>
        <div className='waitingList_export_container' >
        <ButtonSelector/>


          {/* <Button className='export_btn'>Export</Button>
          <Button className='page_btn' > <select>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
          </select></Button> */}
        </div>
      </div>
      <div>

        <Table size='small' sx={{ width: 800 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "aliceblue", textAlign: 'center', fontWeight: 'bold', color: 'blueviolet' }}>
            <TableRow>
              <TableCell style={sThead} align="left">#</TableCell>
              <TableCell style={sThead} align="left">User Name</TableCell>
              <TableCell style={sThead} align="left">Mobile Number</TableCell>
              <TableCell style={sThead} align="left">Waiting Since</TableCell>
              <TableCell style={sThead} align="left">Status</TableCell>
              <TableCell style={sThead} align="left">Invite Code</TableCell>
              <TableCell style={sThead} align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody size='small' >
            <TableRow>
              <TableCell style={sTdata} align="left">1</TableCell>
              <TableCell style={sTdata} align="left">Faizal Saleem </TableCell>
              <TableCell style={sTdata} align="left">9818480407</TableCell>
              <TableCell style={sTdata} align="left">Sept 1st, 2022 10:20 PM</TableCell>
              <TableCell style={sTdata} align="left">Pending </TableCell>
              <TableCell style={sTdata} align="left">HAR001 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default WaitingLists