import { Grid ,Avatar,Button} from '@mui/material'
import React from 'react'
import logo from '../Asset/image-4.png';
import '../styles/Membership.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import MemberShipCard1 from '../Components/Card/MemberShipCard1';
import MembershipCrad from '../Components/Card/MembershipCrad';
import MechanicCard from '../Components/Card/MechanicCard';

const MemberShip = () => {
  return (
      <div>
    <div className='membership-div'>
        <Grid container className='membership-div4'>
            <Grid item lg={8} md={8} sm={8} xs={8}>
              <Grid item lg={12} md={12} sm={12} xs={12}style={{display:'flex'}}>
                  <Grid lg={3} md={4} sm={3} xs={3} >
                  <Avatar className='membership-avatar'
                                alt="Remy Sharp"
                                src={logo}
                                sx={{ width: 140, height: 140 }} 
                                style={{marginLeft:'20px',marginTop:'10px'}}
                            />
                  </Grid>
                  <Grid lg={4} md={4} sm={12} xs={12}>
                      <h4 style={{marginTop:'20px'}}className='member-name'>Rara Axis</h4>
                      <h6 style={{marginTop:'20px'}} className='member-mechanic'>Mechanic at TecFinder</h6>
                      <Button variant='contained' style={{marginTop:'20px',height:'50px',borderRadius:'40px'}} className='btn-memeber-edit-profile'>Edit Profile</Button>
                  </Grid>
              </Grid>
              <Grid item md={12} style={{display:'flex'}} className='member-section-2'>
                  <Grid item md={4}  style={{display:'flex'}}>
                      <Grid item lg={4} md={4} >
                        <AddLocationIcon style={{fontSize:'35px',marginTop:'50px',marginLeft:'30px'}} className='member-location-icon'/>
                      </Grid>
                      <Grid item md={8} sm={12} style={{marginTop:'50px'}}>
                        <h6 className='address-member'>Address</h6>
                        <h6 className='member-address'>Fraklin Avenue Street</h6>
                        <h6 className='member-address'>New York, ABC 5562</h6>
                        <h6 className='member-country' >United States</h6>
                      </Grid>
                  </Grid>
                  <Grid item md={4} style={{display:'flex'}}>
                      <Grid item lg={4} md={5}>
                        <MailOutlineIcon  style={{fontSize:'30px',marginTop:'50px',marginLeft:'30px'}} className='member-mail-icon'/>
                      </Grid>
                      <Grid item md={8} style={{marginTop:'50px'}} className='member-section-1'>
                        <h6 className='address-member'>Address</h6>
                        <h6 className='member-address'>Fraklin Avenue Street</h6>
                        <h6 className='member-address1'>New York, ABC 5562</h6>
                        <h6 className='member-country'>United States</h6>
                      </Grid>
                  </Grid>
                  <Grid item md={4} style={{display:'flex'}}>
                      <Grid item lg={4} md={5}>
                        <CallIcon style={{fontSize:'30px',marginTop:'50px',marginLeft:'30px'}} className='member-call-icon'/>
                      </Grid>
                      <Grid item md={8}style={{marginTop:'50px'}}>
                        <h6 className='address-member'>Address</h6>
                        <h6 className='member-address'>Fraklin Avenue Street</h6>
                        <h6 className='member-address1'>New York, ABC 5562</h6>
                        <h6 className='member-country'>United States</h6>
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}style={{marginTop:'20px'}}>
              <div  className='membership-div5'>
              <MemberShipCard1 />
              </div>
               
            </Grid>
        </Grid>
    </div>
          <div className='membership-div1'>
            <div className='member-section-3' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
              <MembershipCrad/>
              <MembershipCrad/>
              <div className='member-section-div6'>
              <MembershipCrad/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MemberShip