import * as React from 'react';
import { menuItem } from '../constant'
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
const SideBar = ({ children }) => {
    return (
        <>

            {/* <div className='sidebar_main_container' >
                <Box >
                    <CssBaseline />
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                height: '50vh', mt: 15
                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <div className='sidebar_container' >
                            {menuItem.map((item, index) => {
                                return (
                                    <>
                                        <div  >
                                            <List  >
                                                <ListItem key={index} disablePadding>
                                                    <NavLink className='list_link' to={item.path} activeclassName="active" >
                                                        <div className='sideBar_item'>
                                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                                            <ListItemText  primary={item.name} />
                                                        </div>
                                                    </NavLink>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </Drawer>
                </Box>
                <div className='right_container' >
                    <div className='right'>{children}</div>
                </div>
            </div> */}

            <div className='sidebar_main_container' >
                <div className='sidebar_container' >
                    <NavLink className='list_link' to='/dashboard'>
                        <div className='sidebar_dashboard_icon'>
                            <HomeTwoToneIcon sx={{fontSize:'xxx-large'}} className='dashboard_icon' />
                            <h2>Dashboard</h2>
                        </div>
                    </NavLink>
                    <Accordion disableGutters
                        elevation={-1}
                        sx={{
                            '&:before': {
                                display: 'none',
                            }
                        }}> 
                        
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className='According_icon_container' >
                                <DesignServicesOutlinedIcon className='icons'/>
                                <Typography sx={{ fontWeight: 'bold'}}> Masters</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {menuItem.map((item, index) => {
                                return (
                                        <NavLink key={index} className='list_link' to={item.path} activeclassName="active" >
                                            <div className='sideBar_item'>
                                                <Typography  className='icons'>{item.icon}</Typography>
                                                <Typography sx={{marginLeft:'10px',fontWeight:"bold",fontSize:12}} >{item.name}</Typography>
                                            </div>
                                        </NavLink>
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                    <AccordionDetails className='second_according_container'>
                            <div className='According_icon_container' >
                                <SubtitlesOutlinedIcon  className='icons'/>
                                <Typography sx={{ fontWeight: 'bold'}}> Campaign Wizard</Typography>
                            </div>
                            <div className='According_icon_container' >
                                <ViewListOutlinedIcon  className='icons'/>
                                <Typography sx={{ fontWeight: 'bold'}}> Campaigns</Typography>
                            </div>
                            <div className='According_icon_container' >
                                <LeaderboardIcon className='icons'/>
                                <Typography sx={{ fontWeight: 'bold'}}> Reports</Typography>
                            </div>
                    </AccordionDetails>
                </div>
                <div className='right_container' >
                    <div className='right'>{children}</div>
                </div>
            </div>

        </>
    )
}
export default SideBar;

