import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import './AddCarModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 350,
  maxWidth: 550,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export default function AddCarModal({open,setOpen}) {

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

    <input placeholder='Last Repaired' className='addCarModalInput marginForInput' />
    <input placeholder='Car Model'  className='addCarModalInput marginForInput'/>
    <input placeholder='Problem'  className='addCarModalInput marginForInput'/>
    <button className='addCarModalBtn'><FileUploadIcon/> Upload</button>
    <button className='addCarModalSubmitBtn paddingbottom'>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}