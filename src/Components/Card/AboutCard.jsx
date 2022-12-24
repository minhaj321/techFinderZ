import React from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import category from '../../Asset/category.png';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import '../../styles/aboutus.css'

const AboutCard = () =>{
    return(
  <div>
      
            <Card  className='card3'>

                <CardContent>
                   
                    <Grid container>
                        <Grid item md={12}>
                          <h4 className='about-me-heading'>About Me</h4> 
                          <p className='about-paragraph2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, sed dicta blanditiis numquam delectus eveniet tenetur fugiat quibusdam saepe nisi omnis quia. Laborum sequi magnam dicta perferendis quisquam amet a.</p>
                          <h4 className='joined-heading'>Joined :</h4> 
                          <p className='date-paragraph'>September 23,2020</p>
                          <h4 className='mechanic-rating-heading'>Mechanic Rating :</h4>
                          <Grid container>
                              <Grid item md={1}>
                               <p className='paragraph'>4.3</p>
                              </Grid>
                              <Grid item md={6}>
                              <Rating className="half-rating-read" defaultValue={5} precision={5} readOnly />
                                  </Grid>
                          </Grid>
                          
                        </Grid>
                    </Grid>
                  
                
                </CardContent>




            </Card>
        </div>
 
    )
}
export default AboutCard