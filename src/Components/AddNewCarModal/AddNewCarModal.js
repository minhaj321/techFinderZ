import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './AddNewCarModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 0,
};

export default function AddNewCarModal({open,setOpen}) {

  const handleOpen = () => setOpen(true);
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
          <h2 className='addNewCarModalH2'>ADD NEW CAR</h2>
          <hr/>
            <div className='addNewCarModalMain'>
    <p className='addNewCarModalP'>Car Name</p>
    <input placeholder='Last Repaired' className='addCarModalInput' />
    <p className='addNewCarModalP'>Car Modal</p>
    <input placeholder='Car Model'  className='addCarModalInput'/>
    <p className='addNewCarModalP'>Car Year</p>
    <input placeholder='Problem'  className='addCarModalInput'/>
    <button className='addCarModalSubmitBtn'
    onClick={()=>setOpen(false)}
    >ADD CAR</button>
            </div>

        </Box>
      </Modal>
    </div>
  );
}