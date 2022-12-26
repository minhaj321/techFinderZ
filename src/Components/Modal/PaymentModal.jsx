import { Modal, CloseButton } from 'react-bootstrap';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { Grid, Button,MenuItem,FormControl,InputLabel,Select} from '@mui/material';
import Stripe from './../../Asset/stripe.png';
import Paypal from './../../Asset/paypal.png';
import Cash from './../../Asset/cash.png';
import './../../styles/PaymentModal.css';
import CommentModal from '../CommentModal/CommentModal';

const PaymentModal = ({show,setShow,wallet,clickHandler}) => {

    const [open,setOpen] = useState(false)

    const [paymentTypes,setPaymentTypes] = useState(wallet ? 
        [
            {icon : Paypal,title :'Paypal'},
            {icon : Stripe,title :'Stripe'},
        ]
        : 
        [
        {icon : Paypal,title :'Paypal'},
        {icon : Stripe,title :'Stripe'},
        {icon : Cash,title :'Cash'}
    ])

    return (
        <>
     <CommentModal  open={open} setOpen={setOpen} />

            <Modal
                show={show}
                onHide={()=>setShow(false)}
                backdrop="static"
                keyboard={false}
            >

                <CloseButton onClick={()=>setShow(false)} style={{ marginLeft: 'auto', paddingRight: '20px', paddingTop: '20px' }} />
                <Modal.Body>
                    <Grid container>
                        <Grid item xs={12}>
                            <h5 style={{ textAlign: 'center' }}>Please Select Payment Method</h5>
                        </Grid>
                    </Grid>

{
    paymentTypes.map((v,i)=>(
        <>
                    <Grid container key={i} className='modalTypes'
                    onClick={()=>clickHandler()}
                    >
                        <Grid item xs={11}>
                            <img alt={v.title} src={v.icon} className='modalImages' />
                            <span className='modalTitle'>
                            {v.title}
                            </span>
                        </Grid>
                        <Grid item xs={1} style={{display:'flex',justifyContent:'flex-end'}}>
                            <span className='forwardArrow'>
                                {'>'}
                            </span>
                            </Grid>
                    </Grid>
        {
            i!=2 &&
            <hr className='modalHr' />
        }
                    </>
    ))
}


                    <Grid container>
                    <Grid item xs={12} style={{display:'flex',flexDirection:'row',marginTop:'60px'}}>
                        <Grid item xs={6} className='btnMain'>
                            <Button 
                            className='modalBtn'
                            onClick={()=>{
                                setShow(false)
                            }
                            }
                            variant='outlined' style={{width:'200px',color:'black'}}>Cancel</Button>
                            </Grid>
                            <Grid item xs={6} className='btnMain'>
                            <Button 
                            onClick={()=>{
                                if(wallet){
                                    setShow(false)
                                }else{
                                    setOpen(true)
                                }
                            }
                            }
                            variant='outlined' style={{width:'200px',backgroundColor:'#3181C6',color:'white'}} className='modalBtn'>Next</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Modal.Body>


            </Modal>
        </>
    );
}

export default PaymentModal;