import React from 'react'
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

const useStyles = makeStyles({
  box:{
    backgroundColor: 'white',
    borderRadius:'20px',
    padding: '50px 50px',
    color:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    height:'50vh',
    width:'20vw',
  },
  buttons:{
    background: 'linear-gradient(45deg, #0e003a 0%, #1b1a76 90%)',
    height: '50px'
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
    color:"#1b1a76",
    "&:hover":{
      color:"blue",
    }
  },

});

function Login() {  
  const classes = useStyles();
  return (
    <div className="login">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={classes.box}
        >
          <Typography variant="h5" className={classes.textStyle}>
            Hey, enter your details to get sign in to your account
          </Typography>

          <TextField 
            required
            id="standard-basic" 
            label="Mail" 
            variant="standard" 
            type="mail"
            />
             
            <TextField 
            required
            id="standard-basic" 
            label="Password" 
            variant="standard" 
            type="password"
            />

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

          <Button variant="contained" className={classes.buttons}>
              Sign In
          </Button>
        </Box>
    </div>
  )
}

export default Login