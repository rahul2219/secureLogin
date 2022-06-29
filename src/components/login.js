import React from 'react'
import { useState } from 'react';
import { Grid,Paper,TextField, Button, Typography,Link } from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
function Login(props){

    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');

    const paperStyle={padding :20,height:'65vh',width:350, margin:"80px auto"}
    const btnstyle={margin:'8px 0'}

    const handleChangeUsername = (e)=>{
        setUserName(e.target.value);
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleClick=(e)=>{
        for(let i=0;i<props.users.length;i++){
            if(props.users[i].username === userName && props.users[i].password === password){
                props.setSuccess(true);
                return;
            }
        }
        props.setSuccess(false);


    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' onChange={handleChangeUsername} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' onChange={handleChangePassword} type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 {props.success === false && <div style={{color:"red"}}>Wrong UserName or Password!! Try again.</div>}
                 {props.success === true && <div style={{color:"green"}}>Success!!</div>}
                <Button type='submit' color='primary' variant="contained" onClick={handleClick} style={btnstyle} fullWidth>Sign in</Button>
                <p></p>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <p></p>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login