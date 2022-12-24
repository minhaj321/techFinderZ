import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import category from '../../Asset/category.png';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import MessageIcon from '@material-ui/icons/Message';
import '../../styles/aboutus.css'
import DisputeOrderModal from '../Modal/DisputeOrderModal';


const DisputeOrderCard = () =>{
    const [show,setShow] = React.useState(false);

  function handleClose() {
       setShow(false);
   }
   function handleShow(){
       setShow(true);
   }
    return(
        <div>
        <Card sx={{ maxWidth: 320 }} className='order-card'>

            <CardContent>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='dispute-order' >
                        <Button variant='contained' color='success' className='btn-dispute'>Dispute Order</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}style={{display:'flex',flexDirection:'row'}}>
                     <Grid item lg={6} md={6} sm={12} xs={12} style={{padding:'10px', marginTop:'40px'}} >
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-date'>Date</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-customer'>Customer</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-id'>Order ID</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}className='dispute-mechanic-id'>Mechanic ID</h6>  
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-reason'>Reason</h6>  
                     </Grid>
                     <Grid item lg={6} md={6} sm={12} xs={12} style={{padding:'10px', marginTop:'40px',marginLeft:'20px'}}>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}  className='dispute-date1'>27-02-2013</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}className='dispute-customer1' >Sofia</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-id1'>#36592</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-mechanic-id1'>#36592</h6>  
                     <h6 style={{color:'#3C3C3C',padding:'10px'}} className='dispute-reason1'>Head Light</h6>  
                         </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center'}}>
                   <Button variant='contained' className='btn-responding' onClick={handleShow}><MessageIcon className='message-icon' />Please Responded</Button>   
                   <DisputeOrderModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',marginTop:'15px'}}>
                        <Grid item lg={2} md={2} sm={2} xs={2}>
                            <h6 style={{fontWeight:'bold',color:'#151515'}}>Noted:</h6>
                        </Grid>
                        <Grid item lg={11} md={12} sm={12} xs={12}>
                            <p style={{fontSize:'12px',marginTop:'4px',marginLeft:'5px',color:'#686868'}}className='dispute-paragraph'>Responded with in two day otherwise your customer dispute win</p>
                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>




        </Card>
    </div>
    )
}
export default DisputeOrderCard;
