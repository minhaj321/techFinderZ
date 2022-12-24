import React, { useState } from 'react';
import SideBar from '../Components/SideBar/SideBar';
import { Grid, Button, Avatar, Checkbox, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import category from '../Asset/avatarimage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton, Dropdown, Form,FloatingLabel} from 'react-bootstrap';
import Header from '../Components/Header/Header';
import '../styles/PersonalInformation.css'
import Certificate from './Certificate';
import MemberShip from './MemberShip';
import SideBarCertificate from './SidebarCertificate';


const label = { inputProps: { 'aria-label': 'Switch demo' } };





const PersonalInformation = () => {
    const [personalOpen,setPersonalOpen] =useState(true);
    const [certificateOpen,setCertificateOpen] =useState(false);
    const [membershipOpen,setMembershipOpen] =useState(false);

    const personalHandle =() =>{
        setPersonalOpen(true);
        setCertificateOpen(false);
        setMembershipOpen(false);

    }
    const certificateHandle =() =>{
        setCertificateOpen(true);
        setPersonalOpen(false);
        setMembershipOpen(false);
    }

    const membershipHandle =() =>{
        setMembershipOpen(true);
        setPersonalOpen(false);
        setCertificateOpen(false);
    }

    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
      
                   <div style={{ bacgroundColor: '#F9F9F9' }}>
          <Grid container>
                <Grid item container lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F9F9F9' }}>
                    <Grid item lg={3} md={3} sm={3} xs={1}>
                        <SideBar />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9} xs={11} >
                       
                            <Header title1={"Personal Infomation"} title2={"Certificates"} title3={"Membership"}membershipHandle={membershipHandle} certificateHandle={certificateHandle} personalHandle={personalHandle}/>
                    {
                   personalOpen === true ?(
                         <>
                         
            
                         
                            <div className='personal-information-div'>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }} className='personel-info'>
                                        <Grid item  md={3} sm ={6} xs={3}>
                                            <h5 style={{ marginLeft: '20px', marginTop: '20px' }}>Preference</h5>
                                            <h6 className='notification-heading'>Notifications</h6>
                                            <Switch {...label} defaultChecked className='switch' />
                                            <h6 className='language-heading'>language</h6>
                                            <DropdownButton id="dropdown-item-button" title="Dropdown button" className='dropdown-item-button'>
                                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                                <Dropdown.Item as="button">English</Dropdown.Item>
                                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Grid>
                                        <Grid item lg={1}md={2} sm={2} xs={12} style={{ borderRight: '3px solid #C7C7D1', height: '500px', marginTop: '90px', marginLeft: '-50px' }}>

                                        </Grid>
                                        <Grid item lg={8} md={8} sm={8} xs={12}  >
                                            <h5 className='account-heading'>Account</h5>
                                            <Grid item md={12} style={{ display: 'flex', flexDirection: 'row' }} className='second-personal-information-portion'>
                                                <Grid item md={6} style={{ paddingLeft: '40px', paddingTop: '30px' }}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label style={{color:'#ABABB9'}}>ID</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email"  style={{height:'60px'}}/>
                                                        </Form.Group>
                                                    </Form>
                                                </Grid>
                                                <Grid item md={6} style={{ paddingLeft: '40px', paddingTop: '30px' }}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label  style={{color:'#ABABB9'}}>Phone</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email"  style={{height:'60px'}}/>
                                                        </Form.Group>
                                                    </Form>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={12} style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}className='second-personal-information-portion1'>
                                                <Grid item md={6} style={{ paddingLeft: '40px' }}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label  style={{color:'#ABABB9'}}>Pin</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" style={{height:'60px'}} />
                                                        </Form.Group>
                                                    </Form>
                                                </Grid>
                                                <Grid item md={6} style={{ paddingLeft: '40px' }}>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label  style={{color:'#ABABB9'}}>Password</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email"  style={{height:'60px'}} />
                                                        </Form.Group>
                                                    </Form>
                                                </Grid>
                                            </Grid>
                                            <Grid item md={12} style={{marginTop:'20px'}} className='second-personal-information-portion2'>
                                                 <Form.Label style={{paddingLeft:'40px',color:'#ABABB9'}}>Address</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Leave a comment here"
                                                        style={{ height: '150px',width:'400px',marginLeft:'40px' }}
                                                        className='personel-information-textarea'
                                                    />
                                               

                                            </Grid>
                                            <Grid item md={12} style={{marginLeft:'40px',marginTop:'40px'}}>
                                                <Button variant='contained' style={{width:'300px',height:'50px',borderRadius:'50px',backgroundColor:'#4FB9DD'}} className='btn-save-setting'>Save Setting</Button>
                                                </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>

                    


                  
                         </>
            ):certificateOpen === true ?(
                         <>
                         <SideBarCertificate/>
                         </>
                     ):(
                         <MemberShip/>
                     )
                     }
                       </Grid>
                </Grid>
            </Grid>
        </div>
         
     
    )
    
}
export default PersonalInformation;