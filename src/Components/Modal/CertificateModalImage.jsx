import { Modal, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import certificate from '../../Asset/certificate.jpg';
import './CertificateModalImage.css'

const CertificateModalImage= (props) => {


    return (
        <>
           

            <Modal
                show={props.certificateOpen}
                onHide={props.closeCertificate}
                backdrop="static"
                keyboard={false}
               
            >

              
                <Modal.Body  style={{backgroundColor:'grey'}}>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',marginLeft:'auto'}} > 
                        
                        <CloseButton onClick={props.closeCertificate} style={{fontSize:'14px'}} />
                       

                          </Grid>
                        </Grid>
                      <Grid container>
                          <Grid item md={12} sm={12} xs={12}>
                          <img src={certificate} alt='img' style={{width:'300px',height:'250px',marginLeft:'80px',marginBottom:'20px',marginTop:'10px'}} className='certificate-image'/>
                              </Grid>
                          </Grid>
                </Modal.Body>


            </Modal>
        </>
    );
}

export default CertificateModalImage;