import React from 'react';
import '../styles/Favourite.css'
import { Grid, Button, Avatar } from '@mui/material';
import Category from '../Asset/category.png'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LockIcon from '@material-ui/icons/Lock';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AboutCard from '../Components/Card/AboutCard';
import vectorImage from '../Asset/vector2.svg';
import OrderCard from '../Components/Card/OrderCard';
import ReviewCard from './Review';
import Certificate from './Certificate';
import avatar from './../Asset/avatarimage.svg'
import ScheduleModal from './../Components/ScheduleModal/ScheduleModal.js';
import HireModal from './../Components/HireModal/HireModal.js';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Favourite = () => {

    const user = localStorage.getItem('logged');    
    const [scheduleOpen,setScheduleOpen] = React.useState(false);
    const [hireOpen,setHireOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [reviewOpen,setReviewOpen] = React.useState(false);
    const [certificateOpen,setCertificateOpen] = React.useState(false);

    const orderHandle = () => {
        setOpen(true)
        setReviewOpen(false);
        setCertificateOpen(false);
    }
    const reviewHandle =() =>{
        setReviewOpen(true)
        setOpen(false);
        setCertificateOpen(false)
      
    }
    const certificateHandle = () =>{
        setCertificateOpen(true);
        setReviewOpen(false);
        setOpen(false);
    }
    return (
        <div className='favourite-1'>
            <Navbar/>
            <div className='favourite'>
                <Grid container>
                        <Grid item lg={5} md={5} sm={5} xs={12} className='favourite-BtnMain'>
                            <Button variant='contained' className='btn-favourite'><FavoriteBorderIcon />Add to Favourite</Button>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={12} className='favourite-avatar'>
                            <img src={avatar} alt='img' />
                        </Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12} className='favBtnSection'>
                                        <Button variant='contained' className='btn-hire'
                                        onClick={()=>setHireOpen(true)}
                                        ><LockIcon style={{ fontSize: '18px' }} />Hire</Button>
                                        <Button variant='contained' className='btn-schedule'
                                        onClick={()=>setScheduleOpen(true)}
                                        ><EventNoteIcon />Schedule</Button>
                        </Grid>
                </Grid>

            </div>

            <div className='favourite3'>              
                        <h4 style={{ textAlign:'center' }} className='marina-heading'>Marina Valentine</h4>

                <Grid container>
                        <Grid item lg={4} md={3} sm={12} xs={12} className='about-card4'>
                            <AboutCard />
                        </Grid>
                        <Grid item lg={8} md={9} sm={12} xs={12}  >
                            <div className='favourite-order'>
                                    <Grid item xs={4}  className='eventorder titleTile' onClick={orderHandle} >
                                        <EventNoteIcon style={{ fontSize: '26px' }} className={open ? 'eventnodeicon selectedIcon' : 'eventnodeicon'} /><h4 className={open ? 'orders selectedTxt' : 'orders'}>Orders</h4>
                                    </Grid>
                                    <Grid item xs={4}  className='eventreview titleTile' onClick={reviewHandle}>
                                        <EventNoteIcon style={{ fontSize: '26px' }} className={reviewOpen ? 'eventnodeicon selectedIcon' : 'eventnodeicon'} /><h4   className={reviewOpen ? 'orders selectedTxt' : 'orders'}>Reviews</h4>
                                    </Grid>
                                    <Grid item xs={4}  className='eventcertificate titleTile' onClick={certificateHandle}>
                                        <EventNoteIcon style={{ fontSize: '26px' }} className={certificateOpen ? 'eventnodeicon selectedIcon' : 'eventnodeicon'} /><h4   className={certificateOpen ? 'orders selectedTxt' : 'orders'}>Certificates</h4>
                                    </Grid>
                            </div>

                            {
                                (!Boolean(user)) ? (
                                <>
                                    <Grid container>
                                        <Grid item md={12}sm={12} xs={12} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <img src={vectorImage} alt='img-1' className='vector-img' />
                                            <Button variant='contained' style={{height:50,marginTop: '30px', width: '250px', backgroundColor: 'black', color: 'white',borderRadius:5}} className='btn-favourite-login'>Login</Button>

                                        </Grid>
                                    </Grid>
                                </>) :

                                        
                                             
                                                 open===true ?(
                                                     <>
                                                     
                                            <Grid container >
{
    [1,2,3,4,5].map((v,i)=>(
                                                    <Grid className='cardMainDiv' key={i} mt={2} item xl={3} lg={4} md={6} sm={6} xs={12}>
                                                        <OrderCard />
                                                    </Grid>
    ))
}
                                            </Grid>
                                                     </>
                                                 ) :  reviewOpen === true ?
                                                    <>
                                                    <ReviewCard/>
                                                     
                                                     </>
                                                    
                                                 :(
                                                     <>
                                                    <Certificate/>
                                                     </>
                                                 )  
                                                     
                                                   
                                                 
                                                 
                                             
                                             
                                        
                                    

                            }
                        </Grid>
                </Grid>
                

            </div>
        <ScheduleModal  open={scheduleOpen} setOpen={setScheduleOpen} />
        <HireModal  open={hireOpen} setOpen={setHireOpen} />
        <br/>
        <br/>
        <br/>
        <Footer/>
        </div>

    )
}
export default Favourite;