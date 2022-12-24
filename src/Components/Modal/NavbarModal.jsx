import { Modal, Button, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import { Grid, TextField ,Avatar} from '@mui/material';
import './DisputeOrderModal.css';
import { Link } from 'react-router-dom';
import logo from '../../Asset/logo.jpg'
import { useNavigate } from 'react-router-dom';
const NavbarModal = (props) => {

  const navigate = useNavigate();


  return (
    <>


      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        style={{ width: '400px', marginLeft: '12px' }}
        className='navbar-modal'
      >

        <CloseButton style={{ marginLeft: 'auto', paddingRight: '20px', paddingTop: '20px' }} onClick={props.handleClose} />
        <Modal.Body>
          <Grid container >
            <Grid item sm={8} xs={8}>
              <ul className='nav-bar-list-item'>
                <li><Link to='/home'>HOME</Link></li>
                <li><Link to='/home-we-work'>HOME WE WORK</Link></li>
                <li><Link to='/about-us'>ABOUT US</Link></li>
                <li><Link to='/contact-us'>CONTACT US</Link></li>
              </ul>
            </Grid>
            <Grid item sm={2} xs={2}>
              <h6 style={{  textAlign: 'center' }} className='navbar-name-heading10'>EMMA JOHN</h6>
    
            </Grid>
            <Grid sm={2} xs={2}>
            <Avatar className='navbar-avatar-10'
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 60, height: 60 }}
                onClick={()=>navigate('/notification-latest-activity')}
              />
            </Grid>
          </Grid>
        </Modal.Body>


      </Modal>
    </>
  );
}

export default NavbarModal;