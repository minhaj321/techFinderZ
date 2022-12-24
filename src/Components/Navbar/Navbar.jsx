import React, { useState,useEffect } from "react";
import coMakeLogo from "../../Asset/comake-logo.png";
import ButtonStyled from "../Common/Button/Button";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import logo from "../../Asset/logo.png";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ContentContainer from "../Common/Container/Container";
import NavbarModal from "../Modal/NavbarModal";
import { useNavigate } from "react-router-dom";
import {
  NavbarWrapperStyled,
  NavbarContainerStyled,
  NavigateOptsStyled,
  BtnsFlexContainer,
  OptionTextStyled,
  ImageWrapperStyled,
} from "./styled";
import MobileNavbar from "./MobileNavbar";
import NavbarAvatar from './../../Asset/loggedIn.jpg'
import Popover from '@mui/material/Popover';

const Navbar = () => {
  const navigate = useNavigate();
  let theme = useTheme();
  let ifMobile = useMediaQuery(theme.breakpoints.down("md"));

  const user = localStorage.getItem("email");
  const [show, setShow] = useState(false);
  const [logged, setLogged] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(()=>{
  var isLoggedId = localStorage.getItem('logged')
    setLogged(Boolean(isLoggedId))
  },[])

  const navigateOptions = [
    ["Home", "/home"],
    ["How we work", "/how-we-work"],
    ["About us", "/about-us"],
    ["Contact us", "/contact-us"],
  ];


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <NavbarWrapperStyled>
      <div style={logged ? {paddingRight:10,background:'#000'} : {paddingRight:10}}>
        <NavbarContainerStyled>
          <ImageWrapperStyled>
            <img src={logo} alt="comake-logo" width="100%" height="100%" />
          </ImageWrapperStyled>

          {ifMobile ? (
            <MobileNavbar />
          ) : (
            <>
              <NavigateOptsStyled>
                {navigateOptions.map((item, index) => {
                  return (
                    <li key={index} >
                      <Link to={item[1]} style={{ textDecoration: "none"}}>
                        {" "}
                        <OptionTextStyled variant="navOptions"
                        style={logged ? {color:'#fff'} : {}}>
                          {item[0]}
                        </OptionTextStyled>{" "}
                      </Link>
                    </li>
                  );
                })}
              </NavigateOptsStyled>
              <BtnsFlexContainer>
              {
  !logged &&
                <ButtonStyled
                onClick={()=>navigate("/login")}
                  variant="text"
                  size="180"
                  height="66"
                  sx={{
                    backgroundColor: (theme) => theme.palette.common.white,
                    color: (theme) => theme.palette.common.black,
                    border: "1px solid #000000",
                    padding: "10px 30px",
                  }}
                  startIcon={<PersonIcon sx={{ fontSize: "32px" }} />}
                >
                  Login
                </ButtonStyled>
            }
              {
  !logged &&
            <ButtonStyled
                onClick={()=>navigate("/register")}
                variant="contained"
                  size="180"
                  height="66"
                  color="common"
                  sx={{
                    backgroundColor: (theme) => theme.palette.common.black,
                    color: (theme) => theme.palette.common.white,
                    padding: "10px 36px",
                  }}
                >
                  Sign up
                </ButtonStyled>
            }
            </BtnsFlexContainer>
{
  logged &&
  <div className="loggedInNavDiv">
    <span>Emma Watson</span>
    <img 
    aria-describedby={id}
    onClick={handleClick}
    src={NavbarAvatar} alt='img' className="navbarAvatar" />
  </div>
}
</>
          )}
        </NavbarContainerStyled>
      </div>
      <Popover
        id={id}
        open={open}
        style={{marginLeft:'-0.5vw'}}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <p className="popoverTag"
        onClick={()=>{
         localStorage.removeItem('logged')
          navigate('/login')
        }
        }
        >Logout</p>
        <p className="popoverTag"
        onClick={()=>navigate('/personal-information')}
        >Profile</p>
      </Popover>
    </NavbarWrapperStyled>
  );
};
export default Navbar;
