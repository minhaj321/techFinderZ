import React, { useState } from 'react';
import '../SideBar/SideBar.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Drawer from '@mui/material/Drawer';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { Button, Grid } from '@mui/material';
import logo from '../../Asset/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link ,useNavigate} from 'react-router-dom';


const SideBar = () =>{

    const navigate=useNavigate();

    const [open,setOpen]= useState(false);
    const handleClose=() =>{
        setOpen(false);
    }
    return(
<div className='side-bar'>
    <Grid container className='sidebar_main'>
    <Grid conatiner>
        <Grid item container lg={12} md={12} sm={12} xs={12} className='side-bar-div'>
            <img src={logo} alt='img-1' className='side-bar-logo'/>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'40px'}}>
        <Grid item lg={6}  md={5} sm={6} xs={6} >
            <AccessTimeIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={7} sm={6} xs={6}>
            <h5  style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading' onClick={() =>navigate('/dashboard')}>Dashboard</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid  item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid  item lg={6} md={6} sm={6} xs={6} >
            <BookmarkBorderIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid  item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B'}}className='dashboard-heading' onClick={()=>navigate('/dispute-order')}>My Orders</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid  item lg={6} md={6} sm={6} xs={6} >
           <HomeRoundedIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid  item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading' onClick={()=>navigate('/schedule')}>Schedule</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
           <AccountBalanceWalletIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading' onClick={()=>navigate('/wallet')}>Wallet</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12}  style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
        <AccountBalanceWalletIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading' onClick={()=>navigate('/dispute-order')}>Dispute</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
            <CompareArrowsIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B'}}className='dashboard-heading' onClick={()=>navigate('/transaction-details')}>Transaction</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
          <SettingsIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading'onClick={()=>navigate('/edit-profile')}>Edit Profile</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px',marginTop:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
         <HomeRoundedIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-30px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading' onClick={()=>navigate('/logout')}>Logout</h5>
        </Grid>
        </Grid>
    </Grid>
    </Grid>
    <Grid conatiner className='meun_icon_main'>
        <div style={{width:'40px',height:'1000px',backgroundColor:'#F9F9F9'}}>
        <Grid item container lg={12} md={12} sm={12} xs={12} className='side-bar-div'>
         <MenuIcon onClick={()=>setOpen(!open)}  style={{marginTop:'10px'}}/>
        </Grid>
        </div>
    </Grid>

    <Drawer
            anchor={'left'}
            open={open}
            onClose={()=>setOpen(false)}
          >
                  <Grid container className='sidebar_main1'>
                      <Grid item xs={12}>
                          <KeyboardBackspaceIcon style={{marginLeft:'15px',marginTop:'10px'}} onClick={handleClose}/>
                      </Grid>
    <Grid conatiner>
       
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6}  md={5} sm={6} xs={6} >
            <AccessTimeIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={7} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading'onClick={() =>navigate('/dashboard')}>Dashboard</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid  item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid  item lg={6} md={6} sm={6} xs={6} >
            <BookmarkBorderIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid  item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B'}}className='dashboard-heading'onClick={()=>navigate('/order')}>My Orders</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid  item lg={6} md={6} sm={6} xs={6} >
           <HomeRoundedIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid  item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading' onClick={()=>navigate('/schedule')}>Schedule</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
           <AccountBalanceWalletIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading'onClick={()=>navigate('/transaction-history')}>Wallet</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12}  style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
        <AccountBalanceWalletIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B' }}className='dashboard-heading' onClick={()=>navigate('/dispute-order')}>Dispute</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
            <CompareArrowsIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B'}}className='dashboard-heading'onClick={()=>navigate('/transaction-details')}>Transaction</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
          <SettingsIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading'onClick={()=>navigate('/personal-info')}>Edit Profile</h5>
        </Grid>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',padding:'20px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} >
         <HomeRoundedIcon className='sidebar_icon' style={{marginLeft:'20px',fontSize:'35px',backgroundColor:'black',color:'white',borderRadius:'20px'}}/>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
            <h5 style={{marginLeft:'-160px',marginTop:'5px',color:'#53545B'}} className='dashboard-heading'onClick={()=>navigate('/login')}>Logout</h5>
        </Grid>
        </Grid>
    </Grid>
    </Grid>

            {/* {list(anchor)} */}
          </Drawer>


</div>
    )
}
export default SideBar;