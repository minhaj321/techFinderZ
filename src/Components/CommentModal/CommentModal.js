import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from './../../Asset/avatarimage.svg';
import './CommentModal.css';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


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
  display:'flex',
  flexDirection:'column',
  justifyContent:'center'
};

export default function CommentModal({open,setOpen}) {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
    <img  alt='img' src={Avatar} className='commentModalAvatar' />
    <h3 className='commentModalUserName'>Rara Avis</h3>
    <Rating name="half-rating-read" className='commentStarRating' defaultValue={5} precision={5} />
    <textarea 
    rows={5}
    className='commentModalInput' placeholder='comment' />
    <button 
    onClick={()=>navigate('/home')}
    className='commentModalSubmitBtn'>Submit</button>
        </Box>
      </Modal>
    </div>
  );
}