import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './DisputeModal.css';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  border: 'none',
  boxShadow: 24,
  p: 4,
  pt: 1,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
};

export default function DisputeModal({open,setOpen}){

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='disputeResponseModal'>
            <p 
            onClick={()=>setOpen(false)}
            className='disputeCloseTxt'><CloseIcon className='disputeCloseIcon' />  CLOSE</p>
            <textarea  className='disputeSubmitTextArea'
            rows={7}
            />
            <button 
            onClick={()=>setOpen(false)}
            className='disputeSubmitResponseBtn'>Submit Response</button>

        </Box>
      </Modal>
    </div>
  );
}
