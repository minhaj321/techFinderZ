import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './DashboardLayout.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarMenuList from './../SidebarMenuList/SidebarMenuList.js';

const DashboardLayout = ({children,selected}) => {

    const navigate = useNavigate()

    const [lstArray,setLstArray] = useState([
    {icon:<BadgeIcon/>,name:'Personal Information',to:()=>navigate('/')},
    {icon:<WatchLaterOutlinedIcon/> ,name:'Schedule',to:()=>navigate('/')},
    {icon:<LocalMallIcon/> ,name:'My Orders',to:()=>navigate('/')},
    {icon:<AccountBalanceWalletIcon/> ,name:'Wallet',to:()=>navigate('/')},
    {icon:<SettingsSharpIcon/> ,name:'Dispute',to:()=>navigate('/')}
])
const [open, setOpen] = useState(false);


  return (
    <div>
        <Navbar/>
    <SidebarMenuList open={open} setOpen={setOpen} 
    />
    <div className='DashLayoutMain'>
        <div className='sidebar'>
        <MenuIcon className='sidebarMenuIcon' 
        onClick={()=>setOpen(true)}
        />
    {
        lstArray.map((v,i)=>(
                <div key={i} className='sidebarSubDiv'>
                    <div className={selected==v.name ? 'sidebarCatDiv sidebarCatDivBlack' : 'sidebarCatDiv'}>
                        {v.icon}
                        <p>{v.name}</p>
                    </div>
                </div>
        ))
    }

        </div>
        <div className='dashLayoutSecondDiv'>
            {children}
        </div>
    </div>

        <Footer/>
    </div>
  )
}

export default DashboardLayout