import { Modal, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';

const DeleteCertificateModal= (props) => {
  

    return (
        <>
           

            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >

                <CloseButton onClick={props.handleClose} style={{ marginLeft: 'auto', paddingRight: '20px', paddingTop: '20px' }} />
                <Modal.Body>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <h5 style={{ textAlign: 'center' }} className='delete-certificate-heading'>Do you want to delete your certificate ?</h5>
                        </Grid>
                    </Grid>
                    
                    <Grid container>
                    <Grid item md={12} style={{display:'flex',flexDirection:'row',marginLeft:'20px',marginTop:'60px',marginBottom:'50px'}}>
                        <Grid item md={6} sm={6}>
                            <Button variant='outlined' style={{width:'200px',color:'black'}}className='btn-certificate-cancel'>Cancel</Button>
                            </Grid>
                            <Grid item md={6} sm={6}>
                            <Button variant='outlined' style={{width:'200px',backgroundColor:'#3181C6',color:'white'}}className='btn-certificate-delete'>Delete</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Modal.Body>


            </Modal>
        </>
    );
}

export default DeleteCertificateModal;