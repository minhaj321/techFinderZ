import React from "react";
import {
  Grid,
  styled,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { MainSectionHeadingStyled } from "./styled";
import { SectionHeadingStyled } from "../../Components/Common/InfoCard/styled";
import InfoCard from "../../Components/Common/InfoCard/InfoCard";
import ContentContainer from "../../Components/Common/Container/Container";

const SectionHWIStyled = styled("section")(({ theme, ...props }) => ({
  maxHeight: "1579px",
  width: "100%",
  backgroundColor: theme.palette.common.black,
  padding: "142px 0px 284px 0px",

  [theme.breakpoints.down("sm")]: {
    maxHeight: "100%",
  },
}));

const HeadingSecondary = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.white,
  fontSize: "18px",
  textTransform: "normal",
  textAlign: "center",

  // marginTop: "32px",
  fontFamily: "Poppins",
  marginBottom: "80px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const data = {
  cardsData: [
    {
      headingText: "Enter Your Location",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/placeholder (1).png",
    },
    {
      headingText: "Enter Your Vehicle",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/car (1).png",
    },
    {
      headingText: "Book Your Mechanic",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/mechanic.png",
    },
    {
      headingText: "Easy Scheduling",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/calendar.png",
    },
  ],
};

function HowWeWork() {
  return (
    <SectionHWIStyled>
        <MainSectionHeadingStyled
          variant="h1"
          style={{
            textAlign: "center",
            marginBottom: "34px",
            color: "white",
          }}
        >
          HOW WE WORK
        </MainSectionHeadingStyled>

        <HeadingSecondary component="h3">As a Customer</HeadingSecondary>

        <Grid
          container
          justifyContent={"center"}
          rowSpacing={4}
          //   columnSpacing={{ lg: 0, xl: 0, md: 2, sm: 2, xs: 0 }}
          spacing={{ md: 2, lg: 0.1, xl: 0.1 }}
          style={{ margin: "0px" }}
        >
          {data.cardsData.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <InfoCard
                    key={index}
                    imgSrc={item.imgSrc}
                    headingText={item.headingText}
                    paraText={item.paraText}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
    </SectionHWIStyled>
  );
}

export default HowWeWork;
