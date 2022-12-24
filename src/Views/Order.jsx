import React,{useState} from  'react';
import SideBar from '../Components/SideBar/SideBar';
import { Grid, Button, Avatar, Checkbox} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/DisputeOrder.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import category from '../Asset/avatarimage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import DisputeOrderCard from '../Components/Card/DisputeOrderCard';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Header from '../Components/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrderModal from  '../Components/Modal/OrderModal';

function createData(name, customer, date, amount, status,time,asd) {
  return { name, customer, date, amount, status,time,asd};
}

const rows = [
  createData('00342', 159, 6.0, 24, 4.0,21),
  createData('00342', 237, 9.0, 37, 4.3,1),
  createData('00342', 262, 16.0, 24, 6.0,12),
  createData('00342', 305, 3.7, 67, 4.3,12),
  createData('00342', 356, 16.0, 49, 3.9,12),
];



const Order = () => {
  const [show,setShow] =useState(false);

  const orderOpen= () =>{
    setShow(true);
  }
  const orderClose= () =>{
    setShow(false);
  }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{ bacgroundColor: '#F9F9F9' }}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F9F9F9' }}>
                    <Grid item lg={3} md={3} sm={3} xs={1}>
                        <SideBar />
                    </Grid>

                    <Grid item lg={9} md={9} sm={9} xs={11} >
                        <Header title4={"Orders"}/>
                        <div className='order-div'>
                            <Grid container>
                                <Grid item md={12} >
                                    <h4 className='order-heading'>Orders</h4>
                                </Grid>
                            </Grid>
                            <Grid item md={12}>
                            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <input type='checkbox' style={{marginRight:5}} />
              
              Invoice</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
                <input type='checkbox' style={{marginRight:5}} />
                {row.name}
              </TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right"><Button variant='contained' onClick={orderOpen}>View</Button></TableCell>
              <TableCell align="right"><MoreVertIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                            </Grid>


                            {/* <div class="container">
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered" style={{marginTop:'20px'}}>
        <thead>
          <tr>
            <th scope="col">INVOICE</th>
            <th scope="col">CUSTOMER</th>
            <th scope="col">DATE</th>
            <th scope="col">AMOUNT</th>
            <th scope="col">STATUS</th>
            <th scope="col">TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td ><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td style={{width:'120px'}}>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <td><input type="checkbox" name='barand'/> 00342</td>
                 
              </div>
            </td>
            <td>Roy John</td>
            <td>22 June 2020</td>
            <td>$200</td>
            <td>Complete</td>
            <td>3:00 pm <MoreVertIcon style={{paddingLeft:'10px',fontSize:'30px'}}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> */}
<OrderModal show={show} orderOpen={orderOpen} orderClose={orderClose}/>
             
                        </div>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Order;