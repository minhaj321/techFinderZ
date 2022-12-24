import React from 'react';
import { useState } from 'react';
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
import DeleteCertificateModal from '../Components/Modal/DeleteCertificateModal';
import CertificateModal from '../Components/Modal/CertificateModal';
import AddIcon from '@mui/icons-material/Add';
import CertificateModalImage from '../Components/Modal/CertificateModalImage';

function createData(name, certificatename, coursename, date, year,action) {
  return { name, certificatename, coursename, date, year,action};
}

const rows = [
  createData('1', 'Mechanic Diploma', 'Mechanic', '12 Apr 2018', 1996),
  createData('1', 'Mechanic Diploma', 'Mechanic', '12 Apr 2018', 1996),
  createData('1', 'Mechanic Diploma', 'Mechanic', '12 Apr 2018', 1996),
  createData('1', 'Mechanic Diploma', 'Mechanic', '12 Apr 2018', 1996),
  createData('1', 'Mechanic Diploma', 'Mechanic', '12 Apr 2018', 1996),
];



const SideBarCertificate = () => {
    const [show, setShow] = useState(false);
    const [open,setOpen] = useState(false);
    const [certificateOpen,setCertificateOpen]=useState(false);

    const certificatOpen=() =>{
      setCertificateOpen(true);
    }

    const closeCertificate=() =>{
      setCertificateOpen(false);
    }

    const handleRemove = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{ bacgroundColor: '#F9F9F9' }}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}style={{  backgroundColor: '#F9F9F9' }}>
                   

                    <Grid item lg={9} md={9} sm={9} xs={11} >
                      
                        <div className='order-div'>
                            <Grid container>
                                <Grid item md={12} >
                                    <h4 className='order-heading'>All</h4>
                                </Grid>
                            </Grid>
                            <Grid item md={12}>
                            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
           
              
              Invoice</TableCell>
            <TableCell align="right">Certificate Name</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Action</TableCell>
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
                
               
                {row.name}
              </TableCell>
              <TableCell align="right">{row.certificatename}</TableCell>
              <TableCell align="right">{row.coursename}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              
              <TableCell align="right"><Button variant='outlined' onClick={handleShow}>Delete</Button></TableCell>
              <TableCell align="right"><Button variant='contained' onClick={certificatOpen} >View</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <DeleteCertificateModal show={show} handleClose={handleClose} handleShow={handleShow}/>
    <CertificateModal open={open} handleOpen={handleOpen} handleRemove={handleRemove}/>
    <CertificateModalImage certificatOpen={certificatOpen} closeCertificate={closeCertificate} certificateOpen={certificateOpen}/>
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
                      <Grid container>
                        <Grid md={12} sm={12} xs={12} style={{textAlign:'right'}}>
                          <Button variant='contained' style={{width:'150px',marginTop:'20px' }}onClick={handleOpen}><AddIcon/>Add</Button>
                        </Grid>
                      </Grid>
             
                        </div>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}
export default SideBarCertificate;