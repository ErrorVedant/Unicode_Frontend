import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { VisibilityOff } from '@mui/icons-material';
import { Visibility } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { FocusEvent } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useFormik } from 'formik';
import { signupSchema } from './schema';
import { useState } from 'react';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number1: 0,
};




function Sign() {


    const [RegisterSuccess, setRegisterSuccess] = useState(false);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (values, e) => {
            let data = JSON.stringify({
                "username": values.user,
                "email": values.email,
                "password": values.pwd,
                "mobile": values.phone 
              });
              
              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://fantasyleague-pl7o.onrender.com/user/newUser',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
            axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data)); 
            if(response.data.token){
                setRegisterSuccess(true);
            }            
            if(RegisterSuccess){
                alert("Successful registration!");
            }
            })
            .catch((error) => {
                console.log(error);
                alert("Registration Failed");
            });
            e.resetForm();
        }
        })


        const [showPassword, setShowPassword] = React.useState(false);
        const handleClickShowPassword = () => setShowPassword((show) => !show);
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        }

    return (
        <Box sx={{ backgroundColor: "#FDF5DF" }}>
            <Box
                sx={{ flexGrow: 1, }}
            >

                <AppBar position="static" color='secondary'>
                    <Toolbar >
                        <IconButton
                            size={'10px'}
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="div" sx={{ flexGrow: 1 }} color="primary">
                            <h3>HONEY-BEE</h3>
                        </Typography>
                        <Button color="primary" >
                            {/* <Link component="button" variant="body2" onClick={() => { props.onFormSwitch('signup') }}> */}
                            <h5>Sign-up</h5>
                            {/* </Link> */}
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{ width: '50%', marginTop: '50px', marginBottom: '100px' }}>
                <Box sx={{ display: 'grid', boxShadow: 7, backgroundColor: 'white', borderRadius: 2, gridTemplateColumns: 'repeat(2, 1fr)', height: 600 }}>
                    <Box sx={{ display: 'flex', flexDirection: "column", gridColumn: '1/2', margin: "25px" }} >

                        <Typography variant="h4" color='secondary' component="div" sx={{ flexGrow: 1 }}>
                            <h4>Sign-in</h4>
                        </Typography>

                        <form onSubmit={handleSubmit} action='' >
                            <Box marginBottom='40px'>
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Enter your name
                                    </InputLabel>
                                    <Input
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.user}
                                        required
                                    />
                                    {errors.user && touched.user ? <Box sx={{ mx: 5, textTransform: 'capitalize', color: 'red' }} className='form-error'>{errors.user}</Box> : null}
                                </FormControl>
                            </Box>

                            <Box marginBottom='40px'>
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <InputLabel htmlFor="input-with-icon-adornment">
                                        Enter your Email
                                    </InputLabel>
                                    <Input
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        required
                                    />
                                    {errors.email && touched.email ? <Box sx={{ mx: 5, textTransform: 'capitalize', color: 'red' }} className='form-error'>{errors.email}</Box> : null}
                                </FormControl>
                            </Box>


                            {/* <InputLabel htmlFor="input-with-icon-adornment">
                Enter your password
              </InputLabel> */}
                            <Box marginBottom='40px'>
                                <FormControl variant="standard" >
                                    <InputLabel htmlFor="input-with-icon-adornment" >
                                        Enter your password
                                    </InputLabel>
                                    <Input sx={{}}
                                        // sx={{ width:'100%' }}
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        startAdornment={<LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pwd}
                                        required
                                    />
                                    {errors.pwd && touched.pwd ? <Box sx={{ mx: 5, textTransform: 'capitalize', color: 'red' }} className='form-error'>{errors.pwd}</Box> : null}
                                </FormControl>
                            </Box>


                            <Box marginBottom='40px'>

                                <TextField
                                    sx={{ width: '100%' }}
                                    id="standard-number"
                                    label="Phone number"
                                    type="tel"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    required
                                />
                                {errors.phone && touched.phone ? <Box sx={{ mx: 5, textTransform: 'capitalize', color: 'red' }} className='form-error'>{errors.phone}</Box> : null}
                            </Box>

                            <Button onClick={handleChange} backgroundColor="primary" sx={{ marginTop: '20px' }}>Submit</Button>

                        </form>


                    </Box>

                    <Box sx={{ overflow: 'hidden', gridColumn: '2/6', borderRadius: 2 }} >
                        <img style={{ height: '100%' }} src="https://www.countrywalkers.com/content/uploads/2019/05/cherry-blossom-season-japan.jpg" alt="" />
                    </Box>
                </Box>

            </Container>

            <Box>_</Box>
        </Box>
    )
}

export default Sign;