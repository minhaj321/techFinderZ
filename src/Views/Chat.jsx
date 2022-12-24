import React from 'react'
import '../styles/Chat.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grid, Button, Avatar } from '@mui/material';
import Category from '../Asset/category.png'
import SendIcon from '@mui/icons-material/Send';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Chat = () => {
  return (
    <>
    <Navbar/>
    <div className='chat-div'>
        <p className='chatTitle'>Chat</p>
      <div className='chat-div1'>
         <Grid container pt={2}>
                 <Grid item md={11} sm={11} xs={11} className='chatHeader'>
                    <Avatar className='chat-avatar'
                        alt="Remy Sharp"
                        src={Category}
                        sx={{ width: 40, height: 40 }}
                        style={{marginLeft:'20px'}}
                    />
                    <div className='chatName'>
                        <h6 style={{marginLeft:'5px'}}>Jordon Nico</h6>
                        <p style={{marginLeft:'5px'}}>Online</p>
                    </div>
                 </Grid>
                 <Grid md={1} sm={1} xs={1}>
                     <MoreHorizIcon style={{marginTop:'10px'}}/>
             </Grid>
         </Grid>
        <hr/>
        <div className='msgMain'>
        {
            ['How are you?','I am fine','Hellow'].map((v,i)=>(
                <div style={i%2==0 ? {textAlign:'left'} : {textAlign:'right'}} className='msgDiv'>
                <span>{v}</span>
                </div>
            )
            )
        }
        </div>    

         <Grid container>
                 <div className='message-div'>
                    <Grid container>
                        <Grid md={8} sm={7} xs={7} style={{display:'flex',alignItems:'center'}}>
                            <input placeholder='Write your message...' className='msgInput'  />
                        </Grid>
                        <Grid md={4} sm={5} xs={5} style={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                            <AttachFileRoundedIcon className='attach-file-icon'/>
                            <Button variant='contained' style={{borderRadius:'20px'}} className='send-icon-btn'>send<SendIcon className='sendIcon' /></Button>
                        </Grid>
                    </Grid>
                 </div>
         </Grid>
      </div>
      <br></br>
    </div>
    <Footer/>
    </>
  )
}

export default Chat