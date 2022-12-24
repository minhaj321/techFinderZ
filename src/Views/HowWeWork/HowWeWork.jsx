import React from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

import {
  SectionHeadingMainStyled,
  HowWeWorkHeroWrapperStyled,
  SecondarySectionWrapperStyled,
  HowWeWorkCardWrapper,
  CardHeadingStyled,
  DividerStyled,
  InfoParasFlexContainer,
  ParasTextStyled,
} from "./styled";
import ContentContainer from "../../Components/Common/Container/Container";
import "../../styles/HomeWeWork.css";
import Footer from './../../Components/Footer/Footer';
import Navbar from "./../../Components/Navbar/Navbar";

const HomeWeWork = () => {
  return (
    <div>
      <Navbar/>
      <HowWeWorkHeroWrapperStyled>
        <ContentContainer>
          <SectionHeadingMainStyled variant="h1">
            How We Work
          </SectionHeadingMainStyled>
        </ContentContainer>
      </HowWeWorkHeroWrapperStyled>

      <SecondarySectionWrapperStyled>
        <ContentContainer>
          <Grid container>
            <Grid item xs={12} sm={10} md={8} lg={5} xl={5}>
              <HowWeWorkCardWrapper>
                <div>
                  <CardHeadingStyled variant="h2">
                    How we Work
                  </CardHeadingStyled>
                  <DividerStyled />
                </div>

                <InfoParasFlexContainer>
                  <ParasTextStyled component="p">
                    It is a long established fact that a reader will be
                    distracted d by the readable content of a page when looking
                    at its layout.
                  </ParasTextStyled>

                  <ParasTextStyled component="p">
                    It is a long established fact that a reader will be
                    distracted d by the readable content of a page when looking
                    at its layout.
                  </ParasTextStyled>
                </InfoParasFlexContainer>
              </HowWeWorkCardWrapper>
            </Grid>
          </Grid>
        </ContentContainer>
      </SecondarySectionWrapperStyled>
      <Footer/>
    </div>
  );
};
export default HomeWeWork;
