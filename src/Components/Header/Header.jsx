import { Grid,Avatar } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import category from '../../Asset/avatarimage.svg';
import '../../styles/DisputeOrder.css'
import '../Header/Header.css'
const Header = (props) => {
    return (
        <div className='header'>
            <Grid item container lg={12} md={12} sm={12} xs={12}>
                <Grid item lg={9} md={9} sm={7} xs={7} style={{display:'flex'}}>
                    <h4 className='dispute-order-heading3'>{props.title}</h4>
                    <h4 style={{marginTop:'20px',color:'#BABABD'}}onClick={props.personalHandle} className='header-personal-information'>{props.title1}</h4>
                    <h4 style={{marginTop:'20px',marginLeft:'10px',color:'#BABABD'}} onClick={props.certificateHandle} className='header-certificates'>{props.title2}</h4>
                    <h4 style={{marginTop:'20px',marginLeft:'10px',color:'#BABABD'}}onClick={props.membershipHandle} className='header-membership'>{props.title3}</h4>
                    <h4 className='order-title' style={{marginTop:'20px',color:'#BABABD'}}>Orders</h4>
                </Grid>
                <Grid item lg={3} md={3} sm={5} xs={5} style={{display:'flex',justifyContent:'space-evenly',marginTop:'30px'}}>
                    <FontAwesomeIcon icon={faBell} className='fabell-icon'/>
                    <FontAwesomeIcon icon={faGear} className='faGear-icon' />
                    <Avatar 
                        alt="Remy Sharp"
                        src={category}
                        sx={{ width: 60, height: 60 }}
                        style={{marginTop:'-20px'}}
                        className='header-avatar'
                    />
                     <h6 className='header-name'>Sara</h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header