import { Grid,Avatar } from '@mui/material';
import React from 'react';
import '../styles/UnderRepair.css'
import car from '../Asset/car.jpg'
import category from '../Asset/avatarimage.svg'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UnderRepair = () => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/order-complete')
        },7000)
    },[])

    return (
        <>
        <Navbar/>
        <div className='under-repair-div'>
            <div className='under-repair'>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='under-repair-img'>
                        <img src={car} alt='img-1' width={'100%'} height={'auto'} className='under-repair-img1'/>
                    </Grid>
                </Grid>
              
                    <Grid item lg={12} md={12} sm={12} xs={12} className='under-repair-heading'>
                      <h5 className='under-repair-heading' >YOUR CAR IS UNDER REPAIR</h5> 
                    </Grid>
           
                < Grid container>
                    <Grid item  lg={12} md={12} sm={12} xs={12} className='avatar-image1'>
                    <Avatar className='avatar'
                                alt="Remy Sharp"
                                src={category}
                                sx={{ width: 100, height: 100 }} 
                            />
                    </Grid>
                </Grid>
                < Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='under-repair-heading'>
                      <h5>Colin Munro</h5>
                      <p>Rating 3.0</p>
                    </Grid>
                </Grid>
                < Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='under-repair-paragraph'>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sunt, exercitationem commodi error nam fugit incidunt architecto voluptatibus</p>
                    </Grid>
                </Grid>
                
              
        </div>
        </div>
        <Footer/>
        </>

    )
}
export default UnderRepair;