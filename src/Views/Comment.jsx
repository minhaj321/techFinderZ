import { Grid, Avatar ,TextField, Button} from '@mui/material';
import React from 'react';
import '../styles/Comment.css'
import car from '../Asset/car.jpg'
import category from '../Asset/avatarimage.svg'
import Rating from '@mui/material/Rating';

const Comment = ({ fun }) => {
    fun(true)
    return (

        <div className='comment-div'>
            <div className='comment-div1'>
                < Grid container>
                    <Grid item md={12} className='comment-avatar-img'>
                        <Avatar className='avatar'
                            alt="Remy Sharp"
                            src={category}
                            sx={{ width: 80, height: 80 }}
                        />
                    </Grid>
                </Grid>
                < Grid container>
                    <Grid item md={12} className='comment-heading'>
                        <h5>Colin Munro</h5>
                        <Rating name="half-rating-read" defaultValue={1} precision={5} readOnly />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12} className='comment-textfield'>
                        <TextField
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            rows={4}
                            className='textfield-comment'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12} className='comment-textfield'>
                    <Button variant='contained' className='btn-comment-submit'>Submit</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Comment;