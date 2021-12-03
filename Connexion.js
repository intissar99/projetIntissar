import React from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useNavigate} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
const useStyles= makeStyles((theme)=>({
  root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/Image.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
}}))
    
function Connexion() {
  const Style=useStyles();
    const navigate=useNavigate();
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
  return (
    <div className={Style.root}>
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In  </h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required/>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
        <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Remember me"
         />
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <Typography >
             <Link href="#" >
                Forgot password ?
        </Link>
        </Typography>
        <Typography > New to MyFormation?
             <Link  onClick={()=>{navigate("/inscription")}}>
                     Sign Up
        </Link>
        </Typography>
    </Paper>
</Grid>
</div>
  );
}

export default Connexion;