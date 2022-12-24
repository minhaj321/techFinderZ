import React from 'react';
import SideBar from '../Components/SideBar/SideBar';
import { Grid, Button, Avatar } from '@mui/material';
import '../styles/DisputeOrder.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import category from '../Asset/avatarimage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faGear } from '@fortawesome/free-solid-svg-icons'
import DisputeOrderCard from '../Components/Card/DisputeOrderCard';
import Header from '../Components/Header/Header';


const DisputeOrder =() =>{
    return(
        <div style={{bacgroundColor:'#F9F9F9'}}>
      <Grid container>
                <Grid item container lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F9F9F9' }}>
                    <Grid item lg={3} md={3} sm={3} xs={1}>
                        <SideBar />
                    </Grid>

                    <Grid item lg={9} md={9} sm={9} xs={11} >
                      <Header title={"Dispute Order"}/>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:'20px'}}>
                      <DisputeOrderCard/>
                      <div className='order-card13'>
                      <DisputeOrderCard/>
                      </div>
                     
                      <div className='order-card10'>
                      <DisputeOrderCard/>
                      </div>
                      </div>
                   {/* <Grid container>
                       <Grid item md={12} className='order-card-div1'>
                           <Grid item md={4}><DisputeOrderCard/></Grid>
                           <Grid item md={4}><DisputeOrderCard/></Grid>
                           <Grid item md={4}><DisputeOrderCard/></Grid>
                       </Grid>
                   </Grid> */}
                    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:'20px',marginBottom:'20px'}}>
                      <DisputeOrderCard/>
                      <div className='order-card12'>
                      <DisputeOrderCard/>
                      </div>
                     
                      <div className='order-card11'>
                      <DisputeOrderCard/>
                      </div>
                   
                      </div>
                   {/* <Grid container>
                       <Grid item md={12} className='order-card-div2'>
                           <Grid item md={4}></Grid>
                           <Grid item md={4}><DisputeOrderCard/></Grid>
                           <Grid item md={4}><DisputeOrderCard/></Grid>
                       </Grid>
                   </Grid> */}
               </Grid>
           </Grid>
       </Grid>
       </div>
    )
}
export default DisputeOrder;