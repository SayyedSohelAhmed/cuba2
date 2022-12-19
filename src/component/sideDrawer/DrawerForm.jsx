import React, { useState } from "react";
import Button from "../../custumComponent/Button";
import Input from "../../custumComponent/Input";
import "../sideDrawer/DrawerForm.css";
const DrawerForm = ({ receivedMapData,isEdit, setIsEdit, handleClose, setState }) => {
// const [editData,setEditData]=useState({

// })
  const handleUpdate = () => {
    setIsEdit(false);
    setState(false);
  };

  const [inviteData, setInviteData] = useState({
    user: "",
    inviteCode: "",
    maxInvites: "",
  });

  const [list,setList]=useState([])

  const handleInviteCode = (e) => {
    const {name,value} = e.target
    setInviteData({...inviteData,[name]:value})
    // console.log("inviteData==>",inviteData);
  };

  const addInviteCode = ()=>{
    setList([...list,inviteData])
    // console.log("list===>",list)
    receivedMapData(list)
  }

  return (
    <>
      <div className="input_details_container">
        <div className="drawer_input_box">
          <label className="drawer_label">User</label>
          <Input
            className="drawer_input"
            value={inviteData.user}
            name="user"
            type="text"
            onChange={(e)=>handleInviteCode(e)}
          />
        </div>
    
        <div className="drawer_input_box">
          <label className="drawer_label">Invite Code</label>
          <Input
            className="drawer_input"
            value={inviteData.inviteCode}
            name="inviteCode"
            type="text"
            onChange={(e) => handleInviteCode(e)}
          />
        </div>

        <div className="drawer_input_box">
          <label className="drawer_label">Max Invites</label>
          <Input
            className="drawer_input"
            type="number"
            value={inviteData.maxInvites}
            name="maxInvites"
            onChange={(e) => handleInviteCode(e)}
          />
        </div>

        {isEdit ? (
          <div className="drawer_input_box">
            <label className="drawer_label">Code Status</label>
            <Input
              className="drawer_input"
              value={inviteData.codeStatus}
              name='codeStatus'
              type="number"
              onChange={(e) => handleInviteCode(e)}
            />
          </div>
        ) : null}
      </div>
      <span className="drawer_btn_container">
        {isEdit ? (
          <Button onClick={handleUpdate} className="drawer_btn">
            Update
          </Button>
        ) : (
          <Button onClick={()=>{
            addInviteCode();
            // handleClose()
            }} className="drawer_btn">
            {" "}
            Add Code
          </Button>
        )}
      </span>
    </>
  );
};

export default DrawerForm;
