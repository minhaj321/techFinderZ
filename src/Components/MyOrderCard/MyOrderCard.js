import React,{useState} from 'react'
import './myOrderCard.css';
import { Grid } from '@mui/material';
import DisputeModal from './../DisputeModal/DisputeModal.js';

const MyOrderCard = () => {

    const [open,setOpen] = useState(false)

  return (
    <div className='myOrderCardMain'>
        <DisputeModal open={open} setOpen={setOpen} />
        <button 
        className='orderCardOrderNoBtn'>{'Order No # 003'}</button>
        <div className='myOrderCardDetailsDiv'>
                <Grid container>
                    <Grid container mt={6}>
                    <Grid item xs={6}>Date</Grid>
                    <Grid item xs={6} textAlign='right'>27-10-2022</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Customer</Grid>
                    <Grid item xs={6} textAlign='right'>Sofia</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Car</Grid>
                    <Grid item xs={6} textAlign='right'>Honda</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Model</Grid>
                    <Grid item xs={6} textAlign='right'>Civic</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Total</Grid>
                    <Grid item xs={6} textAlign='right'>$200</Grid>
                    </Grid>
                </Grid>
        </div>
        <button className='orderCardCompBtn'>Complete</button>
        <button 
        className='orderCardDispBtn'
        onClick={()=>setOpen(true)}
        >Dispute</button>
    </div>
  )
}

export default MyOrderCard