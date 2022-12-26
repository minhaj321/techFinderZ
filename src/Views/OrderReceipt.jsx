import { Grid,Button } from '@mui/material';
import React from 'react';
import '../styles/OrderReceipt.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useState } from 'react';
import PaymentModal from '../Components/Modal/PaymentModal';

const OrderReceipt = () =>{

    const [show,setShow] = useState(false)

    function createData(description,price,quantity,total) {
        return {description,price,quantity,total };
      }
      
      const rows = [
        createData('HeadLight', 500, 1, 500),
        createData( 'Brakes', 500, 1, 500),
        createData( 'AC', 500, 1,500),
        createData( 'EngineWork',500, 1, 500),
        createData( 'Brakes', 500, 1, 500),
        createData('EngineWork',500 , 1,500),
      ];

      const clickHandler=()=>{}

    return(
      <>
      <Navbar/>
      {
        show &&
        <PaymentModal show={show} setShow={setShow} wallet={false} 
        clickHandler={clickHandler}
        />
      }
     <div className='order-receipt'>
         <div className='order-receipt-div'>
         <Grid item md={12}>
                   <h4 style={{textAlign:'center',paddingTop:'20px'}}>Order Receipt</h4>
               </Grid>
          
         <Grid item md={12}>
<TableContainer component={Paper} className='tableMain'>
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className='orderReciptCell title'>Invoice</TableCell>
            <TableCell align="center" className='title'>Price</TableCell>
            <TableCell align="center" className='title'>Quantity</TableCell>
            <TableCell align="center" className='orderReciptCell2 title'>Total</TableCell>
            
          </TableRow> 
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' className='orderReciptCell' scope="row">
                {row.description}
              </TableCell>
              <TableCell align="center" >{row.price}</TableCell>
              <TableCell align="center" >{row.quantity}</TableCell>
              <TableCell align="center" className='orderReciptCell2'>{row.total}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
             <Grid container>
               <Grid item md={12} xs={12}>
                   <h4 className='total-heading2'>Total: $567</h4>
               </Grid>
           </Grid>
           <Grid container>
               <Grid item md={12} xs={12} className='btn-pay' >
                  <Button 
                  onClick={()=>setShow(true)}
                  variant='contained' style={{backgroundColor:'#8F87FF',color:'#fff'}}className='btn-pay1'>Pay Now</Button>
               </Grid>
           </Grid>
          
         </div>
     </div>
     <Footer/>
      </>
  
    )
}
export default OrderReceipt;