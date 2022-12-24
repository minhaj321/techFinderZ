import React from "react";
import { Grid } from "@mui/material";
import "../../styles/aboutus.css";
import MechanicCard from "../../Components/Card/MechanicCard";
import ContentContainer from "../../Components/Common/Container/Container";
import './styles.css';
import {
  SectionHeadingMainStyled,
  AboutUsHeroWrapperStyled,
  FlexContainerHeroStyled,
  SubtitleTextStyled,
  FlexContainerInfoSectionStyled,
  ParaTextStyled,
  SectionMeetMechanicWrapperStyled,
  MeetMechanicHeadingStyled,
  VideoGuideSectionInfoStyled,
  VideoSectionParaStyled,
  VideoWrapperStyled,
  VideoContainerStyled,
} from "./styled";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <div className="heroDiv">
        <ContentContainer>
          <FlexContainerHeroStyled>
            <SectionHeadingMainStyled variant="h1">
              About Us
            </SectionHeadingMainStyled>

            <SubtitleTextStyled component="p">
              <div className="aboutP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </SubtitleTextStyled>
          </FlexContainerHeroStyled>
        </ContentContainer>
      </div>

      <ContentContainer>
        <Grid
          container
          alignItems={"center"}
          sx={{ marginBottom: "146px" }}
          rowSpacing={10}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <FlexContainerInfoSectionStyled>
              <SectionHeadingMainStyled
                variant="h1"
                sx={{ color: (theme) => theme.palette.common.black }}
              >
                Our Mission
              </SectionHeadingMainStyled>

              <ParaTextStyled component="p">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </ParaTextStyled>
            </FlexContainerInfoSectionStyled>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src={"/Assets/about-us/fixing-car.png"}
                alt="car fixing"
                width="100%"
                height="100%"
                style={{ borderRadius: "0px" }}
              />
            </Grid>

            <Grid item container xs={6} sm={6} md={6} lg={6} xl={6} spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <img
                  src={"/Assets/about-us/car-service.png"}
                  alt="car fixing"
                  width="100%"
                  height="100%"
                    style={{ borderRadius: "0px" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <img
                  src={"/Assets/about-us/tire-change.png"}
                  alt="car fixing"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "0px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>

      <SectionMeetMechanicWrapperStyled>
        <ContentContainer>
          <MeetMechanicHeadingStyled variant="h2">
            Meet our mechanic
          </MeetMechanicHeadingStyled>

          <Grid container spacing={6} justifyContent="center">
            {["", "true", ""].map((item, index) => {
              return (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                  <MechanicCard active={item} />
                </Grid>
              );
            })}
          </Grid>
        </ContentContainer>
      </SectionMeetMechanicWrapperStyled>

      <section>
        <VideoGuideSectionInfoStyled>
          <ContentContainer>
            <FlexContainerHeroStyled>
              <SectionHeadingMainStyled
                variant="h1"
                sx={{ color: (theme) => theme.palette.common.black }}
              >
                Video Guide
              </SectionHeadingMainStyled>

              <VideoSectionParaStyled variant="p">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </VideoSectionParaStyled>
            </FlexContainerHeroStyled>
          </ContentContainer>
        </VideoGuideSectionInfoStyled>

        <VideoWrapperStyled>
          <ContentContainer>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <VideoContainerStyled />
            </div>
          </ContentContainer>
        </VideoWrapperStyled>
      </section>
<Footer/>
    </>
  );
};
export default AboutUs;
