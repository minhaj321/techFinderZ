import React,{useState} from 'react';
import '../styles/OrderComplete.css'
import vectorImage from '../Asset/vector2.svg'
import { Button, Grid } from '@mui/material';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import CommentModal from '../Components/CommentModal/CommentModal.js';
import { useNavigate } from 'react-router-dom';

const OrderComplete = () =>{

    const [open,setOpen] = useState(false)
    const navigate = useNavigate();
    
    return(
       <>
       <Navbar/>
     <div className='order-complete'>
         <div className='order-complete-div'>
            <Grid container>
                <Grid item xs={12} className='img-avatar4'>
                 <img src={vectorImage} alt='img1' width={'120px'}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                 <h5 style={{textAlign:'center',marginTop:'30px'}} className='order-complete-heading'>ORDER IS COMPLETED</h5>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} className='btn-scan-qrcode'>
                 <Button 
                //  onClick={()=>setOpen(true)}
                 onClick={()=>navigate('/order-receipt')}
                 className='oderCompBtn' variant='contained' style={{width:'200px',color:'#Fff',backgroundColor:'#8F87FF'}}><CameraAltIcon className='orderCompModIcon' />Scan Qr Code</Button>
                </Grid>
            </Grid>
         </div>
     </div>
     <Footer/>
     <CommentModal  open={open} setOpen={setOpen} />
     </>
    )
}

export default OrderComplete;