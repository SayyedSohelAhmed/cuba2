import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "../component/SideBar";
import Dashboard from '../component/Dashboard'
import NavBar from "../component/NavBar";
import InviteCodes from "../component/nestedComponent/InviteCodes"
import WaitingList from "../component/nestedComponent/WaitingLists"
import Plateforms from "../component/nestedComponent/Plateforms"
import BoardingScreens from "../component/nestedComponent/BoardingScreens"
import TaskTypes from "../component/nestedComponent/TasksTypes"
import Retailers from "../component/nestedComponent/Retailers"
import Users from "../component/nestedComponent/Users"
import Login from "../component/Login";
import ProtectedRoute from "../ProtectedRoute";
const RoutesPage = () => {

    return (
        <>
            <BrowserRouter>
            <>
            <Login/>
                        {/* <Route path='/' element={} /> */}
                <NavBar />
                <SideBar>
                    <Routes>
                        {/* <Route path='/' element={<Dashboard />} /> */}
                        <Route path='/dashboard' element={<Dashboard/>} />
                        <Route path='/inviteCodes' element={<InviteCodes />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/waitingLists' element={<WaitingList />} />
                        <Route path='/platforms' element={<Plateforms />} />
                        <Route path='/boardingScreens' element={<BoardingScreens />} />
                        <Route path='/taskTypes' element={<TaskTypes />} />
                        <Route path='/retailers' element={<Retailers />} />
                    </Routes>
                </SideBar>
        </>
            </BrowserRouter>
        </>
    )
}
export default RoutesPage;