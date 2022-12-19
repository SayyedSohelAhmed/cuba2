import { Alert, Card, Checkbox } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import '../component/Login.css'
import Button from "../custumComponent/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [isVisible,setIsVisible]=useState(false)
    const [signinData, setSiginData] = useState({
        email: '',
        password: '',
        isChecked:false
    })

    const [error, setError] = useState({
        email: false,
        password: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setSiginData({ ...signinData, [name]: value })
        setError({
            email: false,
            password: false
        })
    }

    const navigate=useNavigate()

    const handleSubmit = () => {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const regPass = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

        if (!regEmail.test(signinData.email)) {
            setError({ ...error, email: true })
        } else if (!regPass.test(signinData.password)) {
            setError({ ...error, password: true })
        } 
        console.log(signinData)
        navigate('/dashboard')
    }

    return (
        <>

            <div className="main_login_container">
                <div className="error_alert_box">
                    {
                        error.email ?
                            <Stack sx={{ width: '30%' }} spacing={1}>
                                <Alert sx={{ height: '2rem' }} variant="filled" severity="error">
                                    <Typography sx={{ fontSize: '10px' }} >Failed ! You entered wrong credentials, Please Try Again.</Typography>
                                </Alert>
                            </Stack>
                            : null
                    }

                    {
                        error.password ?
                            <Stack sx={{ width: '30%' }} spacing={1}>
                                <Alert sx={{ height: '2rem' }} variant="filled" severity="error">
                                    <Typography sx={{ fontSize: '10px' }} >Failed ! You entered wrong credentials, Please Try Again.</Typography>
                                </Alert>
                            </Stack>
                            : null
                    }
                </div>
                <div className="login_container" >
                    <Card className="card" style={{ borderRadius: '2rem', padding: '1rem' }}>
                        <CardContent>
                            <div className="signin_heading_container" >
                                <Typography gutterBottom variant="h4">
                                    Sign in
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Enter your email & password to login</Typography>
                            </div>
                        </CardContent>
                        <div className="input_container">
                            <Typography className="login_label" sx={{ fontWeight: 'bold', fontSize: 18 }}> Email Address </Typography>
                            <TextField onChange={(event) => handleChange(event)} name='email' size='small' variant="outlined" className="login_inputs" type='email' />

                            {/* <div className='error'>Failed ! You entered wrong credentials, Please Try Again.</div> */}

                            <Typography className="login_label" sx={{ fontWeight: 'bold', fontSize: 18 }}> Password </Typography>
                            <span  className="login_inputs_password_container">
                            <TextField onChange={(event) => handleChange(event)}  name='password' size='small' variant="outlined" className="login_inputs_password" type={isVisible?'text':'password'} />
                                <span onClick={()=>setIsVisible(!isVisible)}>
                            {
                                    isVisible ? 
                                    <VisibilityIcon sx={{padding:'5px'}}/> : <VisibilityOffIcon sx={{padding:'5px'}}/>
                            }
                                </span> 
                            </span>

                            {/* {
                                error.password ?
                                    <div className='error'>Please enter valid password</div>
                                    : null
                            } */}

                            <div className="chekbox_container">
                                <div className="chekbox">
                                    <span className="check">
                                        <Checkbox defaultChecked />
                                        <Typography sx={{ fontSize: 12 }}> Rememmber Password</Typography>
                                    </span>
                                </div>
                                <Typography sx={{ fontSize: 12 }}>Forget Password?</Typography>
                            </div>
                            <Button onClick={handleSubmit} className='signin_button' >Sign In</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Login;