import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import category from '../../Asset/category.png';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import '../../styles/aboutus.css'


const OrderCard = () =>{
    return(
        <div>
        <Card sx={{ maxWidth: 300 }} className='order-card'>

            <CardContent>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}className='dispute-order' >
                        <Button variant='contained' color='success' className='btn-dispute'>Order # 102</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}style={{display:'flex',flexDirection:'row'}}>
                     <Grid item lg={6} md={6} sm={12} xs={12} style={{padding:'5px', marginTop:'40px'}} >
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Date</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Customer</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Order ID</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Mechanic ID</h6>  
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Reason</h6>   
                     </Grid>
                     <Grid item lg={6} md={6} sm={12} xs={12}style={{padding:'5px', marginTop:'40px',textAlign:'center'}}>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>27-02-2013</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Sofia</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>#36592</h6>
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>#36592</h6>  
                     <h6 style={{color:'#3C3C3C',padding:'10px'}}>Head Light</h6>   
                         </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign:'center'}}>
                   <Button variant='contained' color='success' className='btn-pending'>
                    {/* <AccessTimeIcon className='time-icon'/> */}
                   Completed
                   </Button>   
                    </Grid>
                </Grid>

            </CardContent>




        </Card>
    </div>
    )
}
export default OrderCard;