import { Grid } from '@material-ui/core';
import { Button } from '@mui/material';
import React,{useState} from 'react';
import '../styles/MyCars.css'
import car1 from '../Asset/Car1.jpg';
import car2 from '../Asset/car4.jpg';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CarModal from '../Components/Modal/CarModal';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import AddCarModal from '../Components/AddCarModal/AddCarModal.js';


const MyCars = () =>{
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);

    const handleShow = () =>{
        setShow(true);
    }
    const handleRemove = () =>{
        setShow(false);
    }
    return(
        <div>
            <Navbar/>
    <div className='my-car'>
            <Button variant='contained' className='btn-my-car'>MY CARS</Button>        
    </div>


<div className='myCarsDetails'>
    <Grid container>
        <Grid item md={12} xs={12} className='my-car-2' >
            <Grid md={6} xs={12} className='car-image'>
             <img src={car1} alt='img-1' width={'98%'} height={'400px'} className='my-car-img1'/>
            </Grid>
            <Grid  md={6} xs={12}>
               <div className='my-car-div'>
                   <Grid container>
                      <Grid item md={12} xs={12} className='my-car-3'>
                          <Grid item  md={6} xs={12} className='car-details'>
                              <h3 className='name'>Owner</h3>
                              <h3 className='last-repair'>Last Repaired</h3>
                              <h3 className='last-mechanic'>Last Mechanic</h3>
                              <h3 className='problem'>Problem</h3>
                              
                          </Grid>
                          <Grid item  md={6} xs={12} className='car-details1'>
                          <h3 className='name'>Noman Ali</h3>
                              <h3 className='last-repair'>28/Nov/2022</h3>
                              <h3 className='last-mechanic'>Taha Ali</h3>
                              <h3 className='problem'>AC Problem</h3>
                              </Grid>
                          </Grid> 
                   </Grid>
                   <Grid container>
                   <Grid item xs={12} className='button-edit'>
                       <Button variant='contained' className='btn-edit1' onClick={handleShow}><EventNoteIcon className='note-icon'/>Edit</Button>
                   </Grid>
               </Grid>
               </div> 
            </Grid>
        </Grid>
    </Grid>
</div>

<div className='myCarsDetails'>
    <Grid container>
        <Grid item sm={12} xs={12} className='my-car-2'>
            <Grid md={6} xs={12}>
               <div className='my-car-div1'>
                   <Grid container>
                      <Grid item sm={12} xs={12} className='my-car-3'>
                          <Grid item  md={6} xs={12}className='car-details'>
                              <h3 className='name' >Owner</h3>
                              <h3 className='last-repair'>Last Repaired</h3>
                              <h3 className='last-mechanic'>Last Mechanic</h3>
                              <h3 className='problem'>Problem</h3>
                              
                          </Grid>
                          <Grid item md={6} xs={12} className='car-details1'>
                          <h3 className='name'>Noman Ali</h3>
                              <h3 className='last-repair'>28/Nov/2022</h3>
                              <h3 className='last-mechanic'>Taha Ali</h3>
                              <h3 className='problem'>AC Problem</h3>
                              </Grid>
                          </Grid> 
                   </Grid>
                   <Grid container>
                   <Grid item sm={12} xs={12} className='button-edit'>
                       <Button variant='contained' className='btn-edit1' onClick={handleShow}><EventNoteIcon className='note-icon'/>Edit</Button>
                   </Grid>
               </Grid>
               </div> 
            </Grid>
            <Grid md={6} xs={12} className='car-image'>
             <img src={car2} alt='img-1' width={'98%'} height={'400px'} className='my-car-img'/>
            </Grid>
        </Grid>
    </Grid>
</div>



    <div style={{display:'flex',justifyContent:'center'}}>
            <Button variant='contained'
            onClick={()=>setShow2(true)}
            className='btn-add-car'><DirectionsCarIcon className='car-icon'/>Add Car</Button>
    </div>
    <CarModal show={show} handleShow={handleShow} handleRemove={handleRemove} />
    <AddCarModal open={show2} setOpen={setShow2}  />
    <Footer/>
    </div>
    )
}
export default MyCars;