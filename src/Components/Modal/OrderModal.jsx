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
          onHide={props.orderClose}
          backdrop="static"
          keyboard={false}
        >
            
          <CloseButton onClick={props.orderClose} style={{marginLeft:'auto',paddingRight:'20px',paddingTop:'20px'}}/>
          <Modal.Body>
            <Grid container>
                <Grid item md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                    <Grid item md={9} sm={9} xs={9}>
                        <h6>Order No:</h6>
                    </Grid>
                    <Grid item md={3} sm={3} xs={3}>
                        <h6>#4526</h6>
                        </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12} >
                <hr/>
            </Grid>
            <Grid container>
                <Grid item md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row'}}>
                    <Grid item md={9} sm={9} xs={9}>
                        <h6>Customer Name:</h6>
                    </Grid>
                    <Grid item md={3} sm={3} xs={3}>
                        <h6>Alex Roy</h6>
                        </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} sm={12} xs={12} >
                <hr/>
            </Grid>
            <Grid container>
                <Grid item md={12} sm={12} xs={12}  style={{display:'flex',flexDirection:'row'}}>
                    <Grid item md={9} sm={9} xs={9}>
                        <h6>Issue:</h6>
                    </Grid>
                    <Grid item md={3} sm={3} xs={3}>
                        <h6>Ac not work</h6>
                        </Grid>
                </Grid>
            </Grid>
            <Grid item  md={12} sm={12} xs={12} >
                <hr/>
            </Grid>
            
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default CarModal;