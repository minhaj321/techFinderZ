import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ScheduleModal.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CalIcon from './../../Asset/calendar.png';


export default function ScheduleModal({open,setOpen}) {

  const handleClose = () => setOpen(false);
  const [send,setSend] = React.useState(false)
  const [open2,setOpen2] = React.useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  //   minWidth: 350,
  //   maxWidth: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: open2 ? 0 : 2,
    display:'flex',
    flexDirection:'column',
  };
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            !open2 &&
            <div className='scheduleModalMain'>                
    <button className='scheduleModalSubmitBtn'> <AccessTimeIcon className='scheduleModalIcon' /> SCHEDULE</button>
    <hr/>
    {
      !send &&
<> 
    <p className='scheduleModalDateTitle'>Select Date</p>
    <input type={'date'} className='scheduleModalDatePick' />

    <p className='scheduleModalTxtAreaTitle'>Describe your problem</p>
    <textarea 
    rows={7}
    className='scheduleModalInput' placeholder='comment' />

    <select className='scheduleModalSelect'>
        <option>Honda CIVIC 1</option>
        <option>Honda CIVIC 2</option>
    </select>

    <button className='scheduleModalSubmitBtn scheduleModalBtn2'
    onClick={()=>{
      setSend(true)
    }
    }
    >Schedule</button>
  
</>
  }
{
  send &&
    <div className='sendDiv'>
    <img  alt='img' src={CalIcon} className='CalIcon' />
      <p className='sendTxt'>Your schedule request has been send to mechanic</p>
      <button className='scheduleModalDoneBtn'
      onClick={()=>{
        setOpen2(true)
      }}
      >
        <ThumbUpOffAltIcon  className='thumbIcon' />
        Done</button>
    </div>
}

    </div>
          }
    {
      open2 &&
      <div className='open2Main'>
        <div className='scheduleMapDiv'></div>
        <div className='timerBrownMain'>
          <h1>10</h1>
        </div>
        <p className='ScheduleTimerTxt'>Waiting for mechanic acceptance</p>
        <button className='ScheduleTimerBtn'
        onClick={()=>{
          setSend(false)
          setOpen2(false)
          setOpen(false)
        }}
        >Cancel</button>
      </div>
    }
        </Box>
      </Modal>
    </div>
  );
}