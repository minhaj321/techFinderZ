import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import { Grid, Button, Avatar, Checkbox } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/DisputeOrder.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import category from '../Asset/avatarimage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import DisputeOrderCard from '../Components/Card/DisputeOrderCard';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PrintIcon from '@material-ui/icons/Print';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../Components/Header/Header';





const Order = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <h2 style={{ marginLeft: '100px', marginTop: '30px' }} className='transaction-details'> Transaction Details</h2>
                                </Grid>
                            </Grid>
                            <div className='transaction-detail-div'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item lg={5} md={12} sm={6} xs={6} style={{ display: 'flex', paddingTop: '35px', paddingLeft: '20px' }}>
                                                 
                                                <ArrowBackIcon className='arrowbackicon'/>
                                           
                                              <h5 className='order-no-heading'>Order No #5737</h5>
                                            
                                        </Grid>
                                        <Grid item lg={5} md={12} sm={12} xs={6} display={'flex'} flexDirection={'row'} style={{ marginTop: '20px', marginLeft: '100px' }} className='select-button'>
                                            <Grid item lg={4} md={4} sm={6} xs={6} style={{ display: 'flex',justifyContent:'space-evenly', marginTop: '15px' }}>
                                                <PrintIcon className='print-icon' />  <h5 className='print-heading'>Print</h5>
                                            </Grid>
                                            <Grid item lg={3} md={3} sm={3} xs={3} >
                                                <FormControl >
                                                    <InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Download As</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"

                                                        label="Age"
                                                        style={{ backgroundColor: 'blue', width: '200px', borderRadius: '40px', border: '1px solid blue' }}
                                                        className='dowload-select'

                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid >
                                        <h2 style={{ paddingTop: '20px', paddingLeft: '50px' }} className='transaction-detail-heading'>Transaction Reciept</h2>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }} className='transaction-section2'>
                                        <Grid item lg={6} md={6} sm={6} xs={12  }>
                                            <h4 style={{ marginLeft: '50px',color:'#9A9AAB' }} className='customer-heading'>Customer</h4>
                                            <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                                <Grid item lg={3} md={3} sm={3} xs={3} style={{ marginLeft: '40px' }}>
                                                    <Avatar 
                                                        alt="Remy Sharp"
                                                        src={category}
                                                        sx={{ width: 100, height: 100 }}
                                                        className='transaction-avatar'
                                                    />
                                                    
                                                </Grid>
                                                <Grid item lg={9} md={8} sm={8} xs={6} style={{ marginTop: '10px' }} className='transaction-section7' >
                                                    <h4 className='whitespace-heading'>White Space Inc.</h4>
                                                    <h6 style={{color:'#9A9AAB'}} className='guild-street-heading'>18 Guild Street London</h6>
                                                    <h6 style={{color:'#9A9AAB'}} className='united'>United Kingdom</h6>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={2} md={2} sm={2} xs={2} className='transaction-section3'>
                                            <h4 style={{color:'#9A9AAB'}} className='contact-heading'>Contact</h4>
                                            <h6 style={{ marginTop: '30px',marginLeft:'-15px',color:'#57585F' }} className='whitespace-heading1'>Whitespace@gmail.com</h6>
                                            <h6 className='phone-no'>+0013748999309</h6>
                                        </Grid>
                                        <Grid item lg={2} md={2} sm={2} xs={2}className='transaction-section4'>
                                            <h4 style={{color:'#9A9AAB'}} className='reciepent-heading'>Reciepent</h4>
                                            <h6 style={{ marginTop: '30px',color:'#57585F'  }} className='name-heading1'>Samantha William</h6>
                                            <h6 className='email'>samantha@gmail.com</h6>
                                        </Grid>
                                        <Grid item lg={2} md={2} sm={2} xs={2} className='transaction-section5'>
                                            <h4 style={{color:'#9A9AAB'}} className='location-heading'>Location</h4>
                                            <h6 style={{ marginTop: '30px' }} className='kingdom'>United Kingdom</h6>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <hr style={{ height: '5px', width: '90%', marginLeft: '50px', color: '#00008B', borderRadius: '5px' }} className='transaction-hr'/>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={3} sm={6} xs={12} style={{ textAlign: 'center' }} >
                                            <h5 style={{ marginTop: '20px',color:'#9A9AAB' }} className='payment-type'>Payment Type</h5>
                                            <h5 style={{ marginTop: '40px',color:'#5C5E64'  }} className='paypal' >Paypal</h5>
                                            <h5 style={{ marginTop: '20px',color:'#9A9AAB'  }} className='date1'>Date</h5>
                                            <h5 style={{ marginTop: '20px',color:'#8282E3' }} className='date2'>Saturday October 24th,2020</h5>
                                        </Grid>
                                        <Grid item md={3} sm={6} xs={12} style={{ textAlign: 'center' }}>
                                            <h5 style={{ marginTop: '20px',color:'#9A9AAB'  }} className='item-description'>Item Description</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }} className='item-description'>Car Ac</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }} className='item-description'>Headlight</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }} className='item-description'>Bonut</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }}className='item-description'>Tires Change</h5>

                                        </Grid>
                                        <Grid item md={3} sm={6} xs={12} style={{ textAlign: 'center' }}>
                                            <h5 style={{ marginTop: '20px',color:'#9A9AAB'  }}className='item-description'>Rate</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }}className='item-description'>75.00</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }}className='item-description'>22.00</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }}className='item-description'>50.00</h5>
                                            <h5 style={{ marginTop: '20px',color:'#5C5E64' }}className='item-description'>72.00</h5>
                                        </Grid>
                                        <Grid item md={3} sm={6} xs={12} style={{ textAlign: 'center' }}>
                                            <h5 style={{ marginTop: '20px',color:'#9A9AAB'  }}className='item-description'>Amount</h5>
                                            <h5 style={{ marginTop: '20px' }}className='item-description'>$ 360.00</h5>
                                            <h5 style={{ marginTop: '20px' }}className='item-description'>$ 136.00</h5>
                                            <h5 style={{ marginTop: '20px' }}className='item-description'>$ 3340.00</h5>
                                            <h5 style={{ marginTop: '20px' }} className='item-description'>$ 1343.00</h5>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} >
                                        <hr style={{  width: '90%', marginLeft: '50px' }} className='transaction-hr1' />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{display:'flex',flexDirection:'row'}}>
                                        <Grid item md={8} style={{marginLeft:'600px'}} className='subtotal'>
                                            <h5 className='item-description'>Subtotal</h5>
                                            <h5 className='item-description'>Tax</h5>
                                            <h5 className='item-description'>Total</h5>
                                        </Grid>
                                        <Grid item md={4} style={{marginLeft:'50px'}} >
                                            <h5 className='item-description'>$17833,00</h5>
                                            <h5 className='item-description'>$17833,00</h5>
                                            <h5 className='item-description'>$17833,00</h5>
                                        </Grid>
                                       
                                    </Grid>
                                </Grid>
                                <div className='transaction-div2'>
                                    <p style={{paddingLeft:'10px '}}>Noted:</p>
                                    <p style={{textAlign:'center'}} className='lorem-paragraph1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit, dolore animi ipsam officiis sequi non, maiores nemo perspiciatis dolor quisquam alias praesentium minus ullam doloribus officia beatae enim quas.</p>
                                </div>
                            </div>
                        


                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Order;