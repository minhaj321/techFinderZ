import { styled, Typography, TextField } from "@mui/material";
import ButtonStyled from "../../../Components/Common/Button/Button";

const SectionWrapperStyled = styled("section")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  objectFit: "cover",
  margin: "0px",
  width: "100% !important",
  backgroundImage: `url('/Assets/common-images/bald-mechanic-car-fixing.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: '100% 100%',
  minHeight:'100vh',
  // padding: "0p 0px",
  display: "flex",
  alignItems:'center',
  justifyContent: "center",
}));

const CardContainerOtpStyled = styled("div")(({ theme, ...props }) => ({
  padding: "70px 40px 70px 40px",
  borderRadius: "30px",
  maxWidth: "580px",
  minHeight:'65vh',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px 0px 20px",
    maxWidth: "100%",
  },
}));

const CardHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  fontFamily: "Open Sans",
  color: "#03014C",
  fontWeight: 700,
  textTransform: "none",
}));

const CardSubtitleStyled = styled(Typography)(({ theme, ...props }) => ({
  fontFamily: "Open Sans",
  color: "#03014C",
  fontWeight: 400,
  textTransform: "none",
}));

const HeadingSubtitleFlexContainerStyled = styled("div")(
  ({ theme, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "22px",

    [theme.breakpoints.down("sm")]: {
      gap: "16px",
    },
  })
);
const ButtonVerifyStyled = styled(ButtonStyled)(({ theme, ...props }) => ({
  padding: "16px 8px",
  color: theme.palette.common.white,
  maxWidth: "380px",
  backgroundColor: "#169ACF",
  borderRadius: "8px",
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: "#169ACF",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "14px 5px",
  },
}));

export {
  SectionWrapperStyled,
  CardContainerOtpStyled,
  CardHeadingStyled,
  CardSubtitleStyled,
  HeadingSubtitleFlexContainerStyled,
  ButtonVerifyStyled,
};
