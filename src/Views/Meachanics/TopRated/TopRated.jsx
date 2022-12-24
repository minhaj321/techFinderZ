import { Grid } from "@mui/material";
import React from "react";
import MechanicCard from "../../../Components/Card/MechanicCard";
import {
  SectionHeadingMainStyled,
  SectionStyled as SectionTopRatedStyled,
} from "../styled";
import ContentContainer from "../../../Components/Common/Container/Container";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

const TopRated = () => {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <ContentContainer>
        <SectionHeadingMainStyled variant="h1">
          Top Rated
        </SectionHeadingMainStyled>

        <SectionTopRatedStyled>
          <Grid
            container
            spacing={8}
            justifyContent="center"
            //   wrap="nowrap"
          >
            {[
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
              "",
              false,
              true,
            ].map((item, index) => {
              return (
                <Grid item xs={11} sm={6} md={6} lg={4} xl={4} key={index}>
                  <MechanicCard active={item} />
                </Grid>
              );
            })}
          </Grid>
        </SectionTopRatedStyled>
      </ContentContainer>
    </div>
    <Footer/>
    </>
  );
};
export default TopRated;
