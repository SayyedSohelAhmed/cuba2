import React from 'react'
import BoardingScreens from '../component/BoardingScreens'
import Dashboard from '../component/Dashboard'
import InviteCodes from '../component/InviteCodes'
import Login from '../component/Login'
import Plateforms from '../component/Plateforms'
import Retailers from '../component/Retailers'
import TasksTypes from '../component/TasksTypes'
import Users from '../component/Users'

const Pages = () => {
    return (
        <>
            <Login />
            <Dashboard />
            <InviteCodes/>
            <Users/>
            <Plateforms/>
            <BoardingScreens/>
            <TasksTypes/>
            <Retailers/>
            

        </>

    )
}

export default Pages