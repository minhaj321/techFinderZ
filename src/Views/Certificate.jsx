import { Grid,Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import '../styles/Certificate.css'
import CertificateModal from './../Components/CertificateModal/CertificateModal.js';


const Certificate = () => {

const [open,setOpen] = useState(false);

    return (
    <div>
        <div className='titleDiv'>
           <Grid item container lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
               <Grid item lg={4} md={4} sm={4} xs={4}>
                   <h5 style={{textAlign:'left'}} className='certificate-name'>Certificate Name</h5>
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={4}>
                   <h5 style={{textAlign:'center'}} className='date-name'>Date</h5>
                   </Grid>
                   <Grid item lg={4} md={4} sm={4} xs={4}>
                   <h5 style={{textAlign:'right'}} className='action-name'>Action</h5>
                   </Grid>
               </Grid>
               </div>
           <div className='certificate-div'>
{
    [1,2,3,4,5,6].map((v,i)=>(
           <Grid key={i} item container lg={12} md={12} sm={12} xs={12}>
                     <Grid lg={4} md={4} sm={4} xs={4} className='centerized mechanical-name' >
                         <h5 style={{textAlign:'left'}} >Mechanical Diploma</h5>
                         </Grid>
                         <Grid lg={4} md={4} sm={4} xs={4} className='centerized' style={{textAlign:'center'}} >
                         <h5 className='date-name1'>02-04-2010</h5>
                         </Grid>
                         <Grid lg={4} md={4} sm={4} xs={4} className='centerized' style={{textAlign:'right',display:'flex',justifyContent:'flex-end',alignItems:"center"}}>
                         <Button variant='contained' style={{width:'120px',backgroundColor:'black',color:'#fff'}} 
                         onClick={()=>setOpen(true)}
                         className='btn-view'>View</Button>
                         </Grid>
                     <Grid item lg={12} md={12} sm={12} xs={12} className='hr-certificate'>
                         <hr/>
                         </Grid>
                     </Grid>
    ))
}    
                    
                    
                    
              
               
           </div>
           <CertificateModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default Certificate