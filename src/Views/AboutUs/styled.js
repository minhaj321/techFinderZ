import { styled, Typography } from "@mui/material";

const SectionHeadingMainStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.white,
  fontFamily: "Raleway",
  fontWeight: 600,
  textTransform: "capitalize",
  textAlign: "center",
  letterSpacing: "0.35px",
  lineHeight: "72px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "normal !important",
  },
  //   paddingTop: "60px",
}));

const SubtitleTextStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.white,
  font: "normal normal medium 18px/27px Raleway",
  textAlign: "center",
  letterSpacing: "0.36px",
  maxWidth: "560px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "20px",
    fontSize: "14px",
    maxWidth: "100%",
  },
  //   paddingTop: "60px",
}));

const ParaTextStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: "#737373",
  fontFamily: "Raleway",
  textAlign: "center",
  margin: "0px",
  paddding: "0px",

  maxWidth: "500px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
  //   paddingTop: "60px",
}));

const FlexContainerHeroStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  display: "flex",
  flexDirection: "column",
  gap: "26px",
  [theme.breakpoints.down("sm")]: {
    gap: "18px",
  },
  //   paddingTop: "60px",
}));

const FlexContainerInfoSectionStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "70px",
  [theme.breakpoints.down("sm")]: {
    gap: "32px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "42px",
  },
  //   paddingTop: "60px",
}));

const AboutUsHeroWrapperStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  objectFit: "cover",
  margin: "0px",
  width: "100% !important",
  backgroundColor: theme.palette.common.black,

  // overflow: "hidden",
  minHeight: "600px !important",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "120px",
}));

const SectionMeetMechanicWrapperStyled = styled("section")(
  ({ theme, ...props }) => ({
    // padding: "14px 60px",
    padding: "80px 100px 116px 100px",
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "80px 60px 116px 60px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "80px 0px 116px 0px",
    },
  })
);

const MeetMechanicHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.black,
  fontFamily: "Poppins",
  fontWeight: "normal",
  textTransform: "uppercase",
  marginBottom: "60px",

  textAlign: "center",
}));

const VideoGuideSectionInfoStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  backgroundColor: theme.palette.common.white,
  padding: "80px 0px 55px 0px",
}));

const VideoSectionParaStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",

  textAlign: "center",
  fontFamily: "Raleway",
  fontWeight: "normal",
  color: theme.palette.common.black,
}));

const VideoWrapperStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",

  padding: "150px 0px 150px 0px",
  width: "100%",
  backgroundColor: "#F0F0F0",
}));
const VideoContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",

  maxWidth: "1200px",
  backgroundColor: theme.palette.common.black,
  maxHeight: "638px",
  width: "1200px",
  height: "638px",
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
};
