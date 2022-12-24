import { Grid, TextField,Select,MenuItem,FormControl,InputLabel ,Button} from '@mui/material';
import React from 'react';
import '../styles/SkillAndCertificates.css'
import technician from '../Asset/download.jpg';

const SkillAndCertificates = () => {
    return (
        <div className='first-section-skillandcertificate'>
            <div className='skillandcertificate'>
                <Grid container>
                        <Grid item lg={4} md={5} sm={5} xs={12}>
                            <h2 className='skill-heading'>Skills & Certificates</h2>

                            <Grid item xs={12}>
                            <p className='pCertiGrayTitle'>Your Introduction</p>
                            <textarea className='certiTextArea' rows={4}  />
                            </Grid>
                            <Grid item xs={12}>
                            <p className='pCertiTitle'>Skills (select upto 5)</p>
                            <input  className='certiInput1' />
                            </Grid>

                            <Grid container>
                                    <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <p className='pCertiTitle'>Certificate Name</p>
                                        <input  className='certiInput' />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={6} className='certiMain'>
                                    <p className='pCertiTitle'>Certificate</p>
                                    <input  className='certiInput' />
                                    </Grid>
                            </Grid>

                            <Grid container style={{marginTop:10}}>
                                    <Grid item lg={6} md={6} sm={6} xs={6} style={{display:'flex',justifyContent:'flex-start'}}>
                                    <Button variant="contained" style={{ textTransform:'capitalize',paddingTop:10,paddingBottom:10,color:'#fff',width: '90%',backgroundColor:'blue' }}>File Upload</Button>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={6} style={{display:'flex',justifyContent:'flex-end'}}>
                                    <Button variant="contained" style={{ textTransform:'capitalize',paddingTop:10,paddingBottom:10,color:'#fff',width: '70%',backgroundColor:'blue' }}>Add</Button>
                                    </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid item lg={8} md={7} sm={7} xs={12} className='skills-img'>
                            <img src={technician} alt='img' className='skills-img1'/>
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SkillAndCertificates;