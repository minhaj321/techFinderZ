import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Certificate from './../../Asset/certificate.jpg';
import './CertificateModal.css';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 350,
  maxWidth: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  display:'flex',
  flexDirection:'column',
  justifyContent:'center'
};

export default function CertificateModal({open,setOpen}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='certificateModalMain'>
                <div className='certificateModalCloseDiv'>
                    <span
                    onClick={()=>setOpen(false)}
                    > <CloseIcon className='certiModalCloseIcon' /> Close</span>
                </div>
                    
    <img  alt='img' src={Certificate} className='certificateModalAvatar' />
            </div>
        </Box>
      </Modal>
    </div>
  );
}