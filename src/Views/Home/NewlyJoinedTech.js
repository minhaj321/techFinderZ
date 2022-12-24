import React from "react";
import { Carousel } from "react-bootstrap";
import MechanicCard from "../../Components/Card/MechanicCard";
import { useMediaQuery, useTheme, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainSectionHeadingStyled, ButtonViewMore } from "./styled";
import ContentContainer from "../../Components/Common/Container/Container";

function NewlyJoined() {
  const navigate = useNavigate();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.down("lg"));
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(desktop, tablet, mobile);

  return (
    <>
      {" "}
      <div style={{ marginTop: "70px" }}>
        <MainSectionHeadingStyled variant="h1" textAlign={"center"}
        style={{cursor:'pointer'}}
        onClick={()=>navigate('/newly-joined')}>
          Newly Joined
        </MainSectionHeadingStyled>
      </div>
      <div className="carousal-img">
        <div
          style={{
            maxWidth: "1700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel
            slideshowSpeed={7000}
            wrap={false}
            autoplay
            indicators={false}
            //   pauseOnVisibility={true}
          >
            <Carousel.Item>
              <ContentContainer>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  //   wrap="nowrap"
                >
                  {desktop &&
                    !tablet &&
                    !mobile &&
                    ["h", "i", "j"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={4}
                          md={5}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {tablet &&
                    !desktop &&
                    !mobile &&
                    ["h", "i"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={4}
                          md={5}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {mobile &&
                    tablet &&
                    !desktop &&
                    ["h"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={11}
                          sm={11}
                          md={6}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {/* <MechanicCard /> */}
                </Grid>
                {/* <Grid container>
                      <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', marginTop: '150px'}} className='carousel-home-section'>
                      <Grid item lg={4} md={6} sm={12} xs={12} >
                      <MechanicCard />
                      </Grid>
                      <Grid item lg={4} md={6} sm={12} xs={12}   className='carousel-home-section1'>
                      <MechanicCard />
                      </Grid>
                      <Grid item lg={4} md={6} sm={12} xs={12}  >
                      <MechanicCard />
                      </Grid>
                      </Grid>
                    </Grid> */}
              </ContentContainer>
            </Carousel.Item>
            <Carousel.Item>
              <ContentContainer>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  //   wrap="nowrap"
                >
                  {desktop &&
                    !tablet &&
                    !mobile &&
                    ["h", "i", "j"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={4}
                          md={5}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {tablet &&
                    !desktop &&
                    !mobile &&
                    ["h", "i"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          sm={6}
                          md={5}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {mobile &&
                    tablet &&
                    !desktop &&
                    ["h"].map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={11}
                          sm={8}
                          md={6}
                          lg={4}
                          xl={4}
                          key={index}
                        >
                          <MechanicCard />
                        </Grid>
                      );
                    })}
                  {/* <MechanicCard /> */}
                </Grid>
              </ContentContainer>
              {/* <Grid container>
                      <Grid item lg={12} md={12} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'row', marginTop: '150px'}} className='carousel-home-section'>
                          <Grid item lg={4} md={6} sm={12} xs={12} >
                              <MechanicCard />
                          </Grid>
                          <Grid item lg={4} md={6} sm={12} xs={12}   className='carousel-home-section1'>
                              <MechanicCard />
                          </Grid>
                          <Grid item lg={4} md={6} sm={12} xs={12}  >
                              <MechanicCard />
                          </Grid>
                      </Grid>
                  </Grid> */}
            </Carousel.Item>
          </Carousel>

          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            <ButtonViewMore
              variant="contained"
              onClick={() => navigate("/top-rated")}
              sx={{
                fontWeight: 400,
              }}
            >
              View More
            </ButtonViewMore>
          </div> */}
        </div>{" "}
      </div>
    </>
  );
}

export default NewlyJoined;
