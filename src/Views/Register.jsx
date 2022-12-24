import React from 'react';
import { Grid, TextField,Select,MenuItem,FormControl,InputLabel ,Button} from '@mui/material';
import '../styles/ForgetPassword.css'
import technician from '../Asset/download.jpg';
import '../styles/Register.css'
import {Link} from 'react-router-dom';

const Register = () =>{
    return(
        <div className='forgot-password'>
        <div>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    <Grid  item lg={6} md={6} sm={12} xs={12}>
                   <h1 className='welcome-heading'>Welcome!</h1>
                   <p className='forgot-password-paragraph'>First time, you should login or sign up</p>
                    </Grid>
                    <Grid  item lg={6} md={6} sm={12} xs={12}>
                    <div style={{backgroundColor:'white' ,width:'400px',height:'650px',marginTop:'150px',borderRadius:'5px'}} className='register-form'>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12} display={'flex'} flexDirection={'row'} padding={'20px'}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <h4 className='sign-up-heading'><Link to='/register'>Sign up</Link></h4>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <h4 className='sign-heading'><Link to='/login'>Sign in</Link></h4>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12} display={'flex'}>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ width: '60%', marginTop: '20px',marginLeft:'40px',backgroundColor:'#F9FAFF'}} />
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ width: '60%', marginTop: '20px',marginLeft:'40px',backgroundColor:'#F9FAFF'}} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={10} xs={10}>
                            <TextField id="outlined-basic" label="Email Address" variant="outlined" style={{ width: '80%', marginTop: '40px',marginLeft:'40px',backgroundColor:'#F9FAFF'}} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={10} xs={10}>
                            <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '80%', marginTop: '40px',marginLeft:'40px',backgroundColor:'#F9FAFF'}} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={10} xs={10}>
                            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" style={{ width: '80%', marginTop: '40px',marginLeft:'40px',backgroundColor:'#F9FAFF'}} />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12} md={12} sm={10} xs={10}>
                            <Button variant="contained" style={{ marginTop: '30px', width: '80%',backgroundColor:'#8F87FF',marginLeft:'40px' }}>Create New Account</Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Grid>
                    
                </Grid>
            </Grid>
        </div>

    </div>
    )
}
export default Register