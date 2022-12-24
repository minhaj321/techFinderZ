import React from 'react'
import DashboardLayout from './../../Components/DashboardLayout/DashboardLayout.js';
import { Grid } from '@mui/material';
import './PersonalInformation.css';
import Img from './../../Asset/vector2.svg'
import avatar from './../../Asset/loggedIn.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const PersonalInformation = () => {

    return (
    <div>
        <DashboardLayout selected={'Personal Information'}>
            <Grid container mt={12}>
                <Grid item md={8} sm={7} xs={12}>
                    <div className='personalInfoDiv1'>
                        <Grid container>
                            <Grid item xs={12} style={{display:'flex',alignItems:'flex-end'}}>
<img alt='img' src={avatar} />
<input type='file' id='file1' style={{display:'none'}} />
<label for='file1'>
<SaveAsIcon className='fileEditIcon' />
</label>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='PersonalInfoInputMainDiv'>
                                <input placeholder='First Name' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} pr={2} className='removePR'>
                                <div className='PersonalInfoInputMainDiv'>
                                    <LocationOnIcon  className='personalInfoInputIcon' />
                            <input placeholder='Address' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className='PersonalInfoInputMainDiv'>
                            <input placeholder='City' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>

                            <Grid item md={6} pr={2} xs={12} className='removePR'>
                                <div className='PersonalInfoInputMainDiv'>
                                    <PhoneInTalkIcon  className='personalInfoInputIcon' />
                            <input placeholder='Contact No' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className='PersonalInfoInputMainDiv'>
                            <input placeholder='Zip Code' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <div className='PersonalInfoInputMainDiv'>
                                    <DraftsIcon  className='personalInfoInputIcon' />
                                <input placeholder='Email' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='PersonalInfoInputMainDiv'>
                                    <LockIcon  className='personalInfoInputIcon' />
                                <input placeholder='Password' className='fullLengthInfoDiv' />
                                </div>
                            </Grid>


                            <Grid item xs={12}>
                                <button className='saveChangesInfoBtn'>Save Changes</button>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>
                <Grid item md={4} sm={5} xs={12}>
                <div className='personalInfoDiv2'>
                    <img alt='img' src={Img} />
                    <h2>TOP RATED MECHANIC</h2>
                    <p>Tempor et tempor aliqua ullamco mollit mollit voluptate cupidatat commodo esse aliquip Lorem enim ullamco deserunt labore occaecat. Occaecat incididunt nisi nisi sunt nisi pariatur sint. Duis duis ut minim occaecat aliqua nisi occaecat non excepteur officia. Et ad sint cillum ad dolore enim sunt deserunt adipisicing mollit aute nulla.</p>
                    <button>Hire Now</button>
                </div>
                </Grid>
            </Grid>
        </DashboardLayout>
    </div>
  )
}

export default PersonalInformation