import { styled, Typography } from "@mui/material";

const InfoCardWrapperStyled = styled("div")(({ theme, ...props }) => ({
  maxWidth: "320px",
  maxHeight: "320px",
  backgroundColor: theme.palette.common.white,
  padding: "34px 52px 38px 52px",
  transition: "all 0.3s",

  [theme.breakpoints.down("sm")]: {
    maxHeight: "100%",
  },

  "&:hover": {
    boxShadow: "8px 16px 32px #0000001A",
  },
}));

const IconWrapperStyled = styled("div")(({ theme, ...props }) => ({
  maxWidth: "80px",
  margin: "0 auto",
  marginBottom: "20px",
}));

const SectionHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,
  fontSize: "18px",
  textTransform: "capitalize",
  textAlign: "center",

  // marginTop: "32px",
  fontFamily: "Poppins",
  marginBottom: "14px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const InformationTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,

  // marginTop: "32px",
  fontFamily: "Poppins",
  fontWeight: 400,
  textAlign: "center",
  margin: "0 auto",
  maxWidth: "215px",
}));

export {
  InfoCardWrapperStyled,
  IconWrapperStyled,
  SectionHeadingStyled,
  InformationTextStyled,
};
