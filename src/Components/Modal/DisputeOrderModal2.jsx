import {Modal,CloseButton} from 'react-bootstrap';
import {useState} from 'react';
import { Grid,Button} from '@mui/material';
import './DisputeOrderModal.css'
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
              <h6>Customer Dispute</h6>
            <div className='dispute-order-modal2-div'>
                <h6 style={{paddingTop:'30px',paddingLeft:'20px'}}>Mechanic not fix properly car issue</h6>
                </div>
                <h6 style={{paddingTop:'10px'}}>Mechanic Dispute</h6>
            <div className='dispute-order-modal2-div2'>
                <h6 style={{paddingTop:'30px',paddingLeft:'20px'}}>I am properly fix the ac car and customer not blame to me!</h6>
                </div>
                <h6 style={{paddingTop:'10px'}}>Admin Respond</h6>
            <div className='dispute-order-modal2-div3'>
                <h6 style={{paddingTop:'20px',paddingLeft:'20px'}}>Customer is right you donot fix the car ac and this warning for you other your account be banned!</h6>
                </div>
                <Grid container>
                    <Grid item md={12} style={{display:'flex',flexDirection:'row',marginLeft:'20px',marginTop:'20px'}}>
                        <Grid item md={6}>
                            <Button variant='outlined' style={{width:'200px'}}>Disagree</Button>
                            </Grid>
                            <Grid item md={6}>
                            <Button variant='outlined' style={{width:'200px',backgroundColor:'#3181C6',color:'white'}}>Agree</Button>
                            </Grid>
                        </Grid>
                    </Grid>
          </Modal.Body>

       
        </Modal>
      </>
    );
  }
  
export default DisputeOrderModal1;