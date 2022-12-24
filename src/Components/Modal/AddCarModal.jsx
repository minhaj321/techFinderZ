import {Modal,CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import { TextField } from '@mui/material';
import { textAlign } from '@mui/system';
import './PaymentModal.css';
const AddCarModal = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
       <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
            
          <CloseButton onClick={handleClose} style={{marginLeft:'auto',paddingRight:'20px',paddingTop:'20px'}}/>
          <Modal.Body>
          <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h5 style={{ textAlign: 'center' }}>Add New Car</h5>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                         <hr  style={{width:'500px',marginLeft:'-20px'}} />
                        </Grid>
                    </Grid> 
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} className='car-textfield'>
                         <h6>Car Name</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px'}}/>
                        </Grid>
                    </Grid>    
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px'}}>
                         <h6>Car Model</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px'}}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px'}}>
                         <h6>Car Year</h6>
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px'}}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px' ,textAlign:'center'}}>
                         <Button variant='contained'>Add Car</Button>
                        </Grid>
                    </Grid>
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default AddCarModal;