import { Divider, Drawer, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Card from '../../custumComponent/Card'
import "../nestedComponent/BoardingScreens.css"
import Input from "../../custumComponent/Input"
import Button from "../../custumComponent/Button"
import AddNewCard from './AddNewCard'

const BoardingScreens = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
    const [dynamicValue,setDynamicValue]=useState({
      imageUrl:'',
      heading:'',
      subHeading:'',
      buttonText:'',
      bgColorHex:'',
      headColorHex:'',
      subHeadColorHex:'',
      buttonColorHex:'',
      buttonTextColorHex:'',
      screenIndex:''
    })
    const [dynamicStyle,setDynamicStyle]=useState([])
  const handleUpdate = () => {
    setDrawerOpen(false)
    setIsEdit(false)
  }
  
  const handleAdd = () => {
    setDynamicStyle(dynamicValue)
    console.log("dynamicStyle===>",dynamicStyle.imageUrl,'###',dynamicStyle.heading)
    // setDrawerOpen(false)
    setIsEdit(false)
  }

  const handleOpen = () => {
    setDrawerOpen(true)
    // setIsEdit(false)
  }

  const handleDynamicData=(e)=>{
    const {name,value}=e.target
    setDynamicValue({...dynamicValue, [name]:value})
  }
  return (
    <>
    <div style={{width:`${dynamicStyle.imageUrl}px`, height:`${dynamicStyle.heading}px`, border:'1px solid black'}}>
      
    </div>


      <div className='boarding_screen_main_container' >
        <Card dynamicValue={dynamicValue} setDrawerOpen={setDrawerOpen} isEdit={isEdit} setIsEdit={setIsEdit} />
        <Card setDrawerOpen={setDrawerOpen} isEdit={isEdit} setIsEdit={setIsEdit} />
        <AddNewCard handleOpen={handleOpen} Add new />
      </div>
      <Drawer anchor='right' open={drawerOpen} onClose={handleAdd}>
        <div style={{ width: "350px" }}>
          {!isEdit ? <Typography sx={{marginLeft: '1rem',fontWeight:'bold',fontSize:'40px'}} >Add Screen #1</Typography> :<Typography sx={{marginLeft: '1rem',fontSize:'40px',fontWeight:'bold'}} >Update Screen #2</Typography>}
   
          <Divider />

          <div className='screen_input_details_container'>
            <div className='drawer_input_box'>
              <label className='screen_drawer_label'>Image URL</label>
              <Input onChange={(e)=>handleDynamicData(e)} className='drawer_input' name='imageUrl' value={dynamicValue.imageUrl} />
            </div>

            <div className='drawer_input_box'>
              <label className='screen_drawer_label'>Heading</label>
              <Input onChange={(e)=>handleDynamicData(e)} className='drawer_input' name='heading' value={dynamicValue.heading} />
            </div>

            <div className='drawer_input_box'>
              <label className='screen_drawer_label'>Sub Head</label>
              <Input onChange={(e)=>handleDynamicData(e)} className='drawer_input' name='subHeading' value={dynamicValue.subHeading} />
            </div>

            <div className='drawer_input_box'>
              <label className='screen_drawer_label'>Button Text</label>
              <Input onChange={(e)=>handleDynamicData(e)} className='drawer_input' name='buttonText' value={dynamicValue.buttonText}  />
            </div>
            <div className='small_input_container'>
              <span>
                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>BG-Color Hex</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='bgColorHex' value={dynamicValue.bgColorHex} type='number' />
                </div>

                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>SubHead-Color Hex</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='subHeadColorHex' value={dynamicValue.subHeadColorHex} type='number' />
                </div>
               
                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>Btn-text-Color Hex</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='buttonTextColorHex' value={dynamicValue.buttonTextColorHex} type='number'/>
                </div>
              </span>

              <span>
                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>Head-Color Hex</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='headColorHex' value={dynamicValue.headColorHex} type='number' />
                </div>


                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>Button-Color Hex</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='buttonColorHex' value={dynamicValue.buttonColorHex} type='number' />
                </div>
               
                <div className='drawer_input_box'>
                  <label className='screen_drawer_label'>Screen Index</label>
                  <Input onChange={(e)=>handleDynamicData(e)} className='small_input'  name='screenIndex' value={dynamicValue.screenIndex} type='number' />
                </div>
              </span>
            </div>

          </div>
          <span className='drawer_btn_container' >
            {!isEdit ? <Button onClick={handleAdd} className='screen_btn'>  Add Screen</Button>
             : <Button onClick={handleUpdate} className='screen_btn'> Update Screen</Button>}



          </span>
        </div>
      </Drawer>

    </>
  )
}

export default BoardingScreens