import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import category from '../../Asset/avatarimage.svg';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './MemberShipCard.css';

const MembershipCrad = () => {
  return (
    <div className='membership'>

<Card sx={{ maxWidth: 345 }} className='member-card2'>

<CardContent>
    <Grid container>
        <Grid item md={12}>
            <h6 >Beginner</h6>
            <h1>$ 19</h1>
            <h6> For more business that want</h6>
            <h5 className='limited-link'>All limited link</h5>
            <h5 className='own-analytics'>Own analytics platform </h5>
            <h5 className='chat-support'> Chat support</h5>
            <h5 className='optimize'>Optimize hashtags</h5>
            <h5 className='unlimited'>Unlimited users</h5>
            
            <Button variant='outlined' className='btn-choose-plan'>Choose plan</Button>
        </Grid>
    </Grid>
</CardContent>




</Card>

</div>
  )
}

export default MembershipCrad