import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './HireModal.css';
import { Grid } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddCarModal from './../AddNewCarModal/AddNewCarModal.js';
import LstCar from './../../Asset/car3.jpg';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   minWidth: 350,
//   maxWidth: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  display:'flex',
  flexDirection:'column',
};

export default function HireModal({open,setOpen}) {

  const navigate = useNavigate()
  const handleClose = () => setOpen(false);
  const [open2,setOpen2] = React.useState(false);
  const [open3,setOpen3] = React.useState(false);
    const [type,setType] = React.useState('select')

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
    !open3 &&
            <div className='hireModalMain'>                
        <Grid container>
            <Grid item xs={6}>
                <div className='hireModalSelectTab'
                    onClick={()=>setType('select')}
                    >
                    <button 
                    className={type=='select' ? 'hireModalTabBtn selected' : 'hireModalTabBtn unselected'}>
                        <DirectionsCarFilledIcon className='hireModalIcon1' /> Select Cars</button>
                </div>
            </Grid>
            <Grid item xs={6}>
            <div className='hireModalSelectTab'
            onClick={()=>setType('save')}            
            >
            <button 
            className={type=='save' ? 'hireModalTabBtn selected' : 'hireModalTabBtn unselected'}>
              <DirectionsCarFilledIcon className='hireModalIcon1' />  My Save Cars</button>
            </div>
            </Grid>
        </Grid>
{
    type=='select' &&
        <div className='selectCarMain'>
            <p>Describe your problem</p>
            <textarea rows={6} />

        <div className='carListTitlesMain'>
            <Grid container>
                <Grid item xs={4}>
                    Car Name
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    Car Year
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    Car Model
                </Grid>
            </Grid>
        </div>

        <div className='carListCarMain'>
            <Grid container>
                <Grid item xs={4}>
                    Honda
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    2022
                </Grid>
                <Grid item xs={4} textAlign='right'>
                    CIVIC
                </Grid>
            </Grid>
        </div>

        </div>
    }
{
    type=='select' &&
    <div className='hireModalBottomBtnMain'>
        <button className='hireModalBottomUnselected'
        onClick={()=>setOpen2(true)}
        > <AddIcon className='addIcon' /> Add Car</button>
        <button className='hireModalBottomSelected'
        onClick={()=>setOpen3(true)}
        > <ShoppingBagIcon className='bagIcon'/> HIRE</button>
    </div>
    }

{
    type=='save' &&
    <div className='selectCarMain'>

<div className='carListTitlesMain saveGray'>
    <Grid container>
        <Grid item xs={4}>
            Car Name
        </Grid>
        <Grid item xs={4} textAlign='center'>
            Car Year
        </Grid>
        <Grid item xs={4} textAlign='right'>
            Car Model
        </Grid>
    </Grid>
</div>
{
    [1,2,3,4,5].map((v,i)=>(
<div key={i} className='carListCarMain saveBlack'>
    <Grid container>
        <Grid item xs={4}>
            <img  alt='img' src={LstCar} className='saveBlackImg' />
            Honda
        </Grid>
        <Grid item xs={4} textAlign='center'>
            2022
        </Grid>
        <Grid item xs={4} textAlign='right'>
            CIVIC
        </Grid>
    </Grid>
</div>
    ))
}

</div>
    }


    </div>
}
{
    open3 &&
    <div className='open2Main'>
    <div className='scheduleMapDiv'></div>
    <div className='timerBrownMain'>
      <h1>10</h1>
    </div>
    <p className='ScheduleTimerTxt'>Waiting for mechanic acceptance</p>
    <button className='ScheduleTimerBtn'
    onClick={()=>{
      setOpen3(false)
      setOpen2(false)
      navigate('/order-waiting')
    }}
    >Cancel</button>
  </div>
}
        </Box>
      </Modal>
      <AddCarModal  open={open2} setOpen={setOpen2} />
    </div>
  );
}