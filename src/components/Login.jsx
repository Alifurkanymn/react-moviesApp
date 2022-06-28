import React, { useState } from 'react'
import '../style/login.scss'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

const useStyles = makeStyles({
  box:{
    position:"relative",
    backgroundColor: "rgba(255,255,255,.85)",
    borderRadius:'20px',
    padding: '50px 50px',
    color:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    height:'60vh',
    width:'25vw',
  },
  '& .MuiInputBase-input': {
    border: '1px solid #ced4da',
  },
  
  buttons:{
    background: 'linear-gradient(45deg, rgb(4,55,48) 0%, rgb(4,55,48) 90%)',
    height: '50px',
  },
  createButtons:{
    background: 'linear-gradient(45deg, rgb(238,92,71) 0%, rgb(238,92,71) 90%)',
    height: '50px',
  },
  inputs:{
    height: '80px'
  },
  textStyle: {
    color:"black",
    alignItems: "center",
    textAlign: "center",
  },
  center: {
    display:'flex',
    justifyContent:'center',
  },
  color: {
    color:"rgb(4,55,48)",
    transition:".3s",
    "&:hover":{
      color:"rgb(238,92,71)",
      transition:".3s",
    }
  },
  signUp: {
    alignItems: "center",
    textAlign: "center"
  },
  cssFocused: {
    color : 'rgb(4,55,48) !important',
  },
});


function Login() {  
  const classes = useStyles();
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
    checked: false
  })

  const HandleChangeEmail = ((e) =>{
    setSignIn({
      ...signIn,
      email: e.target.value
    })
  })
  
  const HandleChangePassword = ((e) =>{
    console.log(e.target.value);
  })
  
  const HandleChangeForRemember = ((e) =>{
    console.log(e.target.checked);
  })


  return (
    <div className="login">
      <form action="submit">
        <Box 
          component="form"
          noValidate
          autoComplete="off"
          className={classes.box}
        >
          <Typography variant="h5" className={classes.textStyle}>
            Hey, enter your details to get sign in to your account
          </Typography>


          {/* Email Password Inputs */}

          <TextField 
            required
            id="standard-basic" 
            label="Mail" 
            type="mail"
            variant="outlined"
            margin="none"
            onChange={HandleChangeEmail}
            />
             
            <TextField 
            required
            id="standard-basic" 
            label="Password" 
            variant="outlined" 
            type="password"
            margin="none"
            onChange={HandleChangePassword}
            />


            {/* Remember Me Checkbox */}


            <FormControlLabel
            component="fieldset"
            onChange={HandleChangeForRemember}
            style={{color:"rgb(4,55,48)"}}
            control={
              <Checkbox name="jason" />
            }
            label="Remember Me"
            />


          {/* Sign in and create a new account Buttons*/}
          

          <Button variant="contained" className={classes.buttons}>
              Sign In
          </Button>
          <Button variant="contained" className={classes.createButtons}>
              Create New Account
          </Button>


          {/* Sign in with social media */}

          <ButtonGroup disableElevation variant="contained" className={classes.center}>
              <IconButton size="large">
                <GoogleIcon fontSize="inherit" className={classes.color} />
              </IconButton>
              <IconButton size="large">
                <FacebookIcon fontSize="inherit" className={classes.color} />
              </IconButton>
              <IconButton size="large">
                <TwitterIcon fontSize="inherit" className={classes.color} />
              </IconButton>
          </ButtonGroup>

          
        </Box>
      </form>
    </div>
  )
}

export default Login