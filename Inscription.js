import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Inscription() {
  
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
             <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign Up  </h2>
        </Grid>
        <TextField label='Name' placeholder='Enter name' fullWidth required/>
        <TextField label='Email' placeholder='Enter Email' type='Email' fullWidth required/>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
        <Typography >
             <b>
             Min 6 charecters. alpha/numeric characters 
        </b>
        </Typography>
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
        
        
    </Paper>
</Grid>
  );
}
   

export default Inscription;