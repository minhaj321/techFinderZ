import { styled, Typography } from "@mui/material";

const SectionWrapperStyled = styled("section")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  objectFit: "cover",
  margin: "0px",
  width: "100% !important",
  backgroundImage: `url('/Assets/how-we-work/car-fixing.png')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  // overflow: "hidden",
  minHeight:'100vh',
  display:'flex',
  justifyContent:'center',
  // flexDirection:'column',
  alignItems:'center'
}));

const SelectionBoxContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  maxWidth: "100vw",
  minWidth: "70vw",
  padding: "100px  40px",
  backgroundColor: theme.palette.common.white,
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    padding: "42px 14px",
  },
}));

const SelectionCardWrapperStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  padding: "10px  14px",
  backgroundColor: theme.palette.common.white,
  cursor: "pointer",
  "&:hover": {
    boxShadow: "8px 16px 32px rgba(0 , 0 , 0 , 0.1)",
  },
}));

const CardImageContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  maxWidth: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "30px",
}));

const CardHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  textTransform: "uppercase",
  color: theme.palette.common.black,
  textAlign: "center",
  letterSpacing: "0px !important",
  fontFamily: "Poppins",
  fontWeight: 500,
}));

const DividerTextStyled = styled(Typography)(({ theme, ...props }) => ({
  textTransform: "none",
  color: theme.palette.common.black,
  textAlign: "center",
  letterSpacing: "0px !important",
  fontFamily: "Poppins",
  fontWeight: 500,
}));

export {
  SectionWrapperStyled,
  SelectionBoxContainerStyled,
  SelectionCardWrapperStyled,
  CardImageContainerStyled,
  CardHeadingStyled,
  DividerTextStyled,
};
