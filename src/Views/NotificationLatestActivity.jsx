import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import { Grid, Button, Avatar } from '@mui/material';
import '../styles/DisputeOrder.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import category from '../Asset/avatarimage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import DisputeOrderCard from '../Components/Card/DisputeOrderCard';
import Header from '../Components/Header/Header';

const NotificationLatestActivity = () => {
    return (
        <div style={{ bacgroundColor: '#F9F9F9' }}>
            <Grid container>
                <Grid item container lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F9F9F9' }}>
                    <Grid item lg={3} md={3} sm={3} xs={1}>
                        <SideBar />
                    </Grid>

                    <Grid item lg={9} md={9} sm={9} xs={11} >
                        
                           <Header/>
                            <Grid container>
                                <Grid item container lg={12} md={12} sm={12} xs={12} >
                                    <h2 className='notification-heading'>Notification & Latest Activity</h2>
                                </Grid>

                            </Grid>
                            <div className='notification-div'>
                                <Grid container >
                                    <Grid item  container lg={12} md={12} sm={12} xs={12}  style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={2} md={2} sm={2} xs={2}>
                                            <h4 style={{ paddingLeft: '20px', paddingTop: '20px' }} className='today-heading'>Today</h4>
                                        </Grid>
                                        <Grid item lg={10} md={10} sm={10} xs={10} className='notification-hr'>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={2} md={2} sm={2} xs={3} className='mint-heading'>
                                            <h5 style={{ paddingLeft: '30px', paddingTop: '20px' }} className='minute-heading'>2m ago</h5>
                                        </Grid>
                                        <Grid item md={10} >
                                            <Grid item md={12} display={'flex'} flexDirection={'row'}>
                                                <Grid item md={2} style={{ marginLeft: '30px', marginTop: '20px' }}>
                                                    <Avatar className='avatar'
                                                        alt="Remy Sharp"
                                                        src={category}
                                                        sx={{ width: 80, height: 80 }}
                                                        
                                                    />
                                                </Grid>
                                                <Grid item lg={10} md={10} sm={10} xs={10}>
                                                    <Grid item md ={12} style={{display:'flex',flexDirection:'column',marginTop:'30px',marginLeft:'-20px'}}>
                                                        <Grid item lg={9}  className='reny-heading'>
                                                         <h5 className='reny-heading1'>Reny mentioned you at Fullspeed Projects</h5>
                                                        </Grid>
                                                        <Grid item md={6} className='date-heading'>
                                                            <h6 className='date-heading1'>Monday, 31 June 2020</h6>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={2} md={2} sm={2} xs={3} className='mint-heading'>
                                            <h5 style={{ paddingLeft: '30px', paddingTop: '20px' }} className='minute-heading'>2m ago</h5>
                                        </Grid>
                                        <Grid item md={10} >
                                            <Grid item md={12} display={'flex'} flexDirection={'row'}>
                                                <Grid item md={2} style={{ marginLeft: '30px', marginTop: '20px' }}>
                                                    <Avatar className='avatar'
                                                        alt="Remy Sharp"
                                                        src={category}
                                                        sx={{ width: 80, height: 80 }}
                                                        
                                                    />
                                                </Grid>
                                                <Grid item md={10}>
                                                    <Grid item md ={12} style={{display:'flex',flexDirection:'column',marginTop:'30px',marginLeft:'-20px'}}>
                                                        <Grid item md={9} className='reny-heading'>
                                                         <h5 className='reny-heading1'>Reny mentioned you at Fullspeed Projects</h5>
                                                        </Grid>
                                                        <Grid item md={6} className='date-heading'>
                                                            <h6 className='date-heading1'>Monday, 31 June 2020</h6>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={2} md={2} sm={2} xs={3} className='mint-heading'>
                                            <h5 style={{ paddingLeft: '30px', paddingTop: '20px' }} className='minute-heading'>2m ago</h5>
                                        </Grid>
                                        <Grid item md={10} >
                                            <Grid item md={12} display={'flex'} flexDirection={'row'}>
                                                <Grid item md={2} style={{ marginLeft: '30px', marginTop: '20px' }}>
                                                    <Avatar className='avatar'
                                                        alt="Remy Sharp"
                                                        src={category}
                                                        sx={{ width: 80, height: 80 }}
                                                        
                                                    />
                                                </Grid>
                                                <Grid item md={10}>
                                                    <Grid item md ={12} style={{display:'flex',flexDirection:'column',marginTop:'30px',marginLeft:'-20px'}}>
                                                        <Grid item md={9} className='reny-heading'>
                                                         <h5 className='reny-heading1'>Reny mentioned you at Fullspeed Projects</h5>
                                                        </Grid>
                                                        <Grid item md={6} className='date-heading'>
                                                            <h6 className='date-heading1'>Monday, 31 June 2020</h6>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row',marginTop:'20px' }}>
                                        <Grid item md={2}>
                                            <h4 style={{ paddingLeft: '20px', paddingTop: '20px' }} className='yesterday-heading'>Yesterday</h4>
                                        </Grid>
                                        <Grid item lg={10} md={10} sm={10} xs={10} className='notification-hr1'>
                                          
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={2} md={2} sm={2} xs={3} className='mint-heading'>
                                            <h5 style={{ paddingLeft: '30px', paddingTop: '20px' }} className='minute-heading'>2m ago</h5>
                                        </Grid>
                                        <Grid item md={10} >
                                            <Grid item md={12} display={'flex'} flexDirection={'row'}>
                                                <Grid item md={2} style={{ marginLeft: '30px', marginTop: '20px' }}>
                                                    <Avatar className='avatar'
                                                        alt="Remy Sharp"
                                                        src={category}
                                                        sx={{ width: 80, height: 80 }}
                                                        
                                                    />
                                                </Grid>
                                                <Grid item md={10}>
                                                    <Grid item md ={12} style={{display:'flex',flexDirection:'column',marginTop:'30px',marginLeft:'-20px'}}>
                                                        <Grid item md={9} className='reny-heading'>
                                                         <h5 className='reny-heading1'>Reny mentioned you at Fullspeed Projects</h5>
                                                        </Grid>
                                                        <Grid item md={6} className='date-heading'>
                                                            <h6 className='date-heading1'>Monday, 31 June 2020</h6>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                  
                            </div>
                        


                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NotificationLatestActivity