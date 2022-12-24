import {Modal,Button, CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { TextField } from '@mui/material';
const DisputeOrderModal = (props) => {
    

    return (
      <>
     
  
        <Modal
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
            
          <CloseButton  style={{marginLeft:'auto',paddingRight:'20px',paddingTop:'20px'}} onClick={props.handleClose}/>
          <Modal.Body>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="I am properly fix the car Ac and customer not blame to me i don't know why"
          style={{width:'400px',marginLeft:'30px',backgroundColor:'#EFEFEF'}}
        

        />
          <Button style={{marginLeft:'150px',marginTop:'20px'}}>Submit Response</Button>
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default DisputeOrderModal;