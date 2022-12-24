import React from 'react';
import { Button, Grid, Avatar } from '@mui/material';
import category from '../Asset/avatarimage.svg';
import Rating from '@mui/material/Rating';
import '../styles/Review.css'


const ReviewCard = () =>{
    return(
        <div className='review-card-div' style={{bacgroundColor:'white'}}>
            {
                [1,2,3,4].map((v,i)=>(
            <Grid container key={i}>
            <Grid item lg={10} md={10} sm={10} xs={12}  className='review-section'>
                    <Avatar 
                                alt="Remy Sharp"
                                src={category}
                                sx={{ width: 100,height:100 }} 
                                className='review-avatar'
                            />
                        <div className='reviewDetials'>
                        <h5 className='alex-heading'>Alex Johnson</h5>
                        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
                        <p className='lorem-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum laudantium odit qui itaque </p>
                        </div>
                        
                    </Grid>
            </Grid>

                ))
            }

        </div>
    )
}


export default ReviewCard;