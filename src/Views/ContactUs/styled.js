import { styled, Typography } from "@mui/material";

const SectionContactUsHeroWrapperStyled = styled("div")(
  ({ theme, ...props }) => ({
    // padding: "14px 60px",
    objectFit: "cover",
    margin: "0px",
    width: "100% !important",
    backgroundImage: `url('/Assets/contact-us/hero-image.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // overflow: "hidden",
    minHeight: "780px !important",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "100px",
  })
);

const SectionMainHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  fontFamily: "Poppins",
  letterSpacing: "0px",
  fontWeight: "normal",
  color: theme.palette.common.white,
  textTransform: "uppercase",
  textAlign: "center",
}));

const ImageWrapperDivStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  width: "100%",
  maxHeight: "864px",
  overflow: "hidden",
}));

const ContactUsFormWrapperStyled = styled("div")(({ theme, ...props }) => ({
  marginBottom: "120px",
  width: "100%",
}));

export {
  SectionContactUsHeroWrapperStyled,
  SectionMainHeadingStyled,
  ImageWrapperDivStyled,
  ContactUsFormWrapperStyled,
};
