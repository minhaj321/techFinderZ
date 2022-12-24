import React from "react";
import "../../styles/home.css";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Slider,
  Box,
} from "@mui/material";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
// import { Carousel, CarouselItem } from "react-bootstrap";
// import MechanicCard from "../../Components/Card/MechanicCard";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import Technician from "../../Asset/image-4.png";
import { useNavigate } from "react-router-dom";
import TopRated from "./TopRated";
import Nearby from "./Nearby";
import NewlyJoinedTech from "./NewlyJoinedTech.js";
import ContentContainer from "../../Components/Common/Container/Container";
import WhyChooseUs from "./WhyChooseUs";
import HowWeWork from "./HowWeWork";
import GetInTouch from "./GetInTouch";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';

const Home = () => {
  const navigate = useNavigate();
  const marks = [
    {
      value: 1,
      label: "20km",
    },
  ];

  function valuetext(value) {
    return `${value}km`;
  }

  return (
    <div>
      <Navbar/>
      <div className="home-page">
      
        <div className="homeSelectMain">
          <div className="home-page-div">
            <Grid container>
              <Grid
                item
                container
                alignItems={"center"}
                justifyContent={"center"}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={12}
                >
                  <div className="TextField-without-border-radius">
                    <TextField
                      label="Enter Your Location"
                      variant="outlined"
                      style={{
                        width: "100%",
                        borderRadius: "0px !important",
                      }}
                    />
                    <LocationOnOutlinedIcon className="fieldIcon" />
                  </div>
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                >
                  <div className="TextField-without-border-radius">
                    <TextField
                      id="outlined-basic"
                      label="Enter Your Vehicle"
                      variant="outlined"
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: "0px !important",
                      }}
                    />
                    <DirectionsCarOutlinedIcon className="fieldIcon" />
                  </div>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={12}
                >
                  <div className="TextField-without-border-radius">
                    <TextField
                      id="outlined-basic"
                      label="Select Your City"
                      variant="outlined"
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: "0px !important",
                      }}
                    />
                    <LocationCityOutlinedIcon className="fieldIcon" />
                  </div>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={10}>
                  <Button
                  className='searchBtn'
                  onClick={()=>navigate("/search-result")}
                    variant="contained"
                    color="common"
                    sx={{
                      width: "100%",
                      height: "53px",
                      backgroundColor: (theme) => theme.palette.common.black,
                      color: (theme) => theme.palette.common.white,
                      borderRadius: "0px",
                    }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="slider">
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h5 style={{ padding: "10px 15px" }}>Distace Radius</h5>
                <Box
                  sx={{
                    padding: "10px 20px",
                    width: {
                      xs: "80%",
                      sm: "100%",
                    },
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                    style={{
                      // marginLeft: "40px",
                      color: "black",
                      // marginTop: "-10px",
                      // padding: "10px 10px",
                      // width: "100%",
                      // margin: "0 auto",
                    }}
                    //   className="slider-range"
                  />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      
      </div>

      <TopRated />
      <Nearby />
      <NewlyJoinedTech />
      <WhyChooseUs />
      <HowWeWork />
      <GetInTouch />
      <Footer/>
    </div>
  );
};
export default Home;
