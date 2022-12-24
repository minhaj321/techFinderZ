import { styled, Typography } from "@mui/material";

const SectionHeadingMainStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.white,
  fontFamily: "Poppins",
  fontWeight: 500,
  textTransform: "uppercase",
  textAlign: "center",
  lineHeight: "normal !important",
  //   paddingTop: "60px",
}));

const HowWeWorkHeroWrapperStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  objectFit: "cover",
  margin: "0px",
  width: "100% !important",
  backgroundImage: `url('/Assets/how-we-work/hero-image.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // overflow: "hidden",
  minHeight: "780px !important",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "100px",
}));

const SecondarySectionWrapperStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  objectFit: "cover",
  margin: "0px",
  width: "100% !important",
  backgroundImage: `url('/Assets/how-we-work/car-fixing.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // overflow: "hidden",
  padding: "90px 0px",
  marginBottom: "100px",
}));

const HowWeWorkCardWrapper = styled("div")(({ theme, ...props }) => ({
  padding: "64px 54px 128px 54px",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    padding: "40px 44px 80px 44px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "30px 24px 60px 24px",
  },
}));

const CardHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.black,
  fontFamily: "Poppins",
  fontWeight: 500,
  textTransform: "uppercase",
  textAlign: "left",
  lineHeight: "normal !important",
  letterSpacing: "0px !important",
  marginBottom: "16px",
}));

const DividerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  width: "40%",
  borderTop: "2px solid #D4D4D4",
  height: "0px",
}));

const InfoParasFlexContainer = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  marginTop: "70px",

  display: "flex",
  flexDirection: "column",
  gap: "70px",
  alignItems: "flex-start",

  [theme.breakpoints.down("sm")]: {
    gap: "34px",
    marginTop: "34px",
  },
}));

const ParasTextStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  maxWidth: "100%",
  font: "normal normal 300 22px/50px Poppins",
  letterSpacing: "0px",
  color: theme.palette.common.black,
  [theme.breakpoints.down("md")]: {
    font: "normal normal 300 22px/40px Poppins",
  },

  [theme.breakpoints.down("sm")]: {
    font: "normal normal 300 16px/26px Poppins",
    maxWidth: "100%",
  },
}));

// object-fit: cover;
// margin: 0;
// width: 100% !important;
// background-image: url('../Asset/engine.jpg') ;
// background-repeat: no-repeat;
// background-size: cover;
// overflow: hidden;
// margin-top: 40px;
// margin-bottom: 40px;

export {
  SectionHeadingMainStyled,
  HowWeWorkHeroWrapperStyled,
  SecondarySectionWrapperStyled,
  HowWeWorkCardWrapper,
  CardHeadingStyled,
  DividerStyled,
  InfoParasFlexContainer,
  ParasTextStyled,
};
