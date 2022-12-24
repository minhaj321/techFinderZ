import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="footer">
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="footer-mockup-heading"
          >
            <Grid item xl={6} lg={6} md={5} sm={12} xs={12}>
              <div className="footerParaDiv">
              <h1 className="footer-mockup">Mockup Company</h1>
              <p className="footer-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                qui numquam, tempora hic reprehenderit nihil maiores deserunt
                expedita odit. Delectus veritatis illo quo tenetur assumenda
                architecto doloribus amet qui at.
              </p>
              </div>
              <Grid item md={12} className="footer-iconDiv">
                <FacebookOutlinedIcon className="footerIcon"  />
                <TwitterIcon className="footerIcon" />
                <LinkedInIcon className="footerIcon" />
                <YouTubeIcon className="footerIcon" />
                <PhoneOutlinedIcon className="footerIcon" />

              </Grid>
            </Grid>

            <Grid item xl={6} lg={6} md={7} sm={12} xs={12}>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  flexWrap:'wrap'
                }}
              >
                {/* <div className='footer-list-section'> */}
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                  <div className="footerDiv">
                  <h4
                    style={{
                      marginBottom: "30px",
                      color: "white",
                      paddingTop: "30px",
                    }}
                  >
                    Products
                  </h4>
                    <p>
                      {/* <Link to="/home"> */}
                        Home
                      {/* </Link> */}
                    </p>
                    <p>
                      {/* <Link to="/home-we-work"> */}
                        Home We Work
                        {/* </Link> */}
                    </p>
                    <p>
                    About Us
                      {/* <Link to="/about-us">About Us</Link> */}
                    </p>
                    <p>
                    Contact Us
                      {/* <Link to="/contact-us">Contact Us</Link> */}
                    </p>
                    <p
                    onClick={()=>navigate('/under-repair')}
                    >
                    Under Repair
                      {/* <Link to="/under-repair">Under Repair</Link> */}
                    </p>
                    <p
                    onClick={()=>navigate('/my-car')}
                    >
                    My Car
                      {/* <Link to="/my-car">My Car</Link> */}
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <div className="footerDiv">
                  <h4
                    style={{
                      marginBottom: "30px",
                      color: "white",
                      paddingTop: "30px",
                    }}
                  >
                    Service
                  </h4>
                    <p>
                    Dashboard
                      {/* <Link to="/dashboard">Dashboard</Link> */}
                    </p>
                    <p>
                    My Orders
                      {/* <Link to="/dispute-order">My Orders</Link> */}
                    </p>
                    <p>
                    Schedule
                      {/* <Link to="/schedule">Schedule</Link> */}
                    </p>
                    <p>
                    Wallet
                      {/* <Link to="/wallet">Wallet</Link> */}
                    </p>
                    <p>
                    Dispute
                      {/* <Link to="/dispute-order">Dispute</Link> */}
                    </p>
                  </div>

                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <div className="footerDiv">
                  <h4
                    style={{
                      marginBottom: "30px",
                      color: "white",
                      paddingTop: "30px",
                    }}
                  >
                    Research
                  </h4>
                    <p>
                      Transaction
                      {/* <Link to="/transaction-detatils">Transaction</Link> */}
                    </p>
                    <p>
                    Edit Profile
                      {/* <Link to="/edit-profile">Edit Profile</Link> */}
                    </p>
                    <p
                    onClick={()=>{
                      localStorage.removeItem('logged')
                      navigate('/login')
                    }}
                    >
                    Logout
                      {/* <Link to="/logout">Logout</Link> */}
                    </p>
                    <p>
                    Login
                      {/* <Link to="/login">Login</Link> */}
                    </p>
                    <p>
                    Register
                      {/* <Link to="/register">Register</Link> */}
                    </p>
                  </div>

                </Grid>

                {/* </div> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
};
export default Footer;
