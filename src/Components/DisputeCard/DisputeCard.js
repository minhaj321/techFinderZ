import React,{useState} from 'react'
import { Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DisputeCard = () => {

    const [pending,setPending] = useState(false);

  return (
    <div className='myOrderCardMain'>
        <button 
        style={{background:'#3897E7'}}
        className='orderCardOrderNoBtn'>{'Dispute Order'}</button>
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
                    <Grid item xs={6}>Order ID</Grid>
                    <Grid item xs={6} textAlign='right'>#F2HBA2</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Mechanic ID</Grid>
                    <Grid item xs={6} textAlign='right'>#F2HBA2</Grid>
                    </Grid>

                    <Grid container mt={2}>
                    <Grid item xs={6}>Reason</Grid>
                    <Grid item xs={6} textAlign='right'>Head Light</Grid>
                    </Grid>
                </Grid>
        </div>
        <button 
        style={pending ? {marginTop:'60px',background:'#FFB852'} : {marginTop:'60px',background:'#2AA388'}}
        className='orderCardDispBtn'
        onClick={()=>setPending(!pending)}
        >
            {
                pending ? <AccessTimeIcon style={{marginRight:4}} /> : <DoneIcon style={{marginRight:4}} />
            }
            {pending ? 'Pending' : 'Dispute Resolved'}</button>
    </div>
  )
}

export default DisputeCard