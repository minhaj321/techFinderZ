import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import category from '../../Asset/avatarimage.svg';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import './MemberShipCard.css';

const MemberShipCard1 = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }} className='member-card3'>

<CardContent>
    <Grid container>
       <Grid lg={11} md={11} sm={11} xs={11}>
           <h5 className='your-plan'>Your Plan</h5>
           <h1 className='free'>Free</h1>
           <h5 className='storage'>50 GB Storage</h5>
           <h5 className='limited-feature'>Limited Features</h5>
           <p className='limited-feature-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem omnis </p>
           <Button variant='contained' className='btn-upgrade-plan'>Upgrade Plan</Button>
       </Grid>
       <Grid md={1} sm={1} xs={1}>
          <MoreHorizSharpIcon style={{color:"white"}}/>
       </Grid>
       </Grid>
</CardContent>




</Card>
    </div>
  )
}

export default MemberShipCard1