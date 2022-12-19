import './NavBar.css'
import GridViewIcon from '@mui/icons-material/GridView';
const NavBar = () => {
    return (
        <>
            <div className='navbar_container' >
                <div className='logo_container' >
                <span className='cuba_logo'>
                    <img src={process.env.PUBLIC_URL + 'assets/cuba_logo.png'} alt='cuba_log'/>
                    <h1 className='cuba_heading'>Cuba</h1>
                </span>
                <GridViewIcon/>
                </div>
                <div className='admin_logo'>
                    <img src={process.env.PUBLIC_URL + 'assets/admin_logo.png'} alt='admin_log' />
                </div>

            </div>
        </>
    )
}
export default NavBar;