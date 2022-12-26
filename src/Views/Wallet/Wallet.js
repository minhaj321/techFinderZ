import React,{useState} from 'react'
import DashboardLayout from './../../Components/DashboardLayout/DashboardLayout.js';
import { Grid } from '@mui/material';
import './Wallet.css';
import CalImg from './../../Asset/calendar.png';
import PaymentModal from './../../Components/Modal/PaymentModal';
import Pagination from '@mui/material/Pagination';

const Wallet = () => {

    const [show,setShow] = useState(false)
    const [open,setOpen] = useState(false)

    const clickHandler=()=>{
        setOpen(true)
    }

    return (
    <div>
              {
        show &&
        <PaymentModal show={show} setShow={setShow} wallet={true} 
        clickHandler={clickHandler}
        />
      }

        <DashboardLayout selected={'Wallet'}>
            <div className='walletMain'>
                <div className='walletFirstDiv'>
                    <div className='walletPaypalDiv'>
                        <span>P</span>
                        <span>PayPal</span>
                        <button className='paypalSetupBtn'
                        onClick={()=>setShow(true)}
                        >
                            Setup
                        </button>
                    </div>
                    <div className='walletStripeDiv'>
                    <span>$</span>
                        <span>Stripe</span>
                        <button className='paypalSetupBtn'
                        onClick={()=>setShow(true)}
                        >
                            Setup
                        </button>
                    </div>
                </div>
                <div className='walletSecondDiv'>
                    <span>Transaction History</span>
{
    !open &&
                    <img alt='img' src={CalImg} />
}
{
    !open &&
                    <span>You don't have Transaction History</span>
}
{
    open &&
    <div className='walletDataMainDiv'>
        <Grid container mt={2}>
            <Grid xs={1}></Grid>
            <Grid md={2}>Trans ID</Grid>
            <Grid md={2}>Invoice</Grid>
            <Grid md={2}>Date</Grid>
            <Grid md={2}>Amount</Grid>
            <Grid md={1}>Payment Method</Grid>
            <Grid md={2}>Status</Grid>
        </Grid>
    </div>
}
                    </div>
            </div>
        </DashboardLayout>
    </div>
  )
}

export default Wallet