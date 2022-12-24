import React from 'react'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import avatar from './../../Asset/avatarimage.svg';
import './OrderWaiting.css';
import CallIcon from '@mui/icons-material/Call';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { useNavigate } from 'react-router-dom';

const OrderWaiting = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Navbar/>
        <div className='orderWaitingMap'></div>
        <div className='orderWaitingData'>
            <img  alt='img' src={avatar} className='orderWaitingImg' />
            <p>Congraturations Rara Avis Accept Your Request</p>
            <div className='orderWaitingMetaData'>
                    <div className='borderRight'>
                      <AvTimerIcon className='metaDataIcon' />  2 min
                    </div>
                    <div className='borderLeft'>
                       <FmdGoodOutlinedIcon  className='metaDataIcon'/> 0.5 miles
                    </div>
            </div>
            <div className='orderWaitingBtnDiv'>
                <button 
                onClick={()=>navigate('/order-chat')}
                className='orderWaitingChat'> <ChatBubbleOutlineIcon className='orderWaitingIcon' /> Chat</button>
                <button 
                onClick={()=>navigate('/under-repair')}
                className='orderWaitingCall'> <CallIcon className='orderWaitingIcon' /> Call</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OrderWaiting