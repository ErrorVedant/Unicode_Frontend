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
import Alert from '@mui/material/Alert';

import { useRef, useState, useEffect } from 'react';

import axios from 'axios';

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [RegisterSuccess, setRegisterSuccess] = useState(false);
  const [succrss, setSuccess] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values.email, values.password);

      let data = JSON.stringify({
        "email": values.email,
        "password": values.password
      });
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://fantasyleague-pl7o.onrender.com/user/userLogin',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.token) {
            setRegisterSuccess(true);
          }
          if (setRegisterSuccess) {
            setSuccess(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      action.resetForm();
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  // const [error, setError] = useState(false);
  // const [error_email, setError_email] = useState(false);
  // const [error_pass, setError_pass] = useState(false);
  // const [open, setOpen] = useState(true);
  // const [openn, setOpenn] = useState(true);
  // const [alert, setAlert] = useState(false);


  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd)
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  // https://fantasyleague-pl7o.onrender.com/docs/#/default/post_user_userLogin


  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    axios.get("https://fantasyleague-pl7o.onrender.com/docs/#/default/post_user_userLogin")
      .then((response) => {
        console.log(response)
      })
  }, [])

  return (
    <>
      {succrss ? (
        // <section>
        //   <h1>You are logged in</h1>
        //   <br />
        //   <p>
        //     <a href='#'>Go to home</a>
        //   </p>
        // </section>
        <div className="containner" sx={{ backgroundColor: "#FDF5DF" }}>
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
            <Box sx={{ display: 'grid', boxShadow: 7, backgroundColor: 'white', borderRadius: 2, gridTemplateColumns: 'repeat(2, 1fr)', height: 500 }}>
              <Box sx={{ display: 'flex', flexDirection: "column", gridColumn: '1/2', margin: "25px" }} >
                <Typography variant="h4" color='primary' component="div" sx={{ flexGrow: 1 }}>
                  <h4>Welcome</h4>
                  <h3>LOG-IN successfull</h3>
                </Typography>
              </Box>

              <Box sx={{ overflow: 'hidden', gridColumn: '2/6', borderRadius: 2 }} >
                <img style={{ height: '100%' }} src="https://www.countrywalkers.com/content/uploads/2019/05/cherry-blossom-season-japan.jpg" alt="" />
              </Box>

            </Box>
          </Container >

          <Box>_</Box>
        </div >
      ) : (
        <div className='container' sx={{ backgroundColor: "#FDF5DF" }}>
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
            <Box sx={{ display: 'grid', boxShadow: 7, backgroundColor: 'white', borderRadius: 2, gridTemplateColumns: 'repeat(2, 1fr)', height: 500 }}>
              <Box sx={{ display: 'flex', flexDirection: "column", gridColumn: '1/2', margin: "25px" }} >

                <Typography variant="h4" color='secondary' component="div" sx={{ flexGrow: 1 }}>
                  <h4>Log-in</h4>
                </Typography>

                <form onSubmit={handleSubmit} action='' >
                  <FormControl variant="standard" margin='0px' >
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
                      value={values.email} 
                      onBlur={handleBlur} 
                      onChange={handleChange}
                      required
                    />
                    {errors.email && touched.email ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.email}</Box>: null}
                  </FormControl>


                  <Box sx={{ marginTop: '40px', marginLeft: '5px', marginLeft: '5px' }}>
                    {/* <InputLabel htmlFor="input-with-icon-adornment">
                Enter your password
              </InputLabel> */}
                    <FormControl variant="standard" margin='0px' >
                      <InputLabel htmlFor="input-with-icon-adornment">
                        Enter your password
                      </InputLabel>
                      <Input sx={{}}
                        name='password'
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        ref={userRef}
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
                        value={values.password} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        required
                      />
                      {errors.password && touched.password ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.password}</Box>: null}
                    </FormControl>
                  </Box>

                  <FormGroup sx={{ marginTop: '70px' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                  </FormGroup>

                  <Button onClick={handleChange} backgroundColor="primary" sx={{ marginTop: '20px' }}>Submit</Button>

                </form>

                {/* <Typography  color='secondary' component="div" sx={{ flexGrow: 1 }}>
              In order to sign up 
            </Typography> */}

              </Box>

              <Box sx={{ overflow: 'hidden', gridColumn: '2/6', borderRadius: 2 }} >
                <img style={{ height: '100%' }} src="https://www.countrywalkers.com/content/uploads/2019/05/cherry-blossom-season-japan.jpg" alt="" />
              </Box>
            </Box>

          </Container>

          <Box>_</Box>
        </div>
      )}
    </>


  );
}

export default Login;