import React from 'react'
import DashboardLayout from './../../Components/DashboardLayout/DashboardLayout.js';
import { Grid } from '@mui/material';
import ScheduleCard from './../../Components/ScheduleCard/ScheduleCard.js';

const Schedule = () => {
  return (
    <div>
        <DashboardLayout selected={'Schedule'}>
            <Grid container>
{
    [1,2,3,4,5,6].map(()=>(
        <Grid item xl={3} lg={4} md={4} sm={6} xs={12} mt={3}>
            <div className='myOrdersCardDiv'>
        <ScheduleCard />
            </div>
        </Grid>
    ))
}
            </Grid>
        </DashboardLayout>
    </div>
  )
}

export default Schedule