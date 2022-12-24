import {Modal,CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import { TextField } from '@mui/material';
import { textAlign } from '@mui/system';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './PaymentModal.css';
import './CarModal.css';
const CarModal = (props) => {

  
    return (
      <>
     
  
        <Modal
          show={props.show}
          onHide={props.handleRemove}
          backdrop="static"
          keyboard={false}
        >
            
          <CloseButton onClick={props.handleRemove} style={{marginLeft:'auto',paddingRight:'20px',paddingTop:'20px'}}/>
          <Modal.Body>
        
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} className='car-textfield'>
                       
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px',backgroundColor:'#F9F9F9'}} className='car-modal-textfield'/>
                        </Grid>
                    </Grid>    
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px'}}>
                    
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px',backgroundColor:'#F9F9F9'}}  className='car-modal-textfield'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px'}}>
                      
                         <TextField id="outlined-search" label="Search field" type="search" variant="outlined" style={{width:'460px',backgroundColor:'#F9F9F9'}}  className='car-modal-textfield'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px' }}>
                         <Button variant='contained' style={{backgroundColor:'black'}}><UploadFileIcon />Upload</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:'20px' ,textAlign:'center'}}>
                         <Button variant='contained' style={{backgroundColor:'black'}}>Submit</Button>
                        </Grid>
                    </Grid>
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default CarModal;