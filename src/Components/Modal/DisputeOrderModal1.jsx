import {Modal,Button, CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { TextField } from '@mui/material';
const DisputeOrderModal1 = () => {
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
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="please type your reply for dispute"
          style={{width:'400px',marginLeft:'30px',backgroundColor:'#EFEFEF'}}
        

        />
          <Button style={{marginLeft:'150px',marginTop:'20px'}}>Submit Response</Button>
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default DisputeOrderModal1;