import React from "react";
import { Grid, Button } from "@mui/material";
import "../../styles/contactus.css";
import home from "../../Asset/main-home.png";
import TextField from "@mui/material/TextField";
import {
  SectionContactUsHeroWrapperStyled,
  SectionMainHeadingStyled,
  ImageWrapperDivStyled,
  ContactUsFormWrapperStyled,
} from "./styled";
import ContentContainer from "../../Components/Common/Container/Container";
import GetInTouch from "./Form";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
      <SectionContactUsHeroWrapperStyled>
        <ContentContainer>
          <SectionMainHeadingStyled variant="h1">
            Contact us
          </SectionMainHeadingStyled>
        </ContentContainer>
      </SectionContactUsHeroWrapperStyled>

      <ContactUsFormWrapperStyled>
        <ContentContainer>
          <Grid
            container
            alignItems={"center"}
            columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 6, xl: 6 }}
          >
            <Grid
              item
              lg={6}
              xl={6}
              sm={0}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <ImageWrapperDivStyled>
                <img
                  src="/Assets/contact-us/smiling-mechanic.png"
                  alt="smiling mechanic"
                  width={"100%"}
                  height={"100%"}
                />
              </ImageWrapperDivStyled>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <GetInTouch />
            </Grid>
          </Grid>
        </ContentContainer>
      </ContactUsFormWrapperStyled>
      <Footer/>
    </>
  );
};
export default ContactUs;
