import React,{useState} from 'react'
import { Grid } from '@mui/material';
import './ScheduleCard.css'

const ScheduleCard = () => {


  return (
    <div className='scheduleCardMain'>
        <div className='scheduleMapDiv'></div>
        <div className='scheduleRouteDiv'>
            <span className='scheduleRouteDate'>
                DATE : 02-10-2022
            </span>
            <div className='scheduleCardRouteMainDiv'>
                <div className='scheduleCardRouteMainDivOne'>
                    <div className='scheduleBlueDiv'></div>
                    <div className='scheduleBlackDiv'></div>
                    <div className='scheduleGreenDiv'></div>
                </div>
                <div className='scheduleCardRouteMainDivTwo'>
                    <div className='scheduleCardRouteMainDivTwoOne'>
                        <span>Mechanic address</span>
                        <span>Suit 43 Sydney Australia</span>
                    </div>
                    <div className='scheduleCardRouteMainDivTwoTwo'>
                        <hr/>
                        <span>Time 06 : 00 PM</span>
                    </div>
                    <div className='scheduleCardRouteMainDivTwoThree'>
                    <span>Customer address</span>
                    <span>Suit 43 New York London</span>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='scheduleCardDetailsDiv'>
                <Grid container>
                    <Grid container mt={6}>
                    <Grid item xs={6}>Car Name</Grid>
                    <Grid item xs={6} textAlign='right'>Honda Civic</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Modal Number</Grid>
                    <Grid item xs={6} textAlign='right'>2022</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Issues</Grid>
                    <Grid item xs={6} textAlign='right'>AC not working</Grid>
                    </Grid>
                </Grid>
        <button 
        style={{marginTop:'40px'}}
        className='orderCardDispBtn'
        >Please wait for Acceptance</button>
        </div>
    </div>
  )
}

export default ScheduleCard