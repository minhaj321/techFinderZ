import React from 'react'
import DashboardLayout from './../../Components/DashboardLayout/DashboardLayout.js';
import { Grid } from '@mui/material';
import MyOrderCard from './../../Components/MyOrderCard/MyOrderCard.js';
import './MyOrders.css';

const MyOrders = () => {
  return (
    <div>
        <DashboardLayout selected={'My Orders'}>
            <Grid container>
{
    [1,2,3,4,5,6].map(()=>(
        <Grid item xl={3} lg={4} md={4} sm={6} xs={12} mt={3}>
            <div className='myOrdersCardDiv'>
        <MyOrderCard type={'orders'} />
            </div>
        </Grid>
    ))
}
            </Grid>
        </DashboardLayout>
    </div>
  )
}

export default MyOrders