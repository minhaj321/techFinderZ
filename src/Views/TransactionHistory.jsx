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
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
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
import '../styles/TransactionHistory.css';
import Header from '../Components/Header/Header';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import {Form } from 'react-bootstrap'


function createData(name, customer, date, amount, status, time, asd) {
    return { name, customer, date, amount, status, time, asd };
}

const rows = [
    createData('00342', 'INV001', 'March 25,2021', 'Paypal', 4.0, 21),
    createData('00342', 'INV001', 'March 25,2021', 'Paypal', 4.3, 1),
    createData('00342', 'INV001', 'March 25,2021', 'Paypal', 6.0, 12),
    createData('00342', 'INV001', 'March 25,2021', 'Paypal', 4.3, 12),
    createData('00342', 'INV001', 'March 25,2021', 'Paypal', 3.9, 12),
];

const TransactionHistory = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{ bacgroundColor: '#F9F9F9' }}>
            <Grid container>
                <Grid item container lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F9F9F9' }}>
                    <Grid item lg={3} md={3} sm={3} xs={1}>
                        <SideBar />
                    </Grid>

                    <Grid item lg={9} md={9} sm={9} xs={11}>
                        <Header />

                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }} className='select-item'>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <h2 style={{ marginLeft: '100px', marginTop: '30px' }} className='transaction-history-heading'>Transaction Details</h2>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6} style={{ marginTop: '20px',display:'flex'}}className='transaction-label' >
                                    <Form.Select aria-label="Default select example" style={{width:'200px ',border:'none',color:'blue',backgroundColor:'transparent'}} className='label-1'>
                                        <option>newest</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" style={{width:'200px ',marginLeft:'20px ',borderRadius:'40px ',backgroundColor:'blue',color:'white'}} className='label-2'>
                                        <option>Download as</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className='transaction-history-div'>

                            <Grid container>
                                <Grid item md={12}>
                                    <h5 style={{ paddingTop: '20px', paddingLeft: '10px' }}>Transaction History</h5>
                                </Grid>
                            </Grid>

                            <Grid item md={12}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <input type='checkbox' style={{ marginRight: 5 }} />

                                                    Invoice</TableCell>
                                                <TableCell align="right">Customer</TableCell>
                                                <TableCell align="right" style={{ paddingRight: '50px' }}>Date</TableCell>
                                                <TableCell align="right" >Amount</TableCell>
                                                <TableCell align="right" style={{ paddingRight: '60px' }}>Status</TableCell>
                                                <TableCell align="right">Time</TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" style={{ display: 'flex' }}>

                                                        <input type='checkbox' style={{ marginRight: 5, marginTop: '15px ' }} />
                                                        <div >
                                                            <Avatar
                                                                alt="Remy Sharp"
                                                                src={category}
                                                                sx={{ width: 40, height: 40 }}
                                                                className='transaction-avatar'
                                                            />
                                                        </div>
                                                        <div >
                                                            <h6 style={{ fontSize: '12px', paddingTop: '5px' }}>Samantha William</h6>
                                                            <h6 style={{ fontSize: '10px' }}>samanthawilliam@gmail.com</h6>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="right">{row.customer}</TableCell>
                                                    <TableCell align="right">{row.date}</TableCell>
                                                    <TableCell align="right">{row.amount}</TableCell>
                                                    <TableCell align="right"><Button variant='contained' style={{ borderRadius: '20px' }}>Complete</Button></TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>

                                                    <TableCell align="right"><MoreHorizSharpIcon /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <h5 style={{ marginTop: '30px ', marginLeft: '20px' }} className='showing-heading'>showing 1-5 from 100</h5>
                                </Grid>
                                <Grid item md={6} style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }} className='pagination'>
                                    <ArrowLeftSharpIcon style={{ fontSize: '50px ' }} className='arrow-left' />
                                    <h3 style={{ padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: '60%', background: 'blue', border: '1px solid grey' }} className='pagination-1'>1</h3>

                                    <h3 style={{ padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: '60%', background: 'white', border: '1px solid grey' }} className='pagination-2'>2</h3>
                                    <h3 style={{ padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: '60%', background: 'white', border: '1px solid grey' }} className='pagination-3'>3</h3>
                                    <ArrowRightSharpIcon style={{ fontSize: '50px ' }} className='arrow-right' />
                                </Grid>
                            </Grid>

                            {/* 
                                <Grid container>
                                    <Grid item md={12}>
                                        <h5 style={{ paddingTop: '20px', paddingLeft: '10px' }}>Transaction History</h5>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px' }}>
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Reciepent</h6>
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Invoice</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Date</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Amount</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Payment Method</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>status</h6>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha </h6>
                                                
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px'}}>Complete</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha  </h6>
                                                
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px',backgroundColor:'red'}}>Cancelled</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha  </h6>
                                                
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px'}}>Complete</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
   <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha </h6>
                                                
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px',backgroundColor:'red'}}>Cancelled</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha</h6>
                                                
                                            </Grid>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px'}}>Complete</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Grid item md={2} style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item md={1} style={{ marginTop: '10px' }}>
                                                <Checkbox />
                                            </Grid>
                                            <Grid item md={1} style={{ marginLeft: '30px',display:'flex',flexDirection:'row' }}>
                                                <Avatar className='avatar'
                                                    alt="Remy Sharp"
                                                    src={category}
                                                    sx={{ width: 50, height: 50 }}
                                                />
                                                <h6 style={{ marginTop: '20px', color: '#9A9AAB',marginLeft:'10px' }}>Samantha </h6>
                                          
                                                
                                            </Grid>
                                           

                                        </Grid>
                                        
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>INV-009366</h6>


                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>25 Marc,2021</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>$ 50.0098</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <h6 style={{ marginTop: '20px', color: '#9A9AAB' }}>Paypal</h6>

                                        </Grid>
                                        <Grid item md={2} style={{ textAlign: 'center' }}>
                                            <Button variant='contained' style={{borderRadius:'20px',marginTop:'15px',marginLeft:'40px',backgroundColor:'grey',width:'110px'}}>Pending</Button><MoreVertIcon style={{marginLeft:'10px',marginTop:'15px'}}/>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <hr />
                                    </Grid>
                                </Grid> */}




                        </div>



                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default TransactionHistory;