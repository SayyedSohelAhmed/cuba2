import AnchorSharpIcon from '@mui/icons-material/AnchorSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
export const menuItem = [
   
    {
        path: "/inviteCodes",
        name: "Invite Codes",
        icon: <AnchorSharpIcon  sx={{fontSize:'large'}}/>
    },
    {
        path: "/waitingLists",
        name: "Waiting Lists",
        icon: <AccessTimeSharpIcon sx={{fontSize:'large'}} />
    },
    {
        path: "/users",
        name: "Users",
        icon: <PeopleAltOutlinedIcon sx={{fontSize:'large'}}/>
    },
    {
        path: "/platforms",
        name: "Platforms",
        icon: <ShoppingBagOutlinedIcon sx={{fontSize:'large'}}/>
    },
    {
        path: "/boardingScreens",
        name: "Boarding Screens",
        icon: <DesktopWindowsOutlinedIcon sx={{fontSize:'large'}}/>
    },
    {
        path: "/taskTypes",
        name: "Task Types",
        icon: <InventoryOutlinedIcon sx={{fontSize:'large'}}/>
    },
    {
        path: "/retailers",
        name: "Retailers",
        icon: <AddBoxOutlinedIcon sx={{fontSize:'large'}}/>
    },   
]

export const POST_URL='https://reqres.in/api'
export const POST_URL_END_POINT='/login'